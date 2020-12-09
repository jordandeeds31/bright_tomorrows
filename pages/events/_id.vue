<template>
  <div class="container mx-auto wrapper flex flex-col md:flex-row" v-if="pageFetched">
    <div class="flex-grow">
      <div class="mt-10 md:mr-17">
        <div class="event_content md:mr-10 pl-2 md:pl-0 pr-2 md:pr-0">
          <prismic-rich-text :field="document.title"></prismic-rich-text>
          <prismic-rich-text v-if="document.content" :field="document.content"></prismic-rich-text>
        </div>
        <div class="bg-gray align-center">
            <div class="location flex justify-center flex-col md:flex-row">
              <div class="venue pt-3 mr-10">
                <span class="pl-2 md:pl-0">Location:</span><br>
                <prismic-rich-text class="italic pl-2 md:pl-0" v-if="document.venue" :field="document.venue"></prismic-rich-text>
              </div>
              <div class="venueAddress pl-2 md:pl-5 md:pb-4 pt-3 mr-10">
                <span>Address:</span><br>
                <p class="italic">{{document.venue_address}}</p>
              </div>
              <div class="time md:pl-5 pb-4 pt-3 pl-2">
                <span class="md:pl-5">Time: </span><br>
                {{ formattedTime }}
              </div>
            </div>
        </div>
        <div class="map mt-5 mb-10 md:pl-0">
          <iframe
            width="1000"
            height="200"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            :src='`https://maps.google.com/maps?q=${document.map.latitude},${document.map.longitude}&hl=en&z=14&amp;output=embed`'
          >
          </iframe>
          <br />
          <small>
            <a
              href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed"
              style="color:#0000FF;text-align:left"
              target="_blank"
            >
              See map bigger
            </a>
          </small>
        </div>
      </div>
    </div>
    <v-sidebar v-if="sidebar" :sidebar="sidebar"/>
  </div>
</template>

<script>
  import moment from 'moment-timezone'

  export default {
    layout: 'subpage',
    data() {
      return {
        document: {
        },
        pageFetched: false,
        sidebar: null
      }
    },
    computed: {
      formattedTime() {
        return moment(this.document.date_time).tz('America/Chicago').format( "YYYY-MM-DDTHH:mm:ss")
      }
    },
    async fetch() {
    try{
      this.sidebar = (await this.$prismic.api.getByUID('sidebar', 'default'))
      this.document = (await this.$prismic.api.getByID(this.$route.params.id)).data
      this.pageFetched = true;
    } catch (e) {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      throw new Error('Event not found')
    }
  }
  }
</script>


<style>
</style>
