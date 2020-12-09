<template>
  <div class="slices">
    <section class="slices__block" v-for="(slice, index) in slices" :key="'slice-' + index">
      <component  :slice="slice" :is="`${slice.slice_type}_slice`"/>
    </section>
  </div>
</template>

<script>

  import embed_slice from "~/components/slices/embedSlice.vue";
  import content_slice from "~/components/slices/contentSlice.vue";
  import lead_slice from "~/components/slices/leadSlice.vue";
  import image_slice from "~/components/slices/imageSlice.vue";
  import blockquote_slice from "~/components/slices/blockquoteSlice.vue";
  import notice_slice from "~/components/slices/noticeSlice.vue";


  export default {
    props: ['slices'],
    components: {
      embed_slice,
      content_slice,
      image_slice,
      lead_slice,
      blockquote_slice,
      notice_slice
    },
  }
</script>

<style scoped>
    section.slices__block {
      @apply p-5 my-0 border-b-2 border-light-gray;
    }

    section.slices__block:nth-child(even) {
    }
</style>
