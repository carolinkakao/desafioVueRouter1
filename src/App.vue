<template>
  <div>
  
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <div>
    <router-view></router-view>
     </div>
    <!-- Encapsular el nav y footer en un componente e importarlo -->
    <Nav /> <!-- El componente nav contiene el router-link correspondiente para cada vista -->
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Footer,
    Nav,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
