<template>
  
<div class="container">
  <div class="employee__header">
   

    <RouterLink class="header__button__wrapper" to="/employees/create">
        <button class="header__button"> 
            <span>
                <svg class="button__icon" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 461.03 461.03" style="enable-background:new 0 0 461.03 461.03;" xml:space="preserve">
            <g>
                <g>
                    <path style="fill:#ffffff;" d="M450.619,367.004H10.57c-5.717,0-10.411,4.676-10.411,10.411c0,5.735,4.694,10.411,10.411,10.411    h440.049c5.717,0,10.411-4.676,10.411-10.411S456.354,367.004,450.619,367.004z"/>
                    <path style="fill:#ffffff;" d="M346.033,266.741h20.01v19.993c0,11.717,9.511,21.246,21.228,21.246s21.246-9.529,21.246-21.246    v-19.993h19.993c11.717,0,21.246-9.546,21.246-21.246c0-11.699-9.529-21.228-21.246-21.228h-19.993v-20.01    c0-11.699-9.529-21.228-21.246-21.228s-21.228,9.511-21.228,21.228v20.01h-20.01c-11.717,0-21.228,9.511-21.228,21.228    S334.316,266.741,346.033,266.741z M346.033,241.914h37.656v-37.656c0-3.882,7.182-3.864,7.182,0v37.656h37.638    c1.959,0,3.6,1.641,3.6,3.582c0,1.959-1.659,3.6-3.6,3.6h-37.638v37.638c0,3.882-7.182,3.9-7.182,0v-37.638h-37.656    c-1.941,0-3.582-1.659-3.582-3.6C342.451,243.555,344.092,241.914,346.033,241.914z"/>
                    <path style="fill:#ffffff;" d="M0,343.165h0.388c-0.053,0.388-0.229,0.741-0.229,1.147v1.676c0,5.276,4.323,9.582,9.582,9.582    h334.81c5.276,0,9.582-4.305,9.599-9.582v-1.676c0-0.406-0.177-0.759-0.229-1.147h0.194c-2.7-36.068-26.627-66.101-59.307-77.835    c20.592-12.458,34.815-36.968,34.815-65.465c0-40.956-29.063-74.271-64.795-74.271s-64.795,33.315-64.795,74.271    c0,28.48,14.187,52.955,34.744,65.43c-13.287,4.87-25.128,12.775-34.674,22.904c3.759,4.711,7.04,9.811,10.005,15.087    c13.182-15.652,32.645-25.763,54.702-25.763c34.639,0,63.066,24.651,70.071,57.207H221.683    c-8.682-40.109-38.415-72.136-77.253-83.958c28.251-14.452,48.067-46.938,48.067-84.753c0-51.172-36.174-92.817-80.641-92.817    c-44.485,0-80.659,41.644-80.659,92.817c0,37.797,19.799,70.283,48.049,84.735C37.638,263.406,6.017,299.086,0,343.165z     M217.678,199.864c0-31.215,21.157-56.625,47.149-56.625s47.149,25.41,47.149,56.625c0,31.233-21.14,56.643-47.149,56.643    C238.835,256.507,217.678,231.097,217.678,199.864z M48.826,166.002c0-41.45,28.268-75.171,63.013-75.171    c34.744,0,62.995,33.721,62.995,75.171s-28.251,75.171-62.995,75.171C77.094,241.173,48.826,207.452,48.826,166.002z     M111.821,263.142c44.308,0,81.205,30.562,91.829,71.589H20.01C30.616,293.704,67.513,263.142,111.821,263.142z"/>
                </g>
            </g>
  
            </svg></span> Добавить сотрудника</button>
    </RouterLink>
    <button @click="removeEmployee" class="header__button">Удалить сотрудника</button>
</div>
    <main class="table">
        <section class="table__header">
<!--             
            <div class="input-group">
                <input type="search" placeholder="Search Data...">
                <img src="images/search.png" alt="">
            </div> -->
         
        </section>
        <section class="table__body">
            <table>
                <thead class="card__title">
                    <tr>
                        <th  class="card__title__element"></th>
                        <th  class="card__title__element"> Id <span class="icon-arrow">&UpArrow;</span></th>
                        <th  class="card__title__element"> ФИО <span class="icon-arrow">&UpArrow;</span></th>
                        <th  class="card__title__element"> Должность <span class="icon-arrow">&UpArrow;</span></th>
                        <th  class="card__title__element"> Номер <span class="icon-arrow">&UpArrow;</span></th>
                        <th  class="card__title__element"> Почта <span class="icon-arrow">&UpArrow;</span></th>
                        <th  class="card__title__element"> Действие <span class="icon-arrow">&UpArrow;</span></th>
                    </tr>
                </thead>
                <tbody v-for="(employee, index) in this.employees" :key="index">
                    <tr>
                      <td><div class="round" :class="{ selected : employee.isSelected }" @click="selectedEmployee(employee.id)"></div> </td>
                        <td>{{ employee.id }}</td>
                     <td>
                          <img class="card__img" :src="employee.avatar" />
                          {{ employee.firstName }}
                          {{ employee.middleName }}
                          {{ employee.lastName }}
                        </td>
                        <td> {{ employee.jobTitle }} </td>
                        <td>{{ employee.phoneNumber }}</td>
                        <td>
                          {{ employee.email }}
                        </td>
                        <td>  <RouterLink :to="{ path: '/employees/profile/'+ employee.id + '/edit'}">
                          Edit
                      </RouterLink></td>
                    </tr>

                </tbody>
            </table>
        </section>
    </main>


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
      removeEmployee() {}
      
        
    }
