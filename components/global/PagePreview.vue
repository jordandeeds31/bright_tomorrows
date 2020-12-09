<template>
  <prismic-link :field="field" class="services__image flex relative overflow-hidden flex-col">
    <div class="flex-grow"></div>
    <div class="service-image__overlay absolute inset-0 bg-black z-10 hover:opacity-0 opacity-50 duration-500">
    </div>
    <prismic-image :field="field.data.preview" class="absolute inset-0 w-full object-cover h-full z-0 flex items-end" v-if="field.data.preview"/>
    <div class="relative z-20 flex-grow-0 py-2 px-4 text-white pointer-events-none">
      <h3>{{ $prismic.asText(field.data.title) }}</h3>
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
</style>
