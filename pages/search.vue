<template>
  <div class="search container mx-auto flex mt-9">
    <div class="search">
      <form action="/search" method="get">
        <input type="text" name="search" placeholder="search" class="border-2 border-blue rounded-lg pl-2">
        <button type="submit" class="pl-2"><font-awesome-icon class="ml-1" :icon="['fas', 'search']" /></button>
      </form>
      <div v-if="fetched && !search.results.length">
        <p>No results found. Please try again.</p>
      </div>
      <document-listing :documents="search.results"/>
      <pagination :results="search" class="mb-17"/>
    </div>
  </div>

</template>

<script>
  import DocumentListing from '@/components/document-listing'
  import Pagination from '@/components/pagination'

  export default {
    components: {DocumentListing, Pagination},
    layout: 'subpage',
    data() {
      return {
        search: { //The search results from Prismic.
          results: [],
          total_pages: 0,
        },
        fetched: false //Have we finished fetching data or not?
      }
    },
    watch: {
      '$route.query': '$fetch'
    },
    async fetch() {
      try {
        //Fetch the search results from prismic limited to pageSize. Get the search query and current page from the url query string.
        this.search = await this.$prismic.api.query([
          this.$prismic.predicates.any('document.type', ['pages', 'posts', 'events']),
          this.$prismic.predicates.fulltext('document', this.$route.query.search)
        ], {pageSize: 5, page: this.$route.query.page})
      } catch (e) {
        //We don't need to do anything.
      }
      this.fetched = true
    },
  }
</script>

<style scoped>
  .search {
    margin-left: 20px;
  }

  @media only screen and (max-width: 600px) {
    .search{
      margin-left: 10px;
    }
  }
</style>


