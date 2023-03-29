<template>
    <div>

        <Dashboard />
          <div>
            
      
            <nav>
              <!-- <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink> -->
            </nav>
            <div class="container">
              <Header />
              
             <div>
              <Employees />
            </div>
               
             
             
            </div>
          </div>
         
        </div>
</template>

<script>
import Employees from './Employees.vue'
import Dashboard from './Dashboard.vue'
import Header from './Header.vue'
    export default {
        name: 'page',
        
    }
</script>

<style scoped>

.container{
    width: 120vh;
    margin: 0 auto;
    
  }
  
  

</style>