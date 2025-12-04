<template>
  <div class="space-y-10 py-10">
    <div class="flex justify-center items-center bg-white max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 h-72 lg:h-auto">
          <img
            :src="packageData.img"
            :alt="packageData.title"
            class="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        <div class="w-full lg:w-1/2 p-8 flex flex-col">
          <h1
            class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            {{ packageData.title }} package
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

          <div class="flex gap-5">
            <router-link
              to="/#booking"
              class="w-full text-center bg-light-blue/85 hover:bg-light-blue cursor-pointer text-white font-bold py-4 rounded-xl transition text-lg"
              @click="book"
            >
              Book Now
            </router-link>

            <router-link
              to="/"
              class="w-full text-center bg-light-blue/85 hover:bg-light-blue cursor-pointer text-white font-bold py-4 rounded-xl transition text-lg"
            >
              Return to page
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-center text-dark"
      >
        {{ store.current === "ar" ? "استكشف الباقات" : "Explore Packages" }}
      </h2>
      <PackagesList />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { useMainStore } from "../../stores/main";
import packages from "../../../public/packages";
import { useRouter } from "vue-router";
import PackagesList from "../UI/Main/Packages-list.vue";
const store = useMainStore();
const props = defineProps({
  title: String,
});

const packageData = ref(null);
const router = useRouter();

onBeforeMount(() => {
  packageData.value = packages.find(
    (e) => e.title.toLowerCase() === props.title?.toLowerCase()
  );
  if (packageData.value == null) router.push({ name: "Main" });
});

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function book() {
  store.setPackage(packageData.value.title);
}
</script>
