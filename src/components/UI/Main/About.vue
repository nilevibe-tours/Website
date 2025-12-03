<template>
  <section class="bg-light py-16 px-6 text-dark" id="about">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      :dir="lang === 'en' ? 'ltr' : 'rtl'"
    >
      <div class="flex-shrink-0">
        <img
          src="/logo.png"
          alt="NileVibe Tours"
          class="rounded-xl w-full md:w-96 object-cover"
        />
      </div>

      <!-- Text Content -->
      <div class="flex-1 space-y-6 text-center md:text-start text-xl">
        <h2 class="text-4xl font-bold text-golden">
          {{ text.title[lang] }}
        </h2>
        <p class="text-dark leading-relaxed font-bold">
          {{ text.description1[lang] }}
        </p>
        <p class="text-dark leading-relaxed font-bold">
          {{ text.description2[lang] }}
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-wrap justify-center items-center md:items-start md:justify-start gap-4"
        >
          <a
            href="#booking"
            class="px-6 py-3 bg-golden text-dark font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            {{ text.bookTour[lang] }}
          </a>
          <!-- <a
            href="/brochure.pdf"
            target="_blank"
            class="px-6 py-3 border border-golden text-golden font-semibold rounded-lg shadow hover:bg-golden/20 transition"
          >
            Contact Us!
          </a> -->
        </div>
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
