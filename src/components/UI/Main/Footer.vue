<template>
  <footer
    class="bg-dark text-white pt-5 border-t border-golden/20"
    :dir="lang === 'en' ? 'ltr' : 'rtl'"
  >
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
    >
      <!-- Logo + Short -->
      <div>
        <img src="/icon.png" alt="logo" class="h-16 mb-4 opacity-90" />
        <p class="opacity-70 text-sm leading-relaxed">
          {{
            lang === "en"
              ? "Your journey starts here — discover unique tours across the Nile and beyond."
              : "رحلتك تبدأ من هنا — اكتشف جولات فريدة عبر النيل وما حوله."
          }}
        </p>
      </div>

      <!-- Company -->
      <div>
        <h3 class="footer-title">
          {{ lang === "en" ? "Company" : "الشركة" }}
        </h3>
        <ul class="footer-list">
          <li>
            <a href="/#about" class="footer-link">{{
              lang === "en" ? "About Us" : "من نحن"
            }}</a>
          </li>
          <li>
            <a href="/#destinations" class="footer-link">{{
              lang === "en" ? "Packages" : "الباقات"
            }}</a>
          </li>
          <li>
            <a href="/#booking" class="footer-link">{{
              lang === "en" ? "Booking" : "الحجز"
            }}</a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="footer-title">
          {{ lang === "en" ? "Contact" : "تواصل معنا" }}
        </h3>
        <ul
          class="space-y-2 text-sm opacity-85"
          :dir="lang === 'en' ? 'ltr' : 'rtl'"
        >
          <li>📞 +20 127 892 6242</li>
          <li>📞 +20 128 017 3604</li>
          <li>✉️ nilevibetours@gmail.com</li>
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h3 class="footer-title">
          {{ lang === "en" ? "Follow Us" : "تابعنا" }}
        </h3>
        <div class="flex gap-4 mt-4">
          <a href="#" class="social-icon group">
            <i
              class="fa-brands fa-facebook-f group-hover:text-golden transition"
            ></i>
          </a>
          <a href="#" class="social-icon group">
            <i
              class="fa-brands fa-instagram group-hover:text-golden transition"
            ></i>
          </a>
          <a href="#" class="social-icon group">
            <i
              class="fa-brands fa-tiktok group-hover:text-golden transition"
            ></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Line -->
    <div class="max-w-7xl mx-auto px-6 mt-10">
      <!-- <div class="h-[1px] bg-white/10 mb-4"></div> -->
      <p class="text-center opacity-60 text-sm p-2 border-t">
        {{
          lang === "en"
            ? "All rights reserved © 2025 Nile Vibe Tours"
            : "جميع الحقوق محفوظة © ٢٠٢٥ نايل فايب تورز"
        }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const lang = ref("en");
</script>

<style scoped>
.footer-title {
  @apply text-xl font-semibold mb-4;
}

.footer-list {
  @apply space-y-2 text-sm;
}

.footer-link {
  @apply hover:text-golden transition-colors duration-300;
}

.social-icon {
  @apply border border-white/20 rounded-full p-3 cursor-pointer transition hover:border-golden;
}
</style>
