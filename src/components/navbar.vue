<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="toggleNavbar"
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            
              <!-- Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block" -->
           
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex shrink-0 items-center">
            <img
              class="h-10 w-auto"
              src="../assets/logo.svg"
              alt="movie time"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link
                to="/home"
                routerLinkActive="active"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >Hem</router-link
              >
              <router-link
                :to="{name: 'addmovie'}"
                routerLinkActive="active"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >Lägga till</router-link>
              <router-link
                :to="{name: 'MoviesView'}"
                routerLinkActive="active"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >Movies&tv</router-link
              >
              <router-link
                :to="{name: 'InfoPage'}"
                routerLinkActive="active"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >Om sidan</router-link
              >
            </div>
          </div>
        </div>
        <div class="relative ml-3">
          <div>
            <a href="https://sage-beignet-ee7eba.netlify.app/" class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" role="menuitem" tabindex="-1" id="user-menu-item-2">movie Lover</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobil menu -->
    <div class="sm:hidden" id="mobile-menu" v-if="toggleMenu">
      <div class="space-y-1 px-2 pb-3 pt-2 text-center">
        <router-link
          :to="{name: 'home'}"
          routerLinkActive="active"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >Hem</router-link
        >
        <router-link
          :to="{name: 'addmovie'}"
          routerLinkActive="active"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >Lägga till</router-link
        >
        <router-link
          :to="{name: 'MoviesView'}"
          routerLinkActive="active"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >Movies&tv</router-link
        >
        <router-link
          :to="{name: 'InfoPage'}"
          routerLinkActive="active"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >Om sidan</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';



export default {
  name: "Navbar",
  components: [RouterLink],

  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.toggleMenu = !this.toggleMenu;
    },
  },
};
</script>
