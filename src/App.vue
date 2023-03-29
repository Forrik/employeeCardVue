<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Dashboard from './components/Dashboard.vue'
import Header from './components/Header.vue'

</script>

<template>

  <div>

  <Dashboard />

      

    
      <div class="container">
        <Header />
        
     
       
       
      </div>
   
   
  </div>
<RouterView />


</template>

<style scoped>








</style>
