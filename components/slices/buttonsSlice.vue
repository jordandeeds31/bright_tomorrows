<template>
  <div>
    <div class="buttons flex items-center justify-center" v-for="item in slice.items">
      <v-button :field="item.link" class="px-8">
        <span class="uppercase">{{item.label}}</span>
      </v-button>
    </div>
  </div>
</template>

<script>
  export default {
      props: ['slice']
  }
</script>

