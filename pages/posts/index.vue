<template>
  <div class="container m-auto wrapper flex flex-col md:flex-row" v-if="pageFetched">
    <div class="flex-grow">
      <div class="mt-10 md:mr-17">
        <prismic-rich-text :field="document.content"></prismic-rich-text>
        <div class="posts">
          <document-listing :documents="posts.results"/>
          <pagination :results="posts" class="ml-3 md:ml-0 mb-1 md:mb-17"/>
        </div>
      </div>
    </div>
    <v-sidebar :sidebar="document.sidebar" class="ml-3 md:ml-0"/>
  </div>
</template>

<script>

import Page from "@/components/page";
import DocumentListing from '@/components/document-listing'
import Pagination from '@/components/pagination'

export default {
  extends: Page,
  components: {DocumentListing, Pagination},
  data() {
    return {
      posts: [],
      uid: 'articles'
    }
  },
  async fetch() {
    await this.loadPage()
    try{
        this.posts = await this.$prismic.api.query(
        this.$prismic.predicates.at('document.type', 'posts'),
        { orderings : '[my.posts.date desc]', pageSize: 15, page: this.$route.query.page, fetchLinks: ['posts.preview', 'posts.title', 'category.title']})
    } catch (e) {
      // set status code on server and
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // use throw new Error()
      console.log(e)
      throw new Error('Error fetching posts')
    }
  },
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>

