import Vue from 'vue'
import { Swiper, Pagination, Mousewheel, Autoplay, Navigation } from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// Swiper modules
Swiper.use([Pagination, Mousewheel, Autoplay, Navigation])

// -------------------------------------------------

// Global use
Vue.use(getAwesomeSwiper(Swiper))

