<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white shadow-xl p-6 rounded-2xl space-y-5 w-full max-w-xl mx-auto"
    id="form"
  >
    <!-- Full Name -->
    <div>
      <label class="block font-semibold mb-1"> FullName </label>
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

    <!-- Phone -->
    <div>
      <label class="block font-semibold mb-1"> phone </label>
      <input
        v-model="guest.phone"
        type="tel"
        class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
        required
      />
    </div>

    <!-- Destination -->
    <div>
      <label class="block font-semibold mb-1"> destination </label>
      <select
        v-model="guest.destination"
        class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
        required
      >
        <option disabled value="">selectDestination</option>
        <option v-for="item in packages" :value="item" :key="item">
          {{ item }}
        </option>
        <option value="other">Other</option>
      </select>
    </div>

    <!-- Number of People -->
    <div>
      <label class="block font-semibold mb-1"> people </label>
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
      <label class="block font-semibold mb-1"> date </label>
      <input
        v-model="guest.date"
        type="date"
        class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
        required
        :min="minDate"
      />
    </div>

    <!-- Notes -->
    <div>
      <label class="block font-semibold mb-1"> notes </label>
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
        {{ loading ? "sending" : "Confirm Booking" }}
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
          Booking registered successfully
        </span>
      </p>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import useMainStore from "../../stores/main";
const store = useMainStore();
const guest = ref({
  name: "",
  email: "",
  phone: "",
  destination: "",
  number: "",
  date: null,
  notes: "",
});
const packages = [
  "Luxor",
  "Cairo",
  "Aswan",
  "Hurghada",
  "Marsa Alam",
  "Marsa Matruh",
  "Sharm El Sheikh",
];

watch(
  () => store.destination,
  (newVal) => {
    guest.value.destination = newVal;
  }
);

onMounted(() => {
  if (store.destination) {
    guest.value.destination = store.destination;
  }
});

const loading = ref(false);
const success = ref(false);

async function handleSubmit() {
  loading.value = true;
  success.value = false;

  try {
    const res = await fetch("/api/sendEmail", {
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
        phone: "",
        destination: "",
        number: "",
        date: null,
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

const minDate = new Date().toISOString().split("T")[0];
</script>
