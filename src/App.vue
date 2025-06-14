<template>
  <v-app>
    <v-main class="bg-white">
      <v-toolbar :elevation="8" class="bg-linear-to-b from-[#212F6B] to-[#2674CB]" height="200">
        <v-toolbar-title class="text-lg">
          <template v-slot:text>
            <v-container>
              <div class="flex flex-row items-center justify-between w-full">
                <div class="flex flex-col w-4/12">
                  <v-img
                    src="/src/assets/images/cc.png"
                    height="32"
                    width="32"
                  >
                  </v-img>
                  <p>Benefícios Cartão</p>
                </div>
                <v-text-field placeholder="O que você procura" prepend-inner-icon="mdi-magnify" variant="flat" 
                  clearable 
                  hide-details 
                  class="bg-white rounded-xl w-4/12"
                >
                </v-text-field>
                <div class="flex flex-row w-4/12 justify-end">
                  <v-btn variant="flat" size="large" class="text-none text-subtitle-1 mr-2 rounded-xl bg-[#18234C]">
                    Login
                  </v-btn>
                  <v-btn variant="flat" size="large" class="text-none text-subtitle-1 rounded-xl bg-[#18234C]">
                    Registre-se
                  </v-btn>
                </div>
              </div>
            </v-container>
          </template>
        </v-toolbar-title>
      </v-toolbar>

      <div class="w-full h-full bg-transparent mt-4">
        <v-container>
          <div class="flex flex-row justify-around overflow-x-auto" style="scrollbar-width: none;">
            <BenefitItem
              v-for="item in benefits"
              :image="item.image"
              :link="item.link"
              :text="item.label"
            />
          </div>

          <div class="flex flex-col mt-6">
             <v-carousel
                max-height="500"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                  <v-sheet
                    height="90%"
                    color="transparent"
                  >
                    <div class="flex h-full justify-center items-center">
                      <v-img
                        :src="slide.image"
                        cover
                        class="rounded-xl"
                      ></v-img>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
          </div>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import BenefitItem from './components/BenefitItem.vue'

  export default {
    components: {
      BenefitItem
    },
    name: 'BenefitHome',
    data() {
      return {
        benefits: [
          { label: 'Para se Divertir', image: './src/assets/images/diversao.png', link: ''},
          { label: 'Para comer', image: './src/assets/images/comida.png', link: ''},
          { label: 'Lar doce lar', image: './src/assets/images/Lar-Doce-Lar.png', link: ''},
          { label: 'Cuidados com pet', image: './src/assets/images/pet.png', link: ''},
          { label: 'Viagens', image: './src/assets/images/viagem.png', link: ''},
          { label: 'Autocuidador', image: './src/assets/images/autocuidado.png', link: ''},
          { label: 'Foco na carreira', image: './src/assets/images/trabalho.png', link: ''},
        ],
        slides: [
          {image: './src/assets/images/casa-do-pao.png' },
          {image: './src/assets/images/pizzahut.png' },
        ]
      }
    }
  }
</script>
