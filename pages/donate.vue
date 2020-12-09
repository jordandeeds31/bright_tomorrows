<template>
  <div v-if="pageFetched" class="flex flex-col md:flex-row content-container">
    <div class="md:w-1/2 flex">
      <prismic-image :field="document.preview.VerticalHero" class="object-cover hidden md:block"/>
      <prismic-image :field="document.preview" class="object-cover w-screen md:hidden hero"/>
    </div>
    <div class="md:w-1/2 py-10 px-6">
        <prismic-rich-text :field="document.content"></prismic-rich-text>
        <donate-form />
      </div>
  </div>
</template>

<script>
  import donateForm from "~/components/donate-form";
  import Page from "@/components/page";

  export default {
    extends: Page,
    layout: 'donation',
    components: {
      donateForm
    },
    data() {
      return {
        uid: 'donate'
      }
    },
  }
</script>

<style>
  .donation main {
    display: flex;
  }
</style>
