<template>
  <prismic-link :field="field" class="image-link flex relative overflow-hidden flex-col">
    <div class="image-link__overlay absolute inset-0 bg-black z-10 hover:opacity-0 opacity-50 duration-500">
    </div>
    <prismic-image :field="field.data.preview" class="absolute inset-0 w-full object-cover h-full z-0 flex items-end pointer-events-none" v-if="field.data.preview"/>
    <div class="relative z-20 px-4 text-center pointer-events-none">
      <span class="button text-center button--outline-light">
         {{ $prismic.asText(field.data.title) }}
      </span>
    </div>
  </prismic-link>
</template>

<script>
  export default{
    props: ['field']
  }
</script>

<style scoped>
  h3 {
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 0.51);
  }

  .image-link {
    padding: 150px 0;
  }

  @media screen and (max-width: 600px) {
    .image-link {
      padding: 100px 0;
    }
  }
</style>
