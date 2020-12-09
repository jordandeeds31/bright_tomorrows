<template>
  <div>
    <div class="content">
      <prismic-rich-text v-if="content" :field="content" />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['slice'],
    computed: {
      content() {
        if (this.slice.primary.content) {
          return this.slice.primary.content
        }
        return this.slice.primary.content1
      }
    }
  }

</script>

