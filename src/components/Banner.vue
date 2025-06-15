<template>
  <v-container>
    <div class="flex flex-col mt-6">
      <v-carousel
        show-arrows="hover"
        height="400"
        cycle
        hide-delimiter-background
        class="text-white"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          draggable
        >
          <v-sheet height="100%" color="transparent">
            <div class="flex h-full justify-center items-center">
              <v-img
                :lazy-src="slide.image"
                :src="slide.image"
                cover
                class="rounded-xl"
              />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      slides: { 
       type: Array,
       required: true
      }
    }
  }
</script>