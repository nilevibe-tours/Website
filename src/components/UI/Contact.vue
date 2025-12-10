<template>
  <section class="pt-20 pb-16 px-6 container">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        Contact us
      </h2>
      <p class="text-gray-600 text-lg max-w-xl mx-auto mb-2">
        We're here to help you plan the perfect Egyptian experience. Send us
        your inquiry and our team will get back to you shortly.
      </p>

      <ul class="flex justify-center gap-6 text-3xl mb-3">
        <li class="hover:scale-110 transition-transform">
          <a
            href="https://www.facebook.com/NileVibeTours"
            target="_blank"
            class="text-blue-600"
          >
            <i class="pi pi-facebook"></i>
          </a>
        </li>

        <li class="hover:scale-110 transition-transform">
          <a
            href="https://www.instagram.com/nilevibetours/"
            target="_blank"
            class="text-pink-600"
          >
            <i class="pi pi-instagram"></i>
          </a>
        </li>

        <li class="hover:scale-110 transition-transform">
          <a
            href="https://wa.me/+201278926242"
            target="_blank"
            class="text-green-600"
          >
            <i class="pi pi-whatsapp"></i>
          </a>
        </li>
      </ul>

      <p class="text-xl font-semibold tracking-wide text-gray-900 mb-6">
        Or contact us using the form below
      </p>
    </div>

    <!-- Form Card -->
    <form
      @submit.prevent="handleSubmit"
      class="bg-white shadow-xl p-6 rounded-2xl space-y-5 w-full max-w-xl mx-auto"
      id="form"
    >
      <!-- Full Name -->
      <div>
        <label class="block font-semibold mb-1"> Full Name </label>
        <input
          v-model="guest.name"
          type="text"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block font-semibold mb-1"> Email </label>
        <input
          v-model="guest.email"
          type="email"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        />
      </div>

      <!-- Notes -->
      <div>
        <label class="block font-semibold mb-1"> Notes </label>
        <textarea
          v-model="guest.notes"
          rows="3"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          :required="guest.destination === 'other'"
        ></textarea>
      </div>

      <!-- Submit -->
      <div class="w-full flex flex-col justify-center items-center gap-3">
        <button
          type="submit"
          class="w-max mx-auto hover:text-white border border-golden text-golden font-bold p-3 rounded-xl hover:bg-golden transition"
          :disabled="loading"
        >
          {{ loading ? "sending" : "Send" }}
        </button>

        <!-- Success Message -->
        <p
          v-if="success"
          class="flex items-center justify-center gap-2 mt-4 text-green-700 font-semibold text-lg animate-fadeIn"
        >
          <i class="pi pi-check-circle text-green-600 text-xl"></i>

          <span
            class="px-3 py-1 bg-green-50 border border-green-200 rounded-xl shadow-sm"
          >
            Message sent successfully
          </span>
        </p>
      </div>
    </form>
  </section>
</template>

<script setup>
import "primeicons/primeicons.css";
import { ref } from "vue";
const guest = ref({
  name: "",
  email: "",
  notes: "",
});

const loading = ref(false);
const success = ref(false);

async function handleSubmit() {
  loading.value = true;
  success.value = false;

  try {
    const res = await fetch("/api/sendMsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest.value),
    });

    if (res.ok) {
      success.value = true;
      guest.value = {
        name: "",
        email: "",
        notes: "",
      };
    } else {
      console.console(await res.json());
    }
  } catch (err) {
    console.error("ERROR:", err);
  }

  loading.value = false;
}
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.7s ease-out forwards;
}
</style>
