<template>
  <footer
    class="bg-dark text-white pt-10 pb-5"
    :dir="lang === 'en' ? 'ltr' : 'rtl'"
  >
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 class="text-xl font-semibold mb-4">
          {{ lang === "en" ? "Company" : "الشركة" }}
        </h3>
        <ul class="space-y-2">
          <li>
            <a href="#about" class="hover:text-golden">{{
              lang === "en" ? "About Us" : "من نحن"
            }}</a>
          </li>
          <li>
            <a href="#destinations" class="hover:text-golden">{{
              lang === "en" ? "Destinations" : "الوجهات"
            }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">
          {{ lang === "en" ? "Contact" : "تواصل معنا" }}
        </h3>
        <ul class="space-y-2" :dir="lang === 'en' ? 'ltr' : 'rtl'">
          <li class="text-nowrap">
            {{ lang === "en" ? "Phone:" : "الهاتف:" }}
            +20 127 892 6242
          </li>
          <li class="text-nowrap">
            {{ lang === "en" ? "Phone:" : "الهاتف:" }}
            +20 128 017 3604
          </li>
          <li class="text-nowrap">
            {{ lang === "en" ? "Email:" : "البريد:" }} nilevibetours@gmail.com
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">
          {{ lang === "en" ? "Follow Us" : "تابعنا" }}
        </h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-golden">Facebook</a></li>
          <li><a href="#" class="hover:text-golden">Instagram</a></li>
          <li><a href="#" class="hover:text-golden">TikTok</a></li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col text-center">
      <p class="opacity-70 text-center mt-10">
        {{
          lang === "en"
            ? "All rights reserved © 2025"
            : "جميع الحقوق محفوظة © ٢٠٢٥"
        }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMainStore } from "../../../stores/main";
const main = useMainStore();
const lang = ref("en");

// watch(
//   () => main.current,
//   (newVal) => {
//     lang.value = newVal;
//   }
// );
</script>
