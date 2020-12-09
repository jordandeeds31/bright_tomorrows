<template>
  <div>
    <div class="contentHead">
      <prismic-rich-text :field="slice.primary.content1" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['slice']
  }
</script>


<style>
    .contentHead p {
      text-align: center;
    }
</style>
