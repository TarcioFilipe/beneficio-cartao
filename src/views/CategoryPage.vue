<template>
  <Banner :slides="slides" />
  <v-container class="my-12">
    <p class="text-xl font-medium">{{ categoryName  }}</p>

    <div class="flex flex-row gap-4 lg:gap-10 pb-8">
      <div
        v-if="filteredBenefits.length > 0"
        v-for="item in filteredBenefits" 
        :key="item.name"
        class="bg-white flex flex-col min-w-[204px] h-[204px] lg:min-w-[300px] lg:h-[300px] p-4 shadow-xl rounded-2xl group relative"
      >
        <v-img :lazy-src="item.image" :src="item.image" class="group-hover:blur-xs" />
        <div
          class="absolute inset-0 bg-black/70 hidden items-center justify-between p-4 opacity-100 rounded-2xl transform transition-transform duration-100 group-hover:opacity-0 group-hover:flex group-hover:flex-col group-hover:cursor-pointer">
          <p class="text-white font-medium text-center lg:text-lg">{{ item.name }}</p>
          <p class="text-white text-center lg:text-md">{{ item.description }}</p>
          <button
            class="bg-zinc-50 text-[#31c48d] font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#31c48d] hover:text-white">
            Ver Benefício
          </button>
        </div>
        <p class="text-center text-[#31c48d] font-medium lg:text-lg">Até {{ item.discount }}% de desconto</p>
      </div>
      <div v-else class="flex w-full items-center justify-center py-20">
        <p class="text-2xl">Nenhum item para este benefício!</p>
      </div>
    </div>
  </v-container>
</template>

<script>
import Banner from '@/components/Banner.vue'
import benefitsList from '@/data/benefits.js' // ou qualquer fonte de dados

export default {
  props: {
    slug: String
  },
  data() {
    return {
      slides: [
        { image: '/src/assets/images/casa-do-pao.png' },
        { image: '/src/assets/images/pizzahut.png' },
        { image: '/src/assets/images/moovida.png' },
        { image: '/src/assets/images/drogaria-sao-paulo-slide.png' },
        { image: '/src/assets/images/nike.png' },
        { image: '/src/assets/images/petz-slide.jpg' },
        { image: '/src/assets/images/petz2-slide.jpg' },
      ]
    }
  },  
  computed: {
    categoryName() {
      return this.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    },
    filteredBenefits() {
      return benefitsList.filter(item =>
        item.category.toLowerCase().replace(/\s/g, '-') === this.slug
      )
    }
  },
  methods: {
    handleLink() {
      alert('Abrir link ou fazer outra ação')
    }
  }
}
</script>