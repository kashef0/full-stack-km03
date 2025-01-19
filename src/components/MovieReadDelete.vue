<template>
    <div class="bg-white shadow-md rounded-lg p-4 overflow-hidden transition-transform duration-300 shadow-slate-400 hover:scale-105">
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase">
          {{ index + 1 }}. Filmens namn:
        </h3>
        <p class="text-lg font-semibold text-gray-800 uppercase">{{ item.movie }}</p>
      </div>
  
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase">Prioritet:</h3>
        <p class="text-lg font-semibold text-gray-800">{{ item.priority }}</p>
      </div>
  
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase">Beskrivning:</h3>
        <p class="text-gray-700">{{ item.description }}</p>
      </div>
  
      <div class="mb-4">
        <h3 class="text-sm font-medium text-gray-500 uppercase">Filmstatus:</h3>
        <p class="text-lg font-semibold flex items-center" :class="item.is_watched ? 'text-green-600' : 'text-red-600'">
          <span v-if="item.is_watched">✔ sett</span>
          <span v-else>✘ Inte sett än</span>
        </p>
      </div>
  
      <button @click="deleteMovie(item._id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Radera
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['item', 'index', 'deleteMovie'],
  };
  </script>
  