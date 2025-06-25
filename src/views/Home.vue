<template>
  <div class="w-full h-full bg-white mt-4">
    <BenefitsCarousel :benefits="benefits"/>

    <Banner :slides="slides" />

    <SwiperHorizontal
      title="Benefício mais acessados"
      :items="mostAcess"
      @view-benefit="handleLink"
    />

    <v-container class="flex flex-col items-center mt-10 md:mt-20">
      <div 
        class="flex flex-row w-full h-[150px] px-8 justify-around rounded-2xl
          lg:w-8/12 sm:h-[250px] lg:text-lg
          items-center cursor-pointer 
          bg-linear-to-r from-[#212F6B] to-[#2674CB]" 
          @click="handleLink()"
        >
        <div>
          <v-img src="/images/sale.png" class="h-[200px] w-[80px] sm:h-[400px] sm:w-[180px] rotate-12" cover>
          </v-img>
        </div>
        <div class="flex flex-col md:gap-2">
          <p class="text-4xl md:text-6xl text-center font-bold text-[#56FFB0]">Oferta Relâmpago</p>
          <span class="text-2xl md:text-3xl text-center text-white">Corre para não perder!</span>
        </div>
      </div>
    </v-container>

    <SwiperHorizontal
      title="Benefícios mais recentes"
      :items="mostRecents"
      @view-benefit="handleLink"
    />

    <div class="flex flex-col mt-16">  
      <v-container>
        <v-sheet class="mx-auto mt-16" color="white" max-width="1200">
          <v-slide-group v-model="carrouselSquareModel" show-arrows>
            <v-slide-group-item v-for="item in squareCarrousel" :key="item.image" v-slot="{ }">
              <v-card class="ma-4" color="grey-lighten-1" height="250" width="250"
                @click="() => handleLink()">
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
import BenefitsCarousel from '@/components/BenefitsCarousel.vue';
import HorizontalSlider from '@/components/HorizontalSlider.vue';
import SwiperHorizontal from '@/components/SwiperHorizontal.vue';

export default {
  components: {
    BenefitItem
  },
  name: 'Home',
  data() {
    return {
      benefits: [
        {
          label: 'Lazer',
          image: '/images/benefits/Lazer.png',
          category: 'Lazer',
          link: '',
          position: 'center',
        },
        {
          label: 'Para comer',
          image: '/images/benefits/Alimentacao.png',
          category: 'Alimentação',
          link: '',
          position: 'center'
        },
        {
          label: 'Lar doce lar',
          image: '/images/benefits/Para-sua-Casa.png',
          category: 'Para sua casa',
          link: '',
          position: 'center'
        },
        {
          label: 'Animais',
          image: '/images/benefits/Animais.png',
          category: 'Animais',
          link: '',
          position: 'center'
        },
        {
          label: 'Autos',
          image: '/images/benefits/Autos.png',
          category: 'Autos',
          link: '',
          position: 'center'
        },
        {
          label: 'Combustíveis',
          image: '/images/benefits/Combustivel.png',
          category: 'Combustíveis',
          link: '',
          position: 'center'
        },
        {
          label: 'Comércio',
          image: '/images/benefits/Comercio.png',
          category: 'Comércio',
          link: '',
          position: 'center'
        },
        {
          label: 'Comunicação',
          image: '/images/benefits/Comunicacao.png',
          category: 'Comunicação',
          link: '',
          position: 'center'
        },
        {
          label: 'Academia',
          image: '/images/benefits/Academia.png',
          category: '',
          link: '',
          position: 'center'
        },
        {
          label: 'Autocuidado',
          image: '/images/benefits/Saude.png',
          category: 'Saúde',
          link: '',
          position: 'center'
        },
        {
          label: 'Informática',
          image: '/images/benefits/Informatica.png',
          category: 'Informática',
          link: '',
          position: 'center'
        },
        {
          label: 'Online',
          image: '/images/benefits/Online.png',
          category: 'Online',
          link: '',
          position: 'center'
        },
        {
          label: 'Seguros e Planos',
          image: '/images/benefits/Seguros-e-Planos.png',
          category: 'Seguros e Planos',
          link: '',
          position: 'center'
        },
        {
          label: 'Serviços',
          image: '/images/benefits/Servicos.png',
          category: 'Serviços',
          link: '',
          position: 'center'
        },
        {
          label: 'Educação',
          image: '/images/benefits/Educacao.png',
          category: 'Educação',
          link: '',
          position: 'center'
        },
      ],
      slides: [
        { image: '/images/casa-do-pao.png' },
        { image: '/images/pizzahut.png' },
        { image: '/images/moovida.png' },
        { image: '/images/drogaria-sao-paulo-slide.png' },
        { image: '/images/nike.png' },
        { image: '/images/petz-slide.jpg' },
        { image: '/images/petz2-slide.jpg' },
      ],
      mostAcess: [
        { discount: '10', image: '/images/cinemark.png', name: 'Cinemark', description: 'Cinemas e lanches' },
        { discount: '15', image: '/images/petz.png', name: 'Petz', description: 'Benefício na area de pets' },
        { discount: '5', image: '/images/centauro.png', name: 'Centauro', description: 'Em qualquer produto da loja' },
        { discount: '12', image: '/images/carrefour.png', name: 'Carrefour', description: 'Produtos de vestáurio' },
        { discount: '20', image: '/images/drogaria-sao-paulo.png', name: 'Drogaria São Paulo', description: 'Produtos de beleza' },
      ],
      mostRecents: [
        { discount: '10', image: '/images/cinemark.png', name: 'Cinemark', description: 'Cinemas e lanches' },
        { discount: '15', image: '/images/petz.png', name: 'Petz', description: 'Benefício na area de pets' },
        { discount: '5', image: '/images/centauro.png', name: 'Centauro', description: 'Em qualquer produto da loja' },
        { discount: '12', image: '/images/carrefour.png', name: 'Carrefour', description: 'Produtos de vestáurio' },
        { discount: '20', image: '/images/drogaria-sao-paulo.png', name: 'Drogaria São Paulo', description: 'Produtos de beleza' },
      ],
      squareCarrousel: [
        { image: '/images/square/pizza_blackfriday.png' },
        { image: '/images/square/nike.png' },
        { image: '/images/square/vivara.png' },
        { image: '/images/square/riachuelo.png' },
        { image: '/images/square/shopee.png' },
        { image: '/images/square/sams.png' },
      ],
      carrouselSquareModel: null,
      isDragging: false,
      isHovering: false,
      startX: 0,
      scrollLeft: 0,
    }
  },
  methods: {
    handleLink() {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank")
    }
  }
}
</script>