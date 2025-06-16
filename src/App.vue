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
    }
  },
  methods: {
  }
}
</script>
