<template>
  <v-footer class="flex flex-col h-full text-center gap-2 py-8 bg-linear-to-b from-[#212F6B] to-[#2674CB]">
    <v-container class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center gap-3 ">
        <v-btn v-for="icon in icons" :key="icon" :icon="icon" density="comfortable" variant="text"></v-btn>
      </div>

      <v-divider class="my-2" thickness="2" width="50"></v-divider>

      <div class="w-full flex flex-col flex-wrap items-center gap-4 sm:flex-row sm:gap-0">
        <div class="flex flex-col w-4/12 gap-2 items-center">
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Fale conosco</p>
          </a>
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Termos de uso</p>
          </a>
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Politica de Privicidade</p>
          </a>
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Sobre Nós</p>
          </a>
        </div>

        <div class="flex flex-col w-4/12 gap-2 items-center">
          <a href="" class="flex flex-row gap-2 hover:opacity-90 transition">
            <v-icon color="white">mdi-email-outline</v-icon>
            <p class="text-md font-medium">atendimento@capitalconsig.com.br</p>
          </a>
        </div>

        <div class="flex flex-col w-4/12 gap-2 items-center">
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Fale conosco</p>
            <div class="flex w-full items-center justify-center bg-white shadow-2xl rounded-sm p-2">
              <v-img lazy-src="/images/cc.png" src="/images/cc.png" cover>
              </v-img>
            </div>
          </a>
        </div>
      </div>

      <v-divider class="my-2" thickness="2" width="50"></v-divider>

      <div class="flex flex-col py-4">
        <p class="text-sm">
          © 2015 - {{ new Date().getFullYear() }} — Todos os diretos reservados
        </p>
      </div>

      <v-divider class="my-2" thickness="0" width="50"></v-divider>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
}
</script>