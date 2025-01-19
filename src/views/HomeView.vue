<template>
  <main>
    <div v-if="storeData.is_loading" class="flex items-center justify-center mb-6 full-height">
      <div class="loader border-t-blue-500 border-4 border-gray-200 rounded-full w-8 h-8 animate-spin"></div>
      <p class="ml-4 text-gray-600">Laddning...</p>
    </div>

    <div v-else class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div v-if="storeData.error" class="text-red-500 font-bold">Ett fel inträffade: {{ storeData.error }}</div>
      <div v-if="storeData.text && storeData.text.length > 0" class="text-red-500 font-bold text-lg text-center">{{ storeData.text }}</div>

      <div v-else-if="storeData.movieList && storeData.movieList.length > 0">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Min Film- och Serielista</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MovieReadDelete
            v-for="(item, index) in storeData.movieList"
            :key="item._id"
            :item="item"
            :index="index"
            :deleteMovie="deleteMovie"
          />
        </div>
      </div>

      <div v-else class="flex items-center justify-center mb-6">
        <div class="loader border-t-blue-500 border-4 border-gray-200 rounded-full w-8 h-8 animate-ping"></div>
        <p class="ml-4 text-gray-600">{{ storeData.text }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useApiStore } from '../stores/api';
import MovieReadDelete from '@/components/MovieReadDelete.vue';
import { computed } from 'vue';
export default {
  components: {
    MovieReadDelete,
  },
  setup() {
    const apiStore = useApiStore();

    // Skapa en computed för att hantera data i en variable
    const storeData = computed(() => ({
    movieList: apiStore.MovieList,
    is_loading: apiStore.is_loading,
    error: apiStore.error,
    text: apiStore.text,
  }));

    const fetchData = async () => {
      apiStore.is_loading = true;
      try {
        await apiStore.fetchMovies(import.meta.env.VITE_URL); // hämta movie och uppdatera store
      } catch (err) {
        apiStore.error = err.message;
      } finally {
        apiStore.is_loading = false; 
      }
    };

    const deleteMovie = async (id) => {
      apiStore.is_loading = true;
      if (confirm('Är du säker att du vill radera filmintress?')) {
        try {
          await apiStore.deleteMovie(import.meta.env.VITE_URL, id); 
          apiStore.text = 'Du tryckte på OK och filmintresse har raderats!';
        } catch (err) {
          apiStore.text = `Fel vid radering: ${err.message}`;
        } finally {
          apiStore.is_loading = false;
        }
        resetTextAfterDelay();
      } else {
        apiStore.text = 'Du avbröt!';
        apiStore.is_loading = false;
        resetTextAfterDelay();
      }
    };

    const resetTextAfterDelay = () => {
      setTimeout(() => {
        apiStore.text = ''; 
      }, 3000);
    };

    // Hämta filmer när komponenten laddas
    fetchData();

    return {
      storeData,
      fetchData,
      deleteMovie,
    };
  },
};
</script>
