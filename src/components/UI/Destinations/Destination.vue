<template>
  <transition
    enter-active-class="transition-all duration-700 ease-out"
    enter-from-class="max-h-0 opacity-0 scale-95"
    enter-to-class="max-h-[1200px] opacity-100 scale-100"
    leave-active-class="transition-all duration-500 ease-in"
    leave-from-class="max-h-[1200px] opacity-100 scale-100"
    leave-to-class="max-h-0 opacity-0 scale-95"
  >
    <section class="py-10 max-w-6xl mx-auto overflow-hidden relative">
      <div class="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg">
        <!-- Image -->
        <div class="w-full lg:w-1/2 h-72 lg:h-auto">
          <img
            :src="packageData.img"
            :alt="packageData.title"
            class="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        <!-- Content -->
        <div class="w-full lg:w-1/2 p-8 flex flex-col">
          <h1
            class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            {{ packageData.title }}
          </h1>

          <div
            class="inline-block w-fit bg-blue-600/10 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-6"
          >
            {{ packageData.duration }}
          </div>

          <p class="text-gray-700 text-base leading-relaxed mb-8">
            {{ packageData.description }}
          </p>

          <div class="text-3xl font-bold text-green-600 mb-10">
            {{ packageData.price }}
          </div>

          <a
            href="#booking"
            class="w-full text-center bg-golden/85 hover:bg-golden cursor-pointer text-white font-bold py-4 rounded-xl transition text-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  </transition>
</template>

<script setup>
const props = defineProps({
  packageData: {
    type: Object,
    required: true,
  },
});
</script>
