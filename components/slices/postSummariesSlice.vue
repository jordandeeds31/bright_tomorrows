<template>
  <div>
      <prismic-rich-text :field="slice.primary.title" />
      <div class="posts">
        <div class="recent__posts underline mb-2" v-for="post in posts">
          <prismic-link :field="post">
            {{$prismic.asText(post.data.title)}}
          </prismic-link>
      </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    props: ['slice'],
    created() {
      if (this.slice.items.length) {
        this.posts = this.slice.items.map((item) => item.post)
      } else {
        this.fetchPosts()
      }
    },
    methods:
    {
      async fetchPosts() {
        let result = await this.$prismic.api.query(
          this.$prismic.predicates.at('document.type', 'posts'),
          { orderings : '[my.posts.date desc]', pageSize: 5, page: this.$route.query.page, fetchLinks: ['posts.title']})
        this.posts = result.results
      }
    }
  }
</script>
