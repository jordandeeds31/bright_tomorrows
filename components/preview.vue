<template>
  <div :style="{
    '--width': width,
    '--height': height
  }">
    <div class="preview-image">
      <prismic-image v-if="image.url" :field="image"/>
      <img v-else src="/placeholder.png"/>
    </div>
  </div>
</template>

<script>
  export default {
      props:
        {
          image: {
            default() {
              return {
                url: null
              }
            }
          },
          width: {
            default() {
              return '100%'
            }
          },
          height: {
            default() {
              return 'auto'
            }
          }
      }
  }
</script>


<style scoped>
  img {
    @apply inset-0 absolute object-cover;
    width: 100%;
    height: 100%;
  }

  .preview-image{
    @apply relative overflow-hidden;
    width: var(--width);
    height: var(--height);
  }

  @media only screen and (max-width: 600px) {
    .preview-image {
      width: 100%;
    }
  }
</style>
