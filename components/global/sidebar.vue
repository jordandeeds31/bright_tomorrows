<template>
  <aside class="sidebar mt-1 md:mt-10 flex-grow-0">
    <div class="sidebar__block my-6 text-center md:text-left" v-for="(slice, index) in document.body" :key="'slice-' + index">
      <component  :slice="slice" :is="`${slice.slice_type}_slice`"/>
    </div>
  </aside>
</template>

<script>
  import buttons_slice from "~/components/slices/buttonsSlice.vue";
  import embed_slice from "~/components/slices/embedSlice.vue";
  import search_slice from "~/components/slices/searchSlice.vue";
  import post_summaries_slice from "~/components/slices/postSummariesSlice.vue";
  import content_slice from "~/components/slices/contentSlice.vue";
  import posts_categories_slice from "~/components/slices/postsCategoriesSlice.vue";

  export default {
    props: ['sidebar'],
    components: {
      buttons_slice,
      embed_slice,
      search_slice,
      post_summaries_slice,
      content_slice,
      posts_categories_slice
    },
    data() {
      return {
        document: {}
      }
    },
    watch: {
      // whenever sidebar changes, this function will run
      sidebar() {
        this.$fetch()
      }
    },
    computed: {
      id() {
        if(this.sidebar && this.sidebar.id) {
          return this.sidebar.id
        } else {
          return 'XzVdExIAALhk-wtC'
        }
      }
    },
    async fetch() {
      try{
        this.document = (await this.$prismic.api.getByID(this.id, {
          fetchLinks: ['posts.title', 'pages.title', 'category.title']
        })).data
      } catch (e) {
        // use throw new Error()
        throw new Error('Event not found')
      }
    }
  }
</script>

<style scoped>
    aside {
      flex-basis: 230px;
    }
</style>
