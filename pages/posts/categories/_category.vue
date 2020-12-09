<template>
  <div class="container m-auto wrapper flex flex-col md:flex-row" v-if="fetched">
    <div class="flex-grow">
      <div class="mt-10 md:mr-17">
        <prismic-rich-text :field="category.summary" class="pl-2 md:pl-0 pr-2 md:pr-0"></prismic-rich-text>
        <div class="posts">
          <document-listing :documents="posts.results" />
        </div>
      </div>
    </div>
    <v-sidebar :sidebar="sidebar" class="pl-2 md:pl-0"/>
  </div>
</template>

<script>
import DocumentListing from '~/components/document-listing'

export default {
  layout: 'subpage',
  components: {DocumentListing},
  data() {
    return {
      fetched: false,
      category: {
        summary: ""
      },
      sidebar: {},
      posts: []
    }
  },
  async fetch() {
    try{
      this.sidebar = (await this.$prismic.api.getByUID('sidebar', 'posts'))
      let category = (await this.$prismic.api.getByUID('category', this.$route.params.category))
      this.category = category.data
      this.posts = await this.$prismic.api.query([
          this.$prismic.predicates.at('document.type', 'posts'),
          this.$prismic.predicates.at('my.posts.categories.category', category.id)
        ],
        { orderings : '[my.posts.date desc]'})
    } catch (e) {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      console.log(e)
      throw new Error('Category not found')
    }

    this.fetched = true
  }
}
</script>

