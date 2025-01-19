<script setup>
import { ref, watch, onMounted } from 'vue';

const apiKey = import.meta.env.VITE_API_KEY;
const searchQuery = ref('');
const currentPage = ref(1); 
const totalPages = ref(1); 
const combinedData = ref([]); 
const isLoading = ref(false);
const error = ref(null);


const fetchMoviesAndShows = async (page = 1) => {
  isLoading.value = true;
  error.value = null;
  combinedData.value = [];

  try {
    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}&language=en-US`
    );
    const tvShowResponse = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}&language=en-US`
    );

    const movieData = await movieResponse.json();
    const tvShowData = await tvShowResponse.json();

    combinedData.value = [
      ...movieData.results.map((movie) => ({ ...movie, type: 'movie' })),
      ...tvShowData.results.map((show) => ({ ...show, type: 'tv' })),
    ];

    totalPages.value = movieData.total_pages;

  } catch (err) {
    error.value = 'Failed to load data';
  } finally {
    isLoading.value = false;
  }
};


const searchMoviesAndShows = async () => {
  isLoading.value = true;
  error.value = null;
  combinedData.value = [];

  try {
    const query = searchQuery.value.trim();
    if (!query) {
      error.value = 'Please enter a search term';
      isLoading.value = false;
      return;
    }


    const movieResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`
    );
    const tvShowResponse = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`
    );

    const movieData = await movieResponse.json();
    const tvShowData = await tvShowResponse.json();

 
    combinedData.value = [
      ...movieData.results.map((movie) => ({ ...movie, type: 'movie' })),
      ...tvShowData.results.map((show) => ({ ...show, type: 'tv' })),
    ];
  } catch (err) {
    error.value = 'Failed to load data';
  } finally {
    isLoading.value = false;
  }
};



const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchMoviesAndShows(page); 
  }
};



onMounted(() => {
  fetchMoviesAndShows(currentPage.value);
  
});


watch(searchQuery, () => {
  if (searchQuery.value) {
    searchMoviesAndShows();
  } else {
    fetchMoviesAndShows(currentPage.value); 
  }
});

</script>



<template>
  <div class="max-w-4xl mx-auto py-10 px-4">

    <div class="flex items-center space-x-4 mb-6">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Sök efter en film eller TV-show"
        class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
      />
      <button
        @click="searchMoviesAndShows"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        söka
      </button>
    </div>


    <div v-if="error" class="bg-red-100 text-red-700 border border-red-300 rounded-lg p-4 mb-6">
      <p>{{ error }}</p>
    </div>

    <div v-if="isLoading" class="flex items-center justify-center mb-6">
      <div class="loader border-t-blue-500 border-4 border-gray-200 rounded-full w-8 h-8 animate-spin"></div>
      <p class="ml-4 text-gray-600">Laddning...</p>
    </div>


    <div v-if="combinedData.length > 0">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Movies och TV Shows</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li
          v-for="item in combinedData"
          :key="item.id"
          class="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <div class="relative">
            <img
              v-if="item.poster_path"
              :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
              :alt="item.title || item.name"
              class="w-full h-64 object-cover"
            />
            <div
              class="absolute top-2 left-2 px-3 py-1 text-xs font-bold text-white rounded-full"
              :class="{
                'bg-blue-600': item.type === 'movie',
                'bg-green-600': item.type === 'tv'
              }"
            >
              {{ item.type === 'movie' ? 'Movie' : 'TV Show' }}
            </div>
          </div>
          

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800 mb-2">{{ item.title || item.name }}</h3>
            <p class="text-sm text-gray-600 mb-4">
              {{ item.overview || 'No description available.' }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="totalPages > 1" class="flex justify-center mt-6">
      <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
      >
        föregående
      </button>
      <span class="mx-4 text-lg">{{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
        class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
      >
        nästa
      </button>
    </div>
  </div>
</template>



<style scoped>
.result-item {
  display: flex;
  margin-bottom: 20px;
}

.result-item-content {
  display: flex;
  align-items: center;
}

.poster {
  width: 100px;
  height: 150px;
  margin-right: 20px;
}

.details h3 {
  margin: 0;
  font-size: 1.2rem;
}

.details p {
  font-size: 0.9rem;
  color: #555;
}

.details a {
  color: #007bff;
  text-decoration: none;
}

.details a:hover {
  text-decoration: underline;
}

</style>
