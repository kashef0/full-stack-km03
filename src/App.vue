<script setup>
import Navbar from './components/navbar.vue';
import Home from './views/HomeView.vue';
import Footer from './components/footer.vue';
import bannerview from './components/bannerview.vue'



</script>

<template>
  <Navbar />
  <bannerview />
  <RouterView />
  <Footer></Footer>
</template>


<style scoped>

</style>
