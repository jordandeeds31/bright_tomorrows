export default {
  layout: 'subpage',
  transition: 'page',
  data() {
    return {
      pageFetched: false,
      document: {},
      documentType: 'pages'
    }
  },
  async fetch() {
    await this.loadPage()
  },
  methods: {
    pageQuery() {
      return this.$prismic.api.getByUID(this.documentType, this.uid)
    },

    async loadPage() {
      if (this.uid) {
        try {
          this.document = (await this.pageQuery()).data
        } catch (e) {
          // set status code on server and
          if (process.server) {
            this.$nuxt.context.res.statusCode = 404
          }

          console.log(e)

          // use throw new Error()
          throw new Error('Page not found')
        }

        if (this.document.redirect) {
          this.$router.push({
            path: this.document.redirect
          })
        }

        this.pageFetched = true
      }
    }
  }
}
