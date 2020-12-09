<template>
  <div v-if="pageFetched">
    <prismic-image :field="document.preview.Hero" class="hero-image"/>
  <div class="container mx-auto wrapper flex flex-col md:flex-row content-container">
    <div class="flex-grow">
      <div class="mt-8 pr-8 md:mr-17">
        <section class="main-content pl-8 md:pl-0">
            <prismic-rich-text :field="document.content"></prismic-rich-text>
        </section>
        <v-slices :slices="document.body" class="mb-1 md:mb-17"/>
      </div>
    </div>
      <v-sidebar :sidebar="document.sidebar" class="pl-8 pr-8"/>
  </div>
  </div>
</template>

<script>
  import Page from '~/components/page'

  export default {
    extends: Page,
    computed: {
      uid() {
        return this.$route.params.uid
      }
    }
  }
</script>

<style>
  .hero-image {
    max-height: 400px;
  }
</style>

