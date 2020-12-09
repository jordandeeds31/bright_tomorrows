<template>
  <div class="document-listing">
    <div v-for="result in documents" :key="`result-${result.id}`">
      <div class="content__container flex flex-col md:flex-row">
        <preview :image="result.data.preview" width="200px" height="200px" class="mt-4"/>
        <div class="content">
          <nuxt-link class="no-underline" :to="$prismic.linkResolver(result)">
            <h2 class="font-sans text-2xl mt-3 ml-3">
              {{$prismic.asText(result.data.title)}}
            </h2>
          </nuxt-link>
          <prismic-rich-text class="ml-3 mr-3" :field="result.data.summary"></prismic-rich-text>
          <nuxt-link :to="$prismic.linkResolver(result)" class="text-base no-underline ml-3 md:ml-0 md:ml-3">Read More</nuxt-link><br>
          <div v-for="{category} in result.data.categories" class="mt-2">
            <span v-if="category.data" class="ml-3 bg-orange text-white rounded-full px-2 uppercase">{{category.data.title}}</span>
          </div>
        </div>
      </div>
      <hr class="mt-3">
    </div>
  </div>
</template>

<script>
  import preview from '~/components/preview';

  export default {
    components: {
      preview
    },
    props: {
      documents: {
        default() {
          return [
          ]
        }
      }
    }
  }
</script>

<style scoped>
  img {
  }

  hr {
    border: 1px solid orange;
    opacity: 0.2;
  }
</style>
