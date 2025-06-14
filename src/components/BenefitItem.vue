<template>
  <a
    :href="link"
    target="_blank"
    class="flex flex-col gap-2 items-center hover:opacity-90 transition"
  >
    <div class="w-24 h-24 lg:w-32 md:h-32 rounded-full overflow-hidden shadow-md border border-gray-300 transform transition-transform duration-100 hover:rotate-6">
      <img :src="image" :alt="text" class="object-cover w-full h-full transform transition-transform duration-100 hover:scale-125" />
    </div>
    <p class="font-medium text-center text-lg text-gray-800">{{ text }}</p>
  </a>
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
    }
  }
}
</script>