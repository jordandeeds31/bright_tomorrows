<template>
  <div class="relative">
    <div ref="carousel" class="carousel swiper-container" v-swiper="options">
      <div class="swiper-navigation z-30" slot="pagination">
        <div class="swiper-navigation__prev" ref="prev">
          <font-awesome-icon :icon="['fas', 'chevron-left']" v-show="!isBeginning"/>
        </div>
        <div class="swiper-navigation__next" ref="next">
          <font-awesome-icon :icon="['fas', 'chevron-right']" v-show="!isEnd"/>
        </div>
      </div>
      <div class="swiper-wrapper">
        <div v-for="(slide, idx) in slides"
             class="carousel__slide swiper-slide flex justify-center items-center text-center text-white"
             :key="`slide-${idx}`">
          <div class="carousel-image__overlay absolute inset-0 bg-black z-10 opacity-50">
          </div>
          <prismic-image :field="slide.image" class="absolute inset-0 w-screen z-n2 w-full h-full object-cover"/>
          <div class="carousel__content ">
            <prismic-rich-text :field="slide.content" class="mb-4 relative z-20"/>
            <v-button :field="slide.button_link" class="relative z-20">
              {{ slide.button_label }}
            </v-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {},
  },
  data() {
    return {
      isEnd: true,
      isBeginning: true
    }
  },
  mounted() {
    this.swiper.on('slideChange', () => this.handleSwiper());
    this.swiper.on('init', () => this.handleSwiper());
    this.handleSwiper();
  },
  computed: {
    swiper() {
      return this.$refs.carousel.swiper
    },
    options() {
      return {
        navigation: {
          nextEl: this.$refs.next,
          prevEl: this.$refs.prev
        }
      }
    }
  },
  methods: {
    handleSwiper() {
      this.isEnd = this.swiper.isEnd
      this.isBeginning = this.swiper.isBeginning
    }
  }
}
</script>

<style scoped>
.carousel__slide {
  min-height: 625px;
  max-height: 90vh;
}

.swiper-navigation__prev, .swiper-navigation__next {
  @apply text-orange;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  padding: 50px;
  font-size: 30px;
}

.swiper-navigation__prev {
  left: 0;
}

.swiper-navigation__next {
  right: 0;
}

.carousel__content {
  max-width: 675px;
}

.carousel__content p {
  padding-right: 2px;
}
</style>
