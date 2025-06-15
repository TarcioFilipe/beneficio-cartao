<template>
  <div class="w-full h-full bg-white mt-4">
    <div class="flex overflow-x-auto" style="scrollbar-width: none;">
      <v-container class="flex flex-row gap-4 md:justify-between">
        <BenefitItem v-for="item in benefits" :image="item.image" :link="item.link" :text="item.label"
          :objectPosition="item.position" />
      </v-container>
    </div>

    <Banner :slides="slides" />

    <HorizontalSlider
      :title="'Benefícios mais acessados'"
      :items="mostAcess"
      @view-benefit="handleLink"
    />

    <!-- <div class="flex flex-col mt-2">
      <v-container>
        <p class="text-2xl font-bold mt-4">Benefícios mais acessados</p>
      </v-container>
      <div class="flex overflow-x-auto scroll-smooth" style="scrollbar-width: none;" ref="scrollContainer"
        @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag" 
        :style="{
          cursor: isDragging ? 'grabbing' : 'grab',
        }">
        <v-container class="flex flex-row gap-4 lg:gap-10 pb-8">
          <div v-for="item in mostAcess" :key="item.name"
            class="bg-white flex flex-col min-w-[204px] h-[204px] lg:min-w-[300px] lg:h-[300px] p-4 shadow-xl rounded-2xl group relative">
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
        </v-container>
      </div>
    </div> -->

    <v-container class=" flex flex-col items-center mt-10 md:mt-20">
      <div class="flex flex-row w-full h-[150px] px-8 justify-around rounded-2xl
            lg:w-8/12 sm:h-[250px] lg:text-lg
            items-center cursor-pointer 
            bg-linear-to-r from-[#212F6B] to-[#2674CB]" @click="handleLink()">
        <div>
          <v-img src="/src/assets/images/sale.png" class="h-[200px] w-[80px] sm:h-[400px] sm:w-[180px] rotate-12" cover>
          </v-img>
        </div>
        <div class="flex flex-col md:gap-2">
          <p class="text-4xl md:text-6xl text-center font-bold text-[#56FFB0]">Oferta Relâmpago</p>
          <span class="text-2xl md:text-3xl text-center text-white">Corre para não perder!</span>
        </div>
      </div>
    </v-container>

    <div class="flex flex-col mt-16">
      <HorizontalSlider
        :title="'Benefícios mais recentes'"
        :items="mostRecents"
        @view-benefit="handleLink"
      />
      <!-- <v-container>
        <p class="text-2xl font-bold mt-4">Benefícios mais recentes</p>
      </v-container>
      <div class="flex overflow-x-auto scroll-smooth" style="scrollbar-width: none;" ref="scrollContainer"
        @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag" :style="{
          cursor: isDragging ? 'grabbing' : 'grab',
        }">
        <v-container class="flex flex-row gap-4 lg:gap-10 pb-8 pt-0">
          <div v-for="item in mostRecents" :key="item.name"
            class="bg-white flex flex-col min-w-[204px] h-[204px] lg:min-w-[300px] lg:h-[300px] p-4 shadow-xl rounded-2xl group relative">
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
        </v-container>
      </div> -->
      
      <v-container>
        <v-sheet class="mx-auto mt-16" color="white" max-width="1200">
          <v-slide-group v-model="carrouselSquareModel" show-arrows>
            <v-slide-group-item v-for="item in squareCarrousel" :key="item.image" v-slot="{ }">
              <v-card class="ma-4" color="grey-lighten-1" height="250" width="250"
                @click="() => console.log('redirecionando')">
                <v-img :lazy-src="item.image" :src="item.image" width="100%" height="100%" cover />
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-container>
    </div>
  </div>
</template>

<script>
import BenefitItem from '@/components/BenefitItem.vue'
import HorizontalSlider from '@/components/HorizontalSlider.vue';

export default {
  components: {
    BenefitItem
  },
  name: 'Home',
  data() {
    return {
      benefits: [
        {
          label: 'Para se Divertir',
          image: '/src/assets/images/diversao.png',
          link: '',
          position: 'center',
        },
        {
          label: 'Para comer',
          image: '/src/assets/images/comida.png',
          link: '',
          position: 'center'
        },
        {
          label: 'Lar doce lar',
          image: '/src/assets/images/Lar-Doce-Lar.png',
          link: '',
          position: 'center'
        },
        {
          label: 'Cuidados com pet',
          image: '/src/assets/images/pet.png',
          link: '',
          position: 'center'
        },
        {
          label: 'Viagens',
          image: '/src/assets/images/viagem.png',
          link: '',
          position: '40% bottom'
        },
        {
          label: 'Autocuidado',
          image: '/src/assets/images/autocuidado.png',
          link: '',
          position: 'center'
        },
        {
          label: 'Foco na carreira',
          image: '/src/assets/images/trabalho.png',
          link: '',
          position: '50% 12px'
        },
      ],
      slides: [
        { image: './src/assets/images/casa-do-pao.png' },
        { image: './src/assets/images/pizzahut.png' },
        { image: './src/assets/images/moovida.png' },
        { image: './src/assets/images/drogaria-sao-paulo-slide.png' },
        { image: './src/assets/images/nike.png' },
        { image: './src/assets/images/petz-slide.jpg' },
        { image: './src/assets/images/petz2-slide.jpg' },
      ],
      mostAcess: [
        { discount: '10', image: './src/assets/images/cinemark.png', name: 'Cinemark', description: 'Cinemas e lanches' },
        { discount: '15', image: './src/assets/images/petz.png', name: 'Petz', description: 'Benefício na area de pets' },
        { discount: '5', image: './src/assets/images/centauro.png', name: 'Centauro', description: 'Em qualquer produto da loja' },
        { discount: '12', image: './src/assets/images/carrefour.png', name: 'Carrefour', description: 'Produtos de vestáurio' },
        { discount: '20', image: './src/assets/images/drogaria-sao-paulo.png', name: 'Drogaria São Paulo', description: 'Produtos de beleza' },
      ],
      mostRecents: [
        { discount: '10', image: './src/assets/images/cinemark.png', name: 'Cinemark', description: 'Cinemas e lanches' },
        { discount: '15', image: './src/assets/images/petz.png', name: 'Petz', description: 'Benefício na area de pets' },
        { discount: '5', image: './src/assets/images/centauro.png', name: 'Centauro', description: 'Em qualquer produto da loja' },
        { discount: '12', image: './src/assets/images/carrefour.png', name: 'Carrefour', description: 'Produtos de vestáurio' },
        { discount: '20', image: './src/assets/images/drogaria-sao-paulo.png', name: 'Drogaria São Paulo', description: 'Produtos de beleza' },
      ],
      squareCarrousel: [
        { image: './src/assets/images/square/pizza_blackfriday.png' },
        { image: './src/assets/images/square/nike.png' },
        { image: './src/assets/images/square/vivara.png' },
        { image: './src/assets/images/square/riachuelo.png' },
        { image: './src/assets/images/square/shopee.png' },
        { image: './src/assets/images/square/sams.png' },
      ],
      carrouselSquareModel: null,
      isDragging: false,
      isHovering: false,
      startX: 0,
      scrollLeft: 0,
    }
  },
  methods: {
    startDrag(e) {
      this.isDragging = true;
      this.startX = e.pageX - this.$refs.scrollContainer.offsetLeft;
      this.scrollLeft = this.$refs.scrollContainer.scrollLeft;
    },
    onDrag(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - this.$refs.scrollContainer.offsetLeft;
      const walk = (x - this.startX) * 1.5;
      this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk;
    },
    stopDrag() {
      this.isDragging = false;
    },
    handleLink() {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank")
    }
  }
}
</script>