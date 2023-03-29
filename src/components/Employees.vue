<template>
  
<div class="container">
     
   <table class="card__table">
      <thead class="card__title">
        <th class="card__title__element main">ФИО</th>
        <th class="card__title__element">Должность</th>
        <th class="card__title__element">Номер</th>
        <th class="card__title__element">Почта</th>
        <th class="card__title__element">Действие</th>
      </thead>
      <div class="card ">
        <tbody v-for="(employee, index) in this.employees" :key="index" class="card__info">
    
        
          <td  class="card__item main"> 
            <div class="round" 
            :class="{ selected : employee.isSelected }"
            @click="selectedEmployee(employee.id)"></div>
            <img class="card__img" :src="employee.avatar" />
        </td>
         <td class="card__item main">
          {{ employee.id }}
          {{employee.firstName}}
          {{ employee.middleName }}
          {{ employee.lastName }}
        </td>
          <td class="card__item "> {{ employee.jobTitle }}</td>
          <td class="card__item"> {{ employee.phoneNumber }}</td>
          <td  class="card__item"> {{ employee.email }}</td>
          <td class="card__item">
            <RouterLink :to="{ path: '/employees/profile/'+ employee.id + '/edit'}" > 
              Edit
          </RouterLink>
          </td>
        </tbody>
      </div>
               
  </table> 
</div>
</template>

<script>
import axios from 'axios'

    export default {
      name: 'employees',
      data() {
        return {
          employees: [],
          
        }
      },
      mounted () {
        this.getEmployees();

      },

      methods: {
        getEmployees() {
          axios.get('https://63e79c82ac3920ad5be0b369.mockapi.io/project?').then(res => {
            this.employees = res.data
          
          })
        },
        selectedEmployee: function(employeeId) {
          const currentEmployee =  this.employees.find((e) => e.id === employeeId);
          currentEmployee.isSelected = !currentEmployee.isSelected;
          console.log(currentEmployee.isSelected)
      }
      },
      
        
    }
</script>

<style scoped>

.card {
  margin-left: 50px;
}

.card__table {
  min-width: 100%;
  
  
}



.card.completed .round {
  border-color: transparent;

}

.card__info {
  display: flex;
  justify-content: space-between;
  background-color: #F5F5F5;
  font-weight: 700;
  padding: 15px;
  min-width: 100%;
  position: relative;
  color: #5C5858; 
  border: 3px solid #F5F5F5;
  cursor: pointer;
}

.card__info:hover {
  background-color: white;
  transition: all .5s ease;
}

.card__item {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 20%;
  align-items: center;
}




.card__img {
  margin:0 45px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
 
}



.card__title {
  display: flex;
  justify-content: space-between;

}



.card__title__element {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 20%;
  color: #526a7c;
}



.round {
  position: relative;
  background-color: white;
  border: 2px solid #ccc;

  cursor: pointer;
  min-height: 30px;
  min-width: 30px;
  
   
}




.round:after {
  border: 3px solid #66bb6a;
  border-top: none;
  border-right: none;
  content: "";
  height: 9px;
  width: 14px;

  opacity: 0;
  position: absolute;
  top: 25%;
  left: 25%;
  transform: rotate(-45deg);

}



.round.selected {
  background-color: white;
  border-color: #66bb6a;
}

.round.selected:after {
  opacity: 1;
}


</style>