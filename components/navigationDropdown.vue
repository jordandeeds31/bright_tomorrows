<template>
  <div class="nav-bar__dropdown">
    <a :class='{"nav-bar__dropdown__label flex items-center md:mr-8 font-semibold": true, "text-white": theme == "dark"}' href="#" v-on:click="toggle">
      {{label}}
      <font-awesome-icon class="ml-2" :icon="['fas', 'caret-down']" />
    </a>
    <div :class='{"nav-bar__dropdown__items relative flex flex-col items-center mr-8 ml-0 border-2 items-stretch border-gray bg-white font-semibold md:absolute z-10 mt-0 md:mt-8": true, hidden: isHidden}'>
      <prismic-link :field="item.link" v-for="(item, idx) in items" class="flex flex-col font-normal text-left pl-2 pr-2 hover:bg-gray" :key="`nav-item-${idx}`">
        {{item.label}}
      </prismic-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items', 'label', 'theme'],
    data() {
      return {
        isHidden: true
      }
    },
    methods: {
      toggle() {
        this.isHidden = !this.isHidden
      }
    }

  }
</script>

