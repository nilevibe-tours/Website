<template>
  <li
    class="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition hover:scale-[1.02]"
  >
    <!-- Image -->
    <img :src="item.img" :alt="item.title" class="w-full h-64 object-cover" />

    <!-- Content -->
    <div class="p-5 flex flex-col flex-1">
      <!-- Title -->
      <h2 class="text-xl font-extrabold mb-2 text-gray-900">
        {{ item.title }}
      </h2>

      <!-- Duration -->
      <span
        class="inline-block w-max bg-blue-600/10 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3"
      >
        {{ item.duration }}
      </span>

      <!-- Description -->
      <p class="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
        {{ item.description }}
      </p>

      <!-- Price -->
      <div class="text-lg font-bold text-green-600 mb-6">
        {{ item.price }}
      </div>

      <!-- Actions -->
      <div class="mt-auto grid grid-cols-2 gap-3 pt-4">
        <button
          @click="$emit('showPackage', item)"
          class="text-center flex items-center justify-center px-4 py-2 border border-light-blue/50 rounded-xl text-light-blue font-semibold hover:bg-light-blue hover:text-white transition text-sm"
        >
          Details
        </button>

        <a
          href="#booking"
          class="w-full bg-light-blue text-white font-bold py-3 rounded-xl hover:bg-golden transition text-center px-4 text-sm"
        >
          Book Now
        </a>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  item: Object,
});

const emits = defineEmits(["showPackage"]);
</script>
