<template>
  <v-toolbar 
    :elevation="8" 
    class="bg-linear-to-b from-[#212F6B] to-[#2674CB]" 
    height="200" 
    style="overflow: visible !important;"
  >
    <v-toolbar-title class="text-lg" style="overflow: visible !important;">
      <template v-slot:text>
        <v-container style="overflow: visible !important;">
          <div class="flex flex-row items-center justify- w-full">
            <div class="flex flex-row gap-4 w-10/12 lg:w-8/12  items-start justify-center" >
              <div class="flex w-5/12 cursor-pointer">
                <v-img lazy-src="/images/logo_beneficios.png" src="/images/logo_beneficios.png" @click="() => $router.push('/')"
                  height="56" width="100%">
                </v-img>
              </div>
              <div class="w-full" style="position: relative; overflow: visible;">
                <v-text-field 
                  v-model="searchQuery"
                  placeholder="O que você procura" 
                  prepend-inner-icon="mdi-magnify" 
                  variant="flat" 
                  class="bg-white rounded-xl w-[80%]"
                  hide-details 
                  clearable
                >
                </v-text-field>  
                <v-list
                  v-if="searchResults.length"
                  class="bg-white rounded-b-lg shadow absolute top-[38px] z-50 w-[80%] h-[200px] overflow-y-auto"
                >
                  <v-list-item
                    v-for="(item, i) in searchResults"
                    :key="i"
                    @click="handleBenefitClick(item)"
                    :prepend-avatar="item.image"
                    :title="item.name"
                    :subtitle="item.description"
                  >
                  </v-list-item>
                </v-list>
              </div>
            </div>

            <div class="hidden lg:flex flex-row w-4/12 justify-end">
              <v-btn variant="flat" size="large" class="text-none text-subtitle-1 mr-2 rounded-xl bg-[#18234C] text-white" @click="handleLink">
                Login
              </v-btn>
              <v-btn variant="flat" size="large" class="text-none text-subtitle-1 rounded-xl bg-[#18234C] text-white" @click="handleLink">
                Registre-se
              </v-btn>
            </div>
            <div class="flex lg:hidden w-2/12 justify-end">
              <v-menu transition="slide-x-transition" location="start">
                <template v-slot:activator="{ props }">
                  <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props" color="white"></v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i" :value="i" @click="() => { handleLink() }">
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </v-container>
      </template>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
import benefits from '@/data/benefits.js'

export default {
  name: 'Header',
  data() {
    return {
      searchQuery: null,
      searchResults: [],
      items: [
        { title: 'Login' },
        { title: 'Registre-se' },
      ], 
    }
  },
  methods: {
    handleBenefitClick(item) {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank");
      this.searchQuery = null;
      this.searchResults = []
    },
    handleLink() {
      window.open("https://cartaomasterclin.com.br/usuarios/cadastro", "_blank");
    }
  },
  watch: {
    searchQuery(val) {
      if (val && val.length >= 3) {
        const lower = val.toLowerCase()
        this.searchResults = benefits.filter(item =>
          item.name.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower)
        )
      } else {
        this.searchResults = []
      }
    }
  },
}
</script>


<style>
  .v-toolbar-title__placeholder{
    overflow: visible !important;
  }

  .v-toolbar__content {
    overflow: visible !important;
  }

</style>