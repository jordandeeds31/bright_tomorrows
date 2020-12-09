<template>
  <div>
    <prismic-rich-text :field="slice.primary.title" class="text-center"/>
    <span v-html="slice.primary.html"></span>
  </div>
</template>

<script>
  export default {
    props: ['slice']
  }
</script>
