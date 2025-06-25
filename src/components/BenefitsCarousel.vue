<template>
  <Swiper
    :slides-per-view="'auto'"
    :space-between="2"
    :grabCursor="true"
    :freeMode="true"
    class="benefit-swiper"
  >
    <SwiperSlide
      v-for="(item, index) in benefits"
      :key="index"
      class="w-[120px] sm:w-[120px] md:w-[140px] lg:w-[180px] h-auto"
    >
      <BenefitItem
        :image="item.image"
        :link="item.link"
        :text="item.label"
        :category="item.category"
        :objectPosition="item.position"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'

export default {
  name: 'BenefitSwiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    benefits: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.benefit-swiper {
  padding: 8px 16px;
}
</style>
