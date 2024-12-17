<template>
    <div class="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] w-full overflow-hidden">
      <!-- Background Image -->
      <img
        src="@/assets/images/banner_bg_img.webp"
        alt="Banner Image"
        class="absolute inset-0 w-full h-full object-fill"
      />
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
  
      <!-- Header Text -->
      <div class="absolute top-6 w-full text-center">
        <h1 class="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
            Välkommen till Filmlistasintresse
        </h1>
      </div>
  
      <!-- Centered Content (Text/Buttons) -->
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 class="text-base sm:text-2xl md:text-2xl font-semibold text-white">
            Här kan du utforska ett stort bibliotek av filmer och TV-serier, samt söka efter specifika filmer för att skapa din egen lista
        </h2>
        <p class="text-md sm:text-lg mt-4 max-w-2xl">
            Känn dig fri att utforska min webbplats
        </p>
      </div>
    </div>
  </template>
  