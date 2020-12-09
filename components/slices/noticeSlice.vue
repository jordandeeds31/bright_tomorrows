<template>
  <div class="notification p-4">
    <prismic-rich-text :field="slice.primary.content1"/>
  </div>
</template>


<script>
  export default {
    props: ['slice']
  }
</script>

<style>
  .notification{
    background-color: #FFF2AE;
  }

</style>
