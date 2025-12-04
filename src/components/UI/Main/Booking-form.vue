<template>
  <section class="py-16 px-6">
    <form
      @submit.prevent="handleSubmit"
      id="booking"
      :class="[
        'bg-light shadow-xl p-6 rounded-2xl space-y-5 w-full max-w-xl mx-auto',
        lang === 'ar' ? 'text-right' : 'text-left',
      ]"
      :dir="lang === 'en' ? 'ltr' : 'rtl'"
    >
      <!-- Full Name -->
      <div>
        <label class="block font-semibold mb-1">
          {{ t("fullName") }}
        </label>
        <input
          v-model="guest.name"
          type="text"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block font-semibold mb-1">
          {{ t("email") }}
        </label>
        <input
          v-model="guest.email"
          type="email"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        />
      </div>

      <!-- Phone -->
      <div>
        <label class="block font-semibold mb-1">
          {{ t("phone") }}
        </label>
        <input
          v-model="guest.phone"
          type="tel"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        />
      </div>

      <!-- Destination -->
      <div>
        <label class="block font-semibold mb-1">
          {{ t("destination") }}
        </label>
        <select
          v-model="guest.destination"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        >
          <option disabled value="">
            {{ t("selectDestination") }}
          </option>
          <option v-for="item in packages" :value="item.title" :key="item">
            {{ item.title }} package
          </option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- Number of People -->
      <div>
        <label class="block font-semibold mb-1">
          {{ t("people") }}
        </label>
        <input
          v-model.number="guest.number"
          type="number"
          min="1"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        />
      </div>

      <!-- Date -->
      <div>
        <label class="block font-semibold mb-1">
          {{ t("date") }}
        </label>
        <input
          v-model="guest.date"
          type="date"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
        />
      </div>

      <!-- Notes -->
      <div>
        <label class="block font-semibold mb-1">
          {{ t("notes") }}
        </label>
        <textarea
          v-model="guest.notes"
          rows="3"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          :required="guest.destination === 'other'"
        ></textarea>
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="w-full bg-light-blue text-white font-bold py-3 rounded-xl hover:bg-golden transition"
        :disabled="loading"
      >
        {{ loading ? t("sending") : t("bookNow") }}
      </button>

      <!-- Success Message -->
      <p v-if="success" class="text-green-600 font-semibold mt-3 text-center">
        {{ t("success") }}
      </p>
    </form>
  </section>
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useMainStore } from "../../../stores/main.js";
import packages from "../../../../public/packages.js";

const main = useMainStore();

const lang = ref(main.current);

watch(
  () => main.current,
  (newVal) => {
    lang.value = newVal;
  }
);

watch(
  () => main.selectedPackage,
  (newVal) => {
    guest.value.destination = newVal;
  }
);

const guest = ref({
  name: "",
  email: "",
  phone: "",
  destination: "",
  number: "",
  date: null,
  notes: "",
});

const loading = ref(false);
const success = ref(false);

const dict = {
  en: {
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    destination: "Destination",
    selectDestination: "Select a destination",
    people: "Number of People",
    date: "Date",
    notes: "Additional Notes",
    bookNow: "Book Now",
    sending: "Sending...",
    success: "Your booking request has been sent successfully!",
  },
  ar: {
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    destination: "الوجهة",
    selectDestination: "اختر الوجهة",
    people: "عدد الأشخاص",
    date: "التاريخ",
    notes: "ملاحظات إضافية",
    bookNow: "احجز الآن",
    sending: "جارٍ الإرسال...",
    success: "✔️ تم إرسال طلب الحجز بنجاح!",
  },
};

function t(key) {
  return dict[lang.value][key];
}

async function handleSubmit() {
  loading.value = true;
  success.value = false;

  try {
    console.log("FORM DATA:", guest.value);

    guest.value = {
      name: "",
      email: "",
      phone: "",
      destination: "",
      number: "",
      date: null,
      notes: "",
    };

    success.value = true;
  } catch (err) {
    console.error("ERROR:", err);
  }

  loading.value = false;
}

onBeforeMount(() => {
  guest.value.destination = main.selectedPackage;
});
</script>
