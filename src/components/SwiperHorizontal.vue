<template>
  <v-container>
    <p class="text-2xl font-bold mt-4">{{ title }}</p>
  </v-container>

  <swiper
    :slides-per-view="'auto'"
    :space-between="16"
    :grab-cursor="true"
    :free-mode="true"
    class="pb-8 px-4"
  >
    <swiper-slide
      v-for="(item, index) in items"
      :key="item.name"
      :style="{ width: isMobile ? '204px' : '300px' }"
    >
      <div
        class="bg-white flex flex-col p-4 shadow-xl rounded-2xl group relative"
        @click="toggleMobileHover(index)"
      >
        <v-img
          :lazy-src="item.image"
          :src="item.image"
          class="group-hover:blur-xs"
        />

        <div
          v-if="!isMobile"
          class="absolute inset-0 bg-black/70 hidden items-center justify-between p-4 opacity-100 rounded-2xl transform transition-transform duration-100 group-hover:opacity-0 group-hover:flex group-hover:flex-col group-hover:cursor-pointer"
        >
          <p class="text-white font-medium text-center lg:text-lg">
            {{ item.name }}
          </p>
          <p class="text-white text-center lg:text-md">
            {{ item.description }}
          </p>
          <button
            @click.stop="handleClick(item)"
            class="bg-zinc-50 text-[#31c48d] font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#31c48d] hover:text-white"
          >
            Ver Benefício
          </button>
        </div>

        <div
          v-if="isMobile && isHoveredItem === index"
          class="absolute inset-0 bg-black/70 flex flex-col items-center justify-between p-4 rounded-2xl cursor-pointer"
        >
          <p class="text-white font-medium text-center lg:text-lg">
            {{ item.name }}
          </p>
          <p class="text-white text-center lg:text-md">
            {{ item.description }}
          </p>
          <button
            @click.stop="handleClick(item)"
            class="bg-zinc-50 text-[#31c48d] font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#31c48d] hover:text-white"
          >
            Ver Benefício
          </button>
        </div>

        <p class="text-center text-[#31c48d] font-medium lg:text-lg">
          {{ item.name }}
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";

export default {
  name: "SwiperHorizontalSlide",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMobile: false,
      isHoveredItem: null,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
  },
  methods: {
    handleClick(item) {
      this.$emit("view-benefit", item);
    },
    toggleMobileHover(index) {
      if (!this.isMobile) return;
      this.isHoveredItem = this.isHoveredItem === index ? null : index;
    },
  },
};
</script>
