<template>
  <div class="container m-auto wrapper flex flex-col md:flex-row" v-if="pageFetched">
    <div class="flex-grow mb-17">
      <div class="mt-10 md:mr-17 ml-2 md:ml-0 mr-2 md:mr-0">
        <prismic-rich-text :field="document.content"></prismic-rich-text>
      </div>
    </div>
      <v-sidebar :sidebar="document.sidebar" class="md:ml-0 md:mr-20"/>
  </div>
</template>

<script>
  import Page from "@/components/page";

  export default {
    extends: Page,
    data() {
      return {
        documentType: 'posts'
      }
    },
    computed: {
      uid() {
        return this.$route.params.uid
      }
    }
  }
</script>
