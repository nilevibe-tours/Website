<template>
  <section class="bg-light py-20 px-6 text-dark" id="about">
    <div
      class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      :dir="lang === 'en' ? 'ltr' : 'rtl'"
    >
      <!-- Image with animation -->
      <div class="relative group">
        <img
          src="/logo.png"
          alt="NileVibe Tours"
          class="rounded-2xl animate-scale w-full object-cover transition-transform duration-300"
        />

        <!-- decorative shapes -->
        <div
          class="absolute -top-4 -right-4 bg-light-blue/30 w-20 h-20 rounded-full blur-2xl opacity-50"
        ></div>
        <div
          class="absolute -bottom-4 -left-4 bg-yellow-400/30 w-28 h-28 rounded-full blur-2xl opacity-60"
        ></div>
      </div>

      <!-- Text Content -->
      <div class="space-y-8 text-center lg:text-start">
        <h2
          class="text-4xl md:text-5xl font-extrabold text-light-blue leading-tight"
        >
          {{ text.title[lang] }}
        </h2>

        <p class="text-xl leading-relaxed opacity-90 font-medium">
          {{ text.description1[lang] }}
        </p>

        <p class="text-xl leading-relaxed opacity-90 font-medium">
          {{ text.description2[lang] }}
        </p>

        <a
          href="#booking"
          class="inline-block px-8 py-4 bg-light-blue text-white font-semibold rounded-xl shadow-md hover:bg-yellow-400 transition duration-300"
        >
          {{ text.bookTour[lang] }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMainStore } from "../../../stores/main.js";

const main = useMainStore();
const lang = ref(main.current);

watch(
  () => main.current,
  (newVal) => {
    lang.value = newVal;
  }
);

const text = {
  title: {
    en: "About NileVibe Tours",
    ar: "عن NileVibe Tours",
  },
  description1: {
    en: "NileVibe Tours is your gateway to exploring the wonders of Egypt. From majestic Nile cruises to the timeless treasures of Luxor and Aswan, we offer curated tours that combine history, culture, and adventure.",
    ar: "نايل فايب تورز هي بوابتك لاكتشاف عجائب مصر. من رحلات النايل الفاخرة إلى كنوز الأقصر وأسوان الخالدة، نقدم جولات مُنسقة تجمع بين التاريخ والثقافة والمغامرة.",
  },
  description2: {
    en: "Our mission is to provide unforgettable experiences with comfort, safety, and authentic cultural immersion. Whether it’s your first visit to Egypt or a return journey, NileVibe Tours makes every trip memorable.",
    ar: "مهمتنا هي تقديم تجارب لا تُنسى مع الراحة والأمان والانغماس الثقافي الأصيل. سواء كانت زيارتك الأولى لمصر أو رحلة عودة، تجعل نايل فايب تورز كل رحلة لا تُنسى.",
  },
  bookTour: {
    en: "Book a Tour!",
    ar: "احجز دلوقتي!",
  },
};
</script>
