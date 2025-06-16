<template>
  <Banner :slides="slides" />
  <v-container class="my-12">
    <p class="text-xl font-medium">{{ labelName }}</p>

    <div class="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-4 pb-8">
      <div
        v-if="paginatedBenefits.length > 0"
        v-for="(item, index) in paginatedBenefits" 
        :key="item.name"
        class="bg-white flex flex-col min-w-[204px] sm:w-[204px] lg:w-[260px] p-4 shadow-xl rounded-2xl group relative"
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
            @click="handleLink(item)"
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
            @click.stop="handleLink(item)"
            class="bg-zinc-50 text-[#31c48d] font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#31c48d] hover:text-white"
          >
            Ver Benefício
          </button>
        </div>
        <p class="text-center text-[#31c48d] font-medium lg:text-lg">{{ item.name }}</p>
      </div>

      <div v-else class="flex w-full items-center justify-center py-20">
        <p class="text-2xl">Nenhum item para este benefício!</p>
      </div>

      </div>
      <div class="flex justify-center mt-4" v-if="hasMoreBenefits">
        <v-btn variant="flat" @click="loadMore" class="text-white text-none text-subtitle-1 mr-2 rounded-xl bg-[#18234C]">
          Ver mais
        </v-btn>
      </div>
  </v-container>
</template>

<script>
import Banner from '@/components/Banner.vue'
import benefitsList from '@/data/benefits.js'

export default {
  props: {
    slug: String
  },
  data() {
    return {
      slides: [
        { image: '/images/casa-do-pao.png' },
        { image: '/images/pizzahut.png' },
        { image: '/images/moovida.png' },
        { image: '/images/drogaria-sao-paulo-slide.png' },
        { image: '/images/nike.png' },
        { image: '/images/petz-slide.jpg' },
        { image: '/images/petz2-slide.jpg' },
      ],
      isMobile: false,
      isHoveredItem: null,
      itemsPerPage: 10,
      currentPage: 1,
    }
  },  
  mounted() {
    this.isMobile = window.innerWidth <= 768
  },
  computed: {
    categoryName() {
      return this.slug
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    },
    labelName() {
      const label = this.$route.query.label; 
      return label;
    },
    filteredBenefits() {
      return benefitsList.filter(item =>
        item.category.toLowerCase().replace(/\s/g, '-') === this.slug
      )
    },
    paginatedBenefits() {
      const start = 0;
      const end = this.itemsPerPage * this.currentPage;
      return this.filteredBenefits.slice(start, end);
    },
    hasMoreBenefits() {
      return this.filteredBenefits.length > this.paginatedBenefits.length;
    }
  },
  methods: {
    handleLink() {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank");
    },
    toggleMobileHover(index) {
      if (!this.isMobile) return
      this.isHoveredItem = this.isHoveredItem === index ? null : index
    },
    loadMore() {
      this.currentPage++;
    }
  }
}
</script>