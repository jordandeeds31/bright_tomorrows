<template>
  <footer class="footer_navigation flex items-center bg-blue flex-col md:flex-row">
    <div class="container justify-between mx-auto nav-bar-bottom__links flex pt-2 md:pt-6 pb-6 flex-col pl-4 md:pl-0 md:flex-row">
      <div class="nav-bar_bottom__items flex flex-col md:flex-row">
        <div class="nav-bar_bottom__item" v-for="item in globals.bottom_navigation">
          <prismic-link :field="item.link" class="text-white mr-0 md:mr-12">
            {{item.label}}
          </prismic-link>
        </div>
      </div>
      <div class="nav-bar-bottom__title">
        <prismic-rich-text :field="globals.bottom_navigation_title" class="text-white mt-3 md:mt-0"/>
      </div>
    </div>
  </footer>

</template>

<script>
  export default {
    data() {
      return {
        fetched: false,
        globals: {
          bottom_navigation: [],
          nav_links: '',
          bottom_navigation_title: []
        }
      }
    },
    async fetch() {
      try {
        const globals = (await this.$prismic.api.getSingle('globals')).data
        this.globals = globals
      } catch (e) {
      }
      this.fetched = true
    }
  }
</script>

<style scoped>

</style>
