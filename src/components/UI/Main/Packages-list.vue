<template>
  <div class="max-w-7xl mx-auto">
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-stretch"
    >
      <!-- اللغة اه ولا لا -->
      <DestinationCard
        v-for="(item, idx) in packages"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script setup>
import { useMainStore } from "../../../stores/main";
import packages from "../../../../public/packages";
import DestinationCard from "../Packages/Card.vue";

const store = useMainStore();
</script>
