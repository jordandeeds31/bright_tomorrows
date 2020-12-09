<template>
  <div v-if="pageFetched">
    <prismic-image :field="document.preview.Hero" class="hero"/>
  <div class="content-container container mx-auto wrapper flex flex-col md:flex-row">
    <div class="flex-grow mb-2 md:mb-17">
      <div class="mt-8 mr-17">
        <prismic-rich-text :field="document.content" class="pl-2 md:pl-0 pr-2 md:pr-0"></prismic-rich-text>
        <v-cognito-form :id="5"/>
      </div>
    </div>
    <v-sidebar :sidebar="document.sidebar"/>
  </div>
  </div>
</template>

<script>
  import Page from "@/components/page";

  export default {
    extends: Page,
    data() {
      return {
        uid: 'contact-us'
      }
    },
  }
</script>

