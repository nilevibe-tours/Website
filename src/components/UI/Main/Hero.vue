<template>
  <section class="relative w-screen h-screen overflow-hidden">
    <video
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source src="/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 bg-black/50"></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      style="will-change: transform, opacity"
    >
      <h1
        class="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight"
      >
        Discover Egypt with
        <span class="text-light-blue font-sans text-nowrap"
          >NileVibe Tours</span
        >
      </h1>

      <p class="mt-6 text-sm md:text-2xl max-w-3xl drop-shadow-md">
        From the Nubian villages to the magnificent temples of Karnak, embark on
        a journey through Egypt's timeless wonders. Your adventure starts here!
      </p>

      <a
        href="#booking"
        class="mt-8 px-8 py-4 text-xl bg-light-blue font-semibold rounded-full hover:bg-golden transition duration-300 shadow-lg"
      >
        Book Now
      </a>
    </div>
  </section>
</template>

<style scoped>
h1,
p,
a {
  backface-visibility: hidden;
}
</style>
