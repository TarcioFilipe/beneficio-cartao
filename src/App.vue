<template>
  <v-app>
    <v-main class="bg-white">
      <DefaultLayout/>
    </v-main>
  </v-app>
</template>

<script>
import BenefitItem from './components/BenefitItem.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  components: {
    BenefitItem,
    DefaultLayout
  },
  name: 'App',
  data() {
    return {
      benefits: [
        { label: 'Para se Divertir', image: '/src/assets/images/diversao.png', link: '', position: 'center' },
        { label: 'Para comer', image: '/src/assets/images/comida.png', link: '', position: 'center' },
        { label: 'Lar doce lar', image: '/src/assets/images/Lar-Doce-Lar.png', link: '', position: 'center' },
        { label: 'Cuidados com pet', image: '/src/assets/images/pet.png', link: '', position: 'center' },
        { label: 'Viagens', image: '/src/assets/images/viagem.png', link: '', position: '40% bottom' },
        { label: 'Autocuidado', image: '/src/assets/images/autocuidado.png', link: '', position: 'center' },
        { label: 'Foco na carreira', image: '/src/assets/images/trabalho.png', link: '', position: '50% 12px' },
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
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [
        { title: 'Login' },
        { title: 'Registre-se' },
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

    }
  }
}
</script>
