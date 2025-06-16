<template>
  <div class="flex flex-col mt-2">
    <v-container>
      <p class="text-2xl font-bold mt-4">{{ title }}</p>
    </v-container>

    <div
      class="flex overflow-x-auto scroll-smooth"
      style="scrollbar-width: none;"
      ref="scrollContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      :style="{ cursor: isDragging ? 'grabbing' : 'grab' }"
    >
      <v-container class="flex flex-row gap-4 lg:gap-10 pb-8">
        <div
          v-for="(item, index) in items"
          :key="item.name"
          class="bg-white flex flex-col min-w-[204px] min-h-[204px] lg:min-w-[300px] lg:h-[300px] p-4 shadow-xl rounded-2xl group relative"
          @click="toggleMobileHover(index)"
        >
          <v-img :lazy-src="item.image" :src="item.image" class="group-hover:blur-xs" />

          <div
            v-if="!isMobile"
            class="absolute inset-0 bg-black/70 hidden items-center justify-between p-4 opacity-100 rounded-2xl transform transition-transform duration-100 group-hover:opacity-0 group-hover:flex group-hover:flex-col group-hover:cursor-pointer"
          >
            <p class="text-white font-medium text-center lg:text-lg">{{ item.name }}</p>
            <p class="text-white text-center lg:text-md">{{ item.description }}</p>
            <button
              @click="handleClick(item)"
              class="bg-zinc-50 text-[#31c48d] font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#31c48d] hover:text-white"
            >
              Ver Benefício
            </button>
          </div>

          <div
            v-if="isMobile && isHoveredItem === index"
            class="absolute inset-0 bg-black/70 flex flex-col items-center justify-between p-4 rounded-2xl cursor-pointer"
          >
            <p class="text-white font-medium text-center lg:text-lg">{{ item.name }}</p>
            <p class="text-white text-center lg:text-md">{{ item.description }}</p>
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
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCardSlider',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      isMobile: false,
      isHoveredItem: null
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
  },
  methods: {
    handleClick(item) {
      this.$emit('view-benefit', item)
    },
     toggleMobileHover(index) {
      if (!this.isMobile) return
      this.isHoveredItem = this.isHoveredItem === index ? null : index
    },
    startDrag(e) {
      this.isDragging = true
      this.startX = e.pageX - this.$refs.scrollContainer.offsetLeft
      this.scrollLeft = this.$refs.scrollContainer.scrollLeft
    },
    onDrag(e) {
      if (!this.isDragging) return
      const x = e.pageX - this.$refs.scrollContainer.offsetLeft
      const walk = x - this.startX
      this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk
    },
    stopDrag() {
      this.isDragging = false
    }
  }
}
</script>