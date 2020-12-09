<template>
  <div class="content-container container m-auto wrapper flex" v-if="pageFetched">
    <div class="flex-grow">
       <div class="mt-10 md:mr-17 mb-10">
        <prismic-rich-text :field="document.content" v-if="document.content.length"></prismic-rich-text>
        <no-ssr>
          <calendar :events="calendarEvents"/>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import linkResolver from "../plugins/linkResolver";
import Page from "@/components/page"
import moment from 'moment-timezone'

export default {
  extends: Page,
  data() {
    return {
      document: {},
      events: [],
      uid: 'calendar',
      calendarEvents: []
    }
  },
  async fetch() {
    await this.loadPage()
    try {
      this.events = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'events'),
        {orderings: '[my.events.date desc]'})
        this.calendarEvents = this.events.results.map(item => {
        return {
          title: this.$prismic.asText(item.data.title),
          date: moment(item.data.date_time).tz('America/Chicago').format( "YYYY-MM-DDTHH:mm:ss"),
          url: linkResolver(item)
        }
      })
    } catch (e) {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      console.log(e)
      throw new Error('Error fetching posts')
    }
  }
}
</script>
