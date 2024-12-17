<script>

// Använd `import.meta.env.VITE_URL` för dynamisk API-konfiguration

const url = import.meta.env.VITE_URL;
export default {
  
  data() {
    return {
      data: [],
      error: null,
      id: null,
      movie: "",
      priority: null,
      description: "",
      is_watch: false,
      is_loading: false,
      text: ""
    };
  },
  methods: {
    // Hämta filmerintresse lista från API via metoden `fetchData`
    async fetchData() {
       console.log("Fetching data...");
      this.is_loading = true;
      try {
        const res = await fetch(`${url}/movie`, {
            method: "GET",
        });
        if (!res.ok) {
          throw new Error(`Http error! status: ${res.status}`);
        }
        this.data = await res.json();
        
      } catch (err) {
        this.error = err.message;
      } finally {
        this.is_loading = false;
      }
    },
    async deleteMovie(id) {
      this.is_loading = true;  // Sätt is_loading till true för att indikera att en radering pågår
      if (confirm("Är du säker att du vill radera filmintress? ") === true) {
        // Skicka DELETE-förfrågan till API för att ta bort filmen med id som användren anger
        try {
            const res = await fetch(`${url}/delete/${id}`, {
              method: "DELETE",
            });
            if (!res.ok) {
              throw new Error(`Http error! status: ${res.status}`);
            }
             // Filmen raderas från den lokala datan
            this.data = this.data.filter(movie => movie._id !== id);
            this.text = "Du tryckte på OK och filmintresse har raderats!";
          } catch (err) {
            this.error = err.message;
          } finally {
            this.is_loading = false;
          }
          this.resetTextAfterDelay();
      } else {
        this.text = "Du avbröt!";
        this.is_loading = false;
        this.resetTextAfterDelay();
      }
    },
      resetTextAfterDelay() {
      setTimeout(() => {
        this.text = ""; 
      }, 3000);
    },
  },
  mounted() {
      this.fetchData();
    }
}

</script>

<template>
  <main>
      <div v-if="is_loading" class="flex items-center justify-center mb-6 full-height">
        <div class="loader border-t-blue-500 border-4 border-gray-200 rounded-full w-8 h-8 animate-spin"></div>
        <p class="ml-4 text-gray-600">Laddning...</p>
      </div>
    <div v-else class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 " >
      <!-- Error behandling --> 
      <div v-if="error" class="text-red-500 font-bold">Ett fel inträffades: {{ error }}</div>
      <div v-if="text && text.length > 0" class="text-red-500 font-bold text-lg text-center">{{ text }}</div>
      <!-- laddning status -->
      <div v-else-if="is_loading" class="flex items-center justify-center mb-6">
        <div class="loader border-t-blue-500 border-4 border-gray-200 rounded-full w-8 h-8 animate-spin"></div>
        <p class="ml-4 text-gray-600">Laddning...</p>
      </div>
      <!-- MovieList -->
      <div v-else-if="data && data.length > 0">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Min Film- och Serielista</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div
            v-for="(item, index) in data"
            :key="item._id"
            class="bg-white shadow-md rounded-lg p-4 overflow-hidden transition-transform duration-300 shadow-slate-400 hover:scale-105"
            >
            <!-- Movie Name -->
            <div class="mb-4">
              <h3 class="text-sm font-medium text-gray-500 uppercase">
                {{ index + 1 }}. Filmens namn:
              </h3>
              <p class="text-lg font-semibold text-gray-800 uppercase">{{ item.movie }}</p>
            </div>

            <!-- Prioritet -->
            <div class="mb-4">
              <h3 class="text-sm font-medium text-gray-500 uppercase">Prioritet:</h3>
              <p class="text-lg font-semibold text-gray-800">{{ item.priority }}</p>
            </div>

            <!-- Beskrivning -->
            <div class="mb-4">
              <h3 class="text-sm font-medium text-gray-500 uppercase">Beskrivning:</h3>
              <p class="text-gray-700">{{ item.description }}</p>
            </div>

            <!-- filmStatus -->
            <div class="mb-4">
              <h3 class="text-sm font-medium text-gray-500 uppercase">Filmstatus:</h3>
              <p
                class="text-lg font-semibold flex items-center"
                :class="item.is_watched ? 'text-green-600' : 'text-red-600'"
              >
                <span v-if="item.is_watched">✔ sett</span>
                <span v-else>✘ Inte sett än</span>
              </p>
            </div>
            <button @click="deleteMovie(item._id)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Radera
          </button>
          <div v-if="error" class="error-message">
            {{ error }}
          </div>
          </div>
        </div>
    </div>

    <div v-else class="flex items-center justify-center mb-6">
        <div class="loader border-t-blue-500 border-4 border-gray-200 rounded-full w-8 h-8 animate-ping"></div>
        <p class="ml-4 text-gray-600">Inga data finns att visa...</p>
    </div>
  </div>

  </main>
</template>

<style scoped>

.full-height {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>