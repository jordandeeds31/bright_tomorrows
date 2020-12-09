<template>
  <div v-if="document.title">
    <v-carousel :slides="document.carousel" class="hero"/>
    <div class="content-container">
    <section class="lead bg-blue text-white pb-10 pt-10">
      <div class="container flex align-center mx-auto flex-col md:flex-row">
        <h1 class="lead_image p-0 m-0 w-full md:ml-28"><prismic-image :field="document.lead_image" width="363" height="63" class="mb-2 md:mb-0 pl-3 md:pl-0"/></h1>
        <div class="lead__content md:pl-15 mr-28 w-full">
          <prismic-rich-text :field="document.lead" class="pl-5 md:pl-0"/>
        </div>
      </div>
    </section>
    <section class="services mt-7 md:mt-17">
      <div class="container mx-auto">
        <div class="services__title text-blue text-center mb-7">
          <prismic-rich-text :field="document.services_title"/>
        </div>
        <div class="services__images flex flex-wrap -mx-2 flex-col md:flex-row">
          <div v-for="service in document.services" class="w-full md:w-1/3 mb-0 md:mb-4 px-2">
            <v-page-preview :field="service.page"/>
          </div>
        </div>
      </div>
    </section>
    <section class="relative quote flex items-center justify-center mt-11 md:mt-17">
        <div class="quote-image__overlay absolute inset-0 bg-black opacity-50">
        </div>
        <prismic-image :field="document.quote_image" class="quote_image absolute inset-0 w-screen z-n2 w-full h-full object-cover"/>
        <div class="quote__content relative">
          <prismic-rich-text :field="document.quote" class="text-white text-center"/>
        </div>
    </section>
    <section class="contact bg-blue">
      <div class="container mx-auto flex pt-7 pb-7 flex-col md:flex-row justify-center items-center">
        <prismic-rich-text :field="document.contact" class="text-white text-center mb-2 md:mb-0 md:mr-3"/>
        <div class="md:pl-3">
          <v-button :field="document.contact_button_link" class="support">
            {{document.contact_button_label}}
          </v-button>
        </div>
      </div>
    </section>
    <div class="percentages__container pt-16 bg-gray">
      <div class="container mx-auto">
        <div class="percentages__title mb-10 text-blue pl-7 md:pl-0">
          <prismic-rich-text :field="document.percentages_title"/>
        </div>
        <section v-waypoint="{active: !scrollToPercentages, callback: handleScrolledToPercentages}" class="percentages flex flex-wrap pl-12 md:pl-0 pb-10">
            <div v-for="(number, index) in document.percentages" class="number text-blue w-full md:w-1/2 xl:w-1/3 pr-6 pb-1 md:pb-6">
                <CountUp v-if="scrollToPercentages"
                :endVal="number.number"
                :delay="300 * index"
                :options="{
                  useEasing: true,
                  decimalPlaces: number.decimal_places,
                  suffix: `<span class='suffix'>${number.suffix}</span>`
                }"
              />
              <template v-else>
                0
              </template>
              <prismic-rich-text :field="number.description"/>
            </div>
        </section>
      </div>
    </div>
      <section class="story mt-10 md:mt-22 flex justify-center md:space-x-30 ml-0 flex-col md:flex-row">
        <div v-for="story in document.story">
          <preview :image="story.post.data.preview" width="400px" height="200px" class="story_image mt-7 ml-3 md:ml-0 mr-3 md:mr-0 md:mb-5"/>
          <h3 class="text-blue flex justify-center">{{ $prismic.asText(story.post.data.title) }}</h3>
          <div class="flex justify-center">
            <prismic-link :field="story.story_button_link" class="uppercase mt-3 border-2 rounded-full pt-2 pb-2 pr-5 pl-5">
              {{ story.story_button_label }}
            </prismic-link>
          </div>
        </div>
      </section>
      <section>
        <div class="mx-auto mt-10 md:mt-23">
          <div class="call-to-action flex flex-wrap flex-col md:flex-row">
            <div v-for="(callToAction, id) in document.call_to_action" class="w-full md:w-1/2">
              <v-image-link :field="callToAction.page" :key="`image-link-${id}`"/>
            </div>
          </div>
        </div>
      </section>
  </div>
  </div>
</template>

<script>
  import CountUp from 'vue-countup-v2';
  import preview from '~/components/preview';

  export default {
    components: {
      CountUp,
      preview
    },
    layout: 'default',
    async fetch() {
      try {
        this.document = (await this.$prismic.api.getSingle('home',
          {fetchLinks: ['pages.preview', 'pages.title', 'posts.preview', 'posts.title']}
        )).data
      } catch (e) {
        // set status code on server and
        if (process.server) {
          this.$nuxt.context.res.statusCode = 404
        }
        // use throw new Error()
        throw new Error('Post not found')
      }
    },
    data() {
      return {
        document: {},
        scrollToPercentages: false
      }
    },
    methods: {
      handleScrolledToPercentages({going, direction}) {
        if (going === this.$waypointMap.GOING_IN) {
          this.scrollToPercentages = true
        }
      }
    }
  }

</script>

<style scoped>
  .services__image{
    min-height: 208px;
  }

  .quote {
      min-height: 502px;
  }

  .percentages__container > .container {
    max-width: 700px;
  }

  @media only screen and (max-width: 600px) {
    .support {
      width: 100px;
    }

    .lead_image {
      width: 350px
    }


  }

</style>



