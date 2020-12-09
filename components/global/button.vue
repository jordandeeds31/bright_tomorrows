<template>
  <prismic-link :class="{
    'button text-center': true,
    'button--solid': theme === 'solid',
    'button--outline': theme === 'outline',
    'button--outline-light': theme === 'outline-light'
  }" v-if="field" :field="field">
    <slot />
  </prismic-link>
</template>


<script>
    export default {
      props: {
        'theme': {
          default() {
            return 'solid'
          }
        },
        "field": {}
      }
    }
</script>

<style scoped>
  @media only screen and (max-width: 600px) {

  }
</style>
