<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cards from './components/Employees.vue'
import Dashboard from './components/Dashboard.vue'
import Header from './components/Header.vue'
</script>

<template>
  <RouterView />
  <div>

  
    <div>
      

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
      <div class="container">
        <Header />
        
       <div>
        <Cards/>
      </div>
         
       
       
      </div>
    </div>
   
  </div>



</template>

<style scoped>


.container{
  width: 120vh;
  margin: 0 auto;
  
}





</style>
