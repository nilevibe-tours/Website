<template>
  <section
    id="destinations"
    :dir="store.current === 'ar' ? 'rtl' : 'ltr'"
    class="bg-light text-light-blue py-16 px-6"
  >
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-center text-dark"
      >
        {{ store.current === "ar" ? "الباقات" : "Packages" }}
      </h2>

      <ul
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-stretch"
      >
        <DestinationCard
          v-for="(item, idx) in destinations[store.current]"
          :key="idx"
          :item="item"
          @showPackage="openPackage"
        />
      </ul>
    </div>

    <Destination v-if="packageData !== null" :package-data="packageData" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "../../../stores/main";
import destinations from "../../../../destinations";
import Destination from "../Destinations/Destination.vue";
import DestinationCard from "../Destinations/card.vue";

const store = useMainStore();
const packageData = ref(null);
function openPackage(pack) {
  packageData.value = packageData.value === pack ? null : pack;
}
</script>
