<template>
  <div>
    <prismic-rich-text :field="slice.primary.title1" />
    <div class="posts">
      <div class="recent__posts underline mb-2" v-for="item in slice.items">
        <prismic-link :field="item.category">
          {{item.category.data.title}}
        </prismic-link>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['slice']
  }
</script>
