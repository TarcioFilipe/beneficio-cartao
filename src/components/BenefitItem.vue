<template>
  <div class="flex flex-col gap-2 items-center hover:opacity-90 hover:cursor-pointer transition ">
    <div
      class="w-24 h-24 lg:w-32 lg:h-32 bg-[#56FFB0] rounded-full overflow-hidden shadow-md border-2 border-zinc-100 transform transition-transform duration-100 hover:rotate-6"
      @click="goToCategory"
    >
      <img :src="image" :alt="text"
        class="object-cover w-full h-full transform transition-transform duration-100 hover:scale-125"
        :style="{ objectPosition: objectPosition }" />
    </div>
    <p class="font-medium text-center text-lg text-gray-800">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'BenefitItem',
  props: {
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    objectPosition: {
      type: String,
      default: 'center'
    }
  },
  methods: {
    goToCategory() {
      this.$router.push(`/beneficios/${this.text.toLowerCase().replace(/\s/g, '-')}`)
    }
  }
}
</script>