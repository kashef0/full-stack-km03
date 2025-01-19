import { defineStore } from "pinia";

export const useApiStore = defineStore("api", {
  state: () => ({
    MovieList: [],
    is_loading: false,
    error: null,
  }),

  actions: {
    async fetchMovies(url) {
      this.is_loading = true;
      try {
        const res = await fetch(`${url}/movie`, { method: "GET" });
        if (!res.ok) throw new Error(`Http error! status: ${res.status}`);
        const data = await res.json();
        this.MovieList = data;
      } catch (error) {
        console.error("Error fetching movies:", error);
        this.error = error.message;
      } finally {
        this.is_loading = false;
      }
    },

    async deleteMovie(url, id) {
      this.is_loading = true;
      try {
        const res = await fetch(`${url}/delete/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error(`Http error! status: ${res.status}`);
        this.MovieList = this.MovieList.filter(movie => movie._id !== id);
      } catch (error) {
        console.error("Error deleting movie:", error);
        this.error = error.message;
      } finally {
        this.is_loading = false;
      }
    },
  },
});
