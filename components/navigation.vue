<template>
  <nav :class='{"nav-bar relative flex flex-row justify-between py-3 items-stretch": true, "nav-bar--open": open, "bg-white": theme == "light", "bg-blue text-white": theme == "dark"}'>
    <div class="nav-bar__image ml-8 flex items-center">
      <nuxt-link to="/"><prismic-image width="309" v-if="logo" :field="logo" class="nav-bar__logo mb-1 md:mb-0"/></nuxt-link>
    </div>
    <div class="nav-bar__links flex items-stretch mr-8" v-if="menu">
      <div :class='{
           "nav-bar__items  flex flex-col md:flex-row text-center translate-y-full md:translate-y-0 transform md:transform md:items-stretch items-center absolute md:relative bottom-0 right-0 left-0 md:bg-opacity-0": true,
           "hidden md:flex": !open,
           "bg-blue": theme === "dark",
           "bg-white": theme === "light"
      }'>
        <div class="nav-bar__item flex items-center mb-2 md:mb-0 md:mr-4 lg:mr-8 font-semibold" v-for="item in globals.primary_navigation">
          <prismic-link :class='{"text-white": theme == "dark"}' :field="item.link">
            {{item.label}}
          </prismic-link>
        </div>
        <navigation-dropdown :theme="theme" class="flex md:items-stretch mb-2 md:mb-0" :items="globals.primary_navigation_drop_down" :label="globals.primary_navigation_dropdown_label"/>
        <div class="donate_button flex items-center">
          <v-button :field="globals.primary_navigation_button" class="mb-2 md:mb-0">
            <span class="uppercase">{{globals.primary_navigation_button_label}}</span>
          </v-button>
        </div>
    </div>
      <font-awesome-icon class="md:hidden ml-8 mt-2" v-on:click="toggle" :icon="['fas', icon]"  />
    </div>
  </nav>
</template>

<script>
  import navigationDropdown from "./navigationDropdown";

  export default {
    components: {
      navigationDropdown
    },
    props: {
      theme: {
        default: 'light'
      },
      menu: {
        default: true
      }
    },
    data() {
      return {
        globals: {
          primary_navigation: [],
          logo: null,
          logo_light: null,
          primary_navigation_button: null,
          primary_navigation_button_label: '',
          primary_navigation_drop_down: '',
          primary_navigation_dropdown_label: '',

        },
        open: false
      }
    },
    computed: {
      icon() {
        return this.open ? "times" : "bars"
      },
      logo() {
        return this.theme == "dark" ? this.globals.logo_light : this.globals.logo
      }
    },

    async fetch() {
      try {
        const globals = (await this.$prismic.api.getSingle('globals')).data
        this.globals = globals
      } catch(e) {

      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      }
    }
  }

</script>

<style scoped>
  .nav-bar {
    height: 93px;
  }

  .nav-bar__links {
      z-index: 10;
  }

  @media screen and (max-width: 968px) {
    .nav-bar__logo {
      max-width: 200px;
    }
  }

  @media screen and (max-width: 600px) {
    .nav-bar {
      height: 75px;
    }
  }
</style>



