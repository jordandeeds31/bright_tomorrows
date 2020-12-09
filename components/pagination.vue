<template>
  <div class="pagination mt-4 flex">
    <nuxt-link :to="this.prevUrl" v-if="this.prevUrl" class="mr-2">
      Previous
    </nuxt-link>
    <div>Page {{results.page}} of {{results.total_pages}}</div>
    <nuxt-link :to="this.nextUrl" v-if="this.nextUrl" class="ml-2">
      Next
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['results'],
    computed: {
      //The results page number that we're currently on.
      page() {
        return parseInt(this.$route.query.page ? this.$route.query.page : 1)
      },

      //The next page URL or null if there is no next page.
      nextUrl() {
        if (this.results.total_pages <= this.page) {
          return null;
        }

        return this.$router.currentRoute.path + "?" + new URLSearchParams({
          "search": this.$route.query.search,
          "page": this.page + 1
        })
      },

      //The previous page or null if there is no previous page.
      prevUrl() {
        if (this.page <= 1) {
          return null;
        }

        return this.$router.currentRoute.path + "?" + new URLSearchParams({
          "search": this.$route.query.search,
          "page": this.page - 1
        })
      }
    },
  }
</script>