</script>

<style scoped>



.header__element {
  text-decoration: none;
  color: black;
  font-size: 25px;
}

.header__button__wrapper {
  text-decoration: none;

}
.header__button {
  padding: 12px;
  font-weight: 700;
  color: white;
  background-color: #5F911A;
  border-radius: 10px;
  border: none;
  display: flex;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
}

.header__button:hover {
  background-color: #47781C;
  transition: all .7s ease;
}

.button__icon {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  
}
.employee__header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  margin-bottom: 10px;
}

.round {
  position: relative;
  background-color: white;
  border: 2px solid #ccc;

  cursor: pointer;
  height: 30px;
  width: 30px;


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





.table {
 
  background-color: #fff5;

  backdrop-filter: blur(7px);
  box-shadow: 0 .4rem .8rem #0005;
  border-radius: .8rem;
  overflow: hidden;
  margin: 40px 0 0 40px;
}

.table__header {
  width: 100%;
  height: 10%;
  background-color: #fff4;
  padding: .8rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table__header .input-group {
  width: 35%;
  height: 100%;
  background-color: #fff5;
  padding: 0 .8rem;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .2s;
}

.table__header .input-group:hover {
  width: 45%;
  background-color: #fff8;
  box-shadow: 0 .1rem .4rem #0002;
}

.table__header .input-group img {
  width: 1.2rem;
  height: 1.2rem;
}

.table__header .input-group input {
  width: 100%;
  padding: 0 .5rem 0 .3rem;
  background-color: transparent;
  border: none;
  outline: none;
}

.table__body {
  width: 95%;
  max-height: calc(89% - 1.6rem);
  background-color: #fffb;

  margin: .8rem auto;
  border-radius: .6rem;

  overflow: auto;
  overflow: overlay;
}

.table__body::-webkit-scrollbar{
  width: 0.5rem;
  height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
  border-radius: .5rem;
  background-color: #0004;
  visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{ 
  visibility: visible;
}

table {
  width: 100%;
}

td img {
  width: 36px;
  height: 36px;
  margin-right: .5rem;
  border-radius: 50%;

  vertical-align: middle;
}

table, th, td {
  border-collapse: collapse;
  padding: 1rem;
  text-align: left;
}

thead th {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #d5d1defe;
  cursor: pointer;
  text-transform: capitalize;
}

tbody tr:nth-child(even) {
  background-color: #0000000b;
}

tbody tr {
  --delay: .1s;
  transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
  opacity: 0;
  transform: translateX(100%);
}

tbody tr:hover {
  background-color: #fff6 !important;
}

tbody tr td,
tbody tr td p,
tbody tr td img {
  transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
  padding: 0;
  font: 0 / 0 sans-serif;
  transition: .2s ease-in-out .5s;
}

tbody tr.hide td img {
  width: 0;
  height: 0;
  transition: .2s ease-in-out .5s;
}

.status {
  padding: .4rem 0;
  border-radius: 2rem;
  text-align: center;
}

.status.delivered {
  background-color: #86e49d;
  color: #006b21;
}

.status.cancelled {
  background-color: #d893a3;
  color: #b30021;
}

.status.pending {
  background-color: #ebc474;
}

.status.shipped {
  background-color: #6fcaea;
}


@media (max-width: 1000px) {
  td:not(:first-of-type) {
      min-width: 12.1rem;
  }
}

thead th span.icon-arrow {
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  border: 1.4px solid transparent;
  
  text-align: center;
  font-size: 1rem;
  
  margin-left: .5rem;
  transition: .2s ease-in-out;
}

thead th:hover span.icon-arrow{
  border: 1.4px solid #6c00bd;
}

thead th:hover {
  color: #6c00bd;
}

thead th.active span.icon-arrow{
  background-color: #6c00bd;
  color: #fff;
}

thead th.asc span.icon-arrow{
  transform: rotate(180deg);
}

thead th.active,tbody td.active {
  color: #6c00bd;
}



</style>