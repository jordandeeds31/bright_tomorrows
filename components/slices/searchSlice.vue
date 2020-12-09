<template>
  <div>
    <form action="/search" method="get">
      <input type="text" name="search" placeholder="search" class="field border-2 border-blue rounded-lg pl-2">
    </form>
  </div>
</template>

<script>
  export default {
    props: ['slice']
  }
</script>


<style scoped>
  input {
    max-width: 230px;
    min-width: 230px;
    max-height: 41px;
    min-height:41px;
  }


</style>
