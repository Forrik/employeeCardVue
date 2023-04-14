<template>
    <div class="container">
        <div class="profile__header">
            <RouterLink :to="{ path: '/'}">
                <svg class="profile__icon" viewBox="0 0 16 16" version="1.1">
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Rounded" transform="translate(-580.000000, -3436.000000)">
                            <g id="Navigation" transform="translate(100.000000, 3378.000000)">
                                <g id="-Round-/-Navigation-/-arrow_back" transform="translate(476.000000, 54.000000)">
                                    <g transform="translate(0.000000, 0.000000)">
                                        <polygon id="Path" points="0 0 24 0 24 24 0 24"/>
                                        <path d="M19,11 L7.83,11 L12.71,6.12 C13.1,5.73 13.1,5.09 12.71,4.7 C12.32,4.31 11.69,4.31 11.3,4.7 L4.71,11.29 C4.32,11.68 4.32,12.31 4.71,12.7 L11.3,19.29 C11.69,19.68 12.32,19.68 12.71,19.29 C13.1,18.9 13.1,18.27 12.71,17.88 L7.83,13 L19,13 C19.55,13 20,12.55 20,12 C20,11.45 19.55,11 19,11 Z" id="🔹-Icon-Color" fill="#1D1D1D"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </RouterLink>
            
            <img class="profile__mini__img" :src="model.employee.avatar" />
            <h1>
                {{model.employee.firstName}}
                {{model.employee.middleName}}
                {{model.employee.lastName}}

            </h1>
            <button @click="deleteEmployee(model.employee.id)" class="profile__button">Delete</button>
            <button @click="edit = !edit">Edit</button>
           
        </div>
        <div class="profile__line"></div>
        
<div v-if="!edit" class="profile__wrapper">
    <div class="profile__info">
        <h5 class="profile__title">Profile image</h5>
        <img class="profile__img" :src="model.employee.avatar" />
        <h5 class="profile__title">Employee Details</h5>
        <div v-if="!edit" class="form-section">
            <label class="form-control__label" for="">First Name</label>
            <input disabled v-model="model.employee.firstName"   type="text" class="input" /> 
          
        </div>
   
      
        <div class="form-section">
            <label class="form-control__label" for="">Middle Name</label>
            <input disabled  v-model="model.employee.middleName" type="text" class="input" />
        </div>
        <div class="form-section">
            <label class="form-control__label" for="">Last Name</label>
            <input disabled v-model="model.employee.lastName" type="text" class="input" />
        </div>
    </div>
    <div class="profile__info"><h5 class="profile__title">Role</h5>
  
        <div class="form-section">
            <label class="form-control__label" for="">Number Phone</label>
            <input id="phone" disabled v-model="model.employee.phoneNumber"   type="text" class="input" /> 
        </div>
        <div class="form-section">
            <label class="form-control__label" for="">Email</label>
            <input disabled v-model="model.employee.email"    type="text" class="input" /> 
        </div>
</div>
    <div class="profile__info">
        <h5 class="profile__title">Контракт</h5>
        <div class="form-section">
            <label class="form-control__label" for="">Должность</label>
            <div style="display: flex;"> 
                <input disabled v-model="model.employee.jobTitle" type="text" class="input" /> 
                <svg class="profile__icon" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;" xml:space="preserve">
                    <g>
                        <path d="M60.652,75.816V15.163C60.652,6.781,67.433,0,75.817,0c8.38,0,15.161,6.781,15.161,15.163v60.653   c0,8.38-6.781,15.161-15.161,15.161C67.433,90.978,60.652,84.196,60.652,75.816z M318.424,90.978   c8.378,0,15.163-6.781,15.163-15.161V15.163C333.587,6.781,326.802,0,318.424,0c-8.382,0-15.168,6.781-15.168,15.163v60.653   C303.256,84.196,310.042,90.978,318.424,90.978z M485.212,363.906c0,66.996-54.312,121.307-121.303,121.307   c-66.986,0-121.302-54.311-121.302-121.307c0-66.986,54.315-121.3,121.302-121.3C430.9,242.606,485.212,296.919,485.212,363.906z    M454.89,363.906c0-50.161-40.81-90.976-90.98-90.976c-50.166,0-90.976,40.814-90.976,90.976c0,50.171,40.81,90.98,90.976,90.98   C414.08,454.886,454.89,414.077,454.89,363.906z M121.305,181.955H60.652v60.651h60.653V181.955z M60.652,333.584h60.653V272.93   H60.652V333.584z M151.629,242.606h60.654v-60.651h-60.654V242.606z M151.629,333.584h60.654V272.93h-60.654V333.584z    M30.328,360.891V151.628h333.582v60.653h30.327V94c0-18.421-14.692-33.349-32.843-33.349h-12.647v15.166   c0,16.701-13.596,30.325-30.322,30.325c-16.731,0-30.326-13.624-30.326-30.325V60.651H106.14v15.166   c0,16.701-13.593,30.325-30.322,30.325c-16.733,0-30.327-13.624-30.327-30.325V60.651H32.859C14.707,60.651,0.001,75.579,0.001,94   v266.892c0,18.36,14.706,33.346,32.858,33.346h179.424v-30.331H32.859C31.485,363.906,30.328,362.487,30.328,360.891z    M303.256,242.606v-60.651h-60.648v60.651H303.256z M409.399,363.906h-45.49v-45.49c0-8.377-6.781-15.158-15.163-15.158   s-15.159,6.781-15.159,15.158v60.658c0,8.378,6.777,15.163,15.159,15.163h60.653c8.382,0,15.163-6.785,15.163-15.163   C424.562,370.692,417.781,363.906,409.399,363.906z"/>
                    </g></svg>
                </div>
        </div>
    </div>
    <button  @click="updateEmployee">save</button>
</div>
<div v-if="edit" class="profile__wrapper">
    <div class="profile__info">
        <h5 class="profile__title">Profile image</h5>
        <img class="profile__img" :src="model.employee.avatar" />
        <h5 class="profile__title">Employee Details</h5>
        <div class="form-section edit">
            <label class="form-control__label" for="">First Name</label>
            <input  v-model="model.employee.firstName"   type="text" class="input edit" /> 
        </div>
   
      
        <div class="form-section edit">
            <label class="form-control__label" for="">Middle Name</label>
            <input   v-model="model.employee.middleName" type="text" class="input edit" />
        </div>
        <div class="form-section edit">
            <label class="form-control__label" for="">Last Name</label>
            <input  v-model="model.employee.lastName" type="text" class="input edit" />
        </div>
    </div>
    <div class="profile__info"><h5 class="profile__title">Role</h5>
  
        <div class="form-section edit">
            <label class="form-control__label" for="">Number Phone</label>
            <input v-model="model.employee.phoneNumber"    type="text" class="input edit" /> 
        </div>
        <div class="form-section edit">
            <label class="form-control__label" for="">Email</label>
            <input  v-model="model.employee.email"    type="text" class="input edit" /> 
        </div>
</div>
    <div class="profile__info">
        <h5 class="profile__title">Контракт</h5>
        <div class="form-section edit">
            <label class="form-control__label" for="">Должность</label>
            <div style="display: flex;"> 
                <input  v-model="model.employee.jobTitle" type="text" class="input edit" /> 
                <svg class="profile__icon" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;" xml:space="preserve">
                    <g>
                        <path d="M60.652,75.816V15.163C60.652,6.781,67.433,0,75.817,0c8.38,0,15.161,6.781,15.161,15.163v60.653   c0,8.38-6.781,15.161-15.161,15.161C67.433,90.978,60.652,84.196,60.652,75.816z M318.424,90.978   c8.378,0,15.163-6.781,15.163-15.161V15.163C333.587,6.781,326.802,0,318.424,0c-8.382,0-15.168,6.781-15.168,15.163v60.653   C303.256,84.196,310.042,90.978,318.424,90.978z M485.212,363.906c0,66.996-54.312,121.307-121.303,121.307   c-66.986,0-121.302-54.311-121.302-121.307c0-66.986,54.315-121.3,121.302-121.3C430.9,242.606,485.212,296.919,485.212,363.906z    M454.89,363.906c0-50.161-40.81-90.976-90.98-90.976c-50.166,0-90.976,40.814-90.976,90.976c0,50.171,40.81,90.98,90.976,90.98   C414.08,454.886,454.89,414.077,454.89,363.906z M121.305,181.955H60.652v60.651h60.653V181.955z M60.652,333.584h60.653V272.93   H60.652V333.584z M151.629,242.606h60.654v-60.651h-60.654V242.606z M151.629,333.584h60.654V272.93h-60.654V333.584z    M30.328,360.891V151.628h333.582v60.653h30.327V94c0-18.421-14.692-33.349-32.843-33.349h-12.647v15.166   c0,16.701-13.596,30.325-30.322,30.325c-16.731,0-30.326-13.624-30.326-30.325V60.651H106.14v15.166   c0,16.701-13.593,30.325-30.322,30.325c-16.733,0-30.327-13.624-30.327-30.325V60.651H32.859C14.707,60.651,0.001,75.579,0.001,94   v266.892c0,18.36,14.706,33.346,32.858,33.346h179.424v-30.331H32.859C31.485,363.906,30.328,362.487,30.328,360.891z    M303.256,242.606v-60.651h-60.648v60.651H303.256z M409.399,363.906h-45.49v-45.49c0-8.377-6.781-15.158-15.163-15.158   s-15.159,6.781-15.159,15.158v60.658c0,8.378,6.777,15.163,15.159,15.163h60.653c8.382,0,15.163-6.785,15.163-15.163   C424.562,370.692,417.781,363.906,409.399,363.906z"/>
                    </g></svg>
                </div>
           
        </div>
    </div>
    <button  @click="updateEmployee">save</button>
</div>
    </div>
</template>

<script>

import axios from 'axios';

  export default {
    
        name:'profile',
     
        data() {
            return {
               edit: false,
                model: {
                    employee: {
                        id:'',
                        firstName:'',
                        middleName:'',
                        lastName:'',
                        avatar:'',
                        jobTitle:'',
                        phoneNumber: '',
                        email:'',
                    }
                }
            }
        },
        mounted() {
            this.employeeId = this.$route.params.id;
          
this.getEmployeeData(this.$route.params.id)
        },

        methods: {
     
          

            getEmployeeData(employeeId) {
                axios.get(`https://63e79c82ac3920ad5be0b369.mockapi.io/project/${employeeId}`)
                .then(res => {
                    this.model.employee = res.data
                })
            },

            updateEmployee() {

               

axios.put(`https://63e79c82ac3920ad5be0b369.mockapi.io/project/${this.employeeId}`, this.model.employee)
    .then(res => {
  
    alert('Карта обновлена')

  
 
})
.catch(function(error) {

    if(error.response) {

        if (error.response.status == 404) {
           alert('Ошибка 404. Not found')
        }

       
    } else if (error.request) {
        console.log(error.request); 
    } else {
        console.log('Error', error);
    }

})
}, 

deleteEmployee(employeeId) {
    if(confirm("Вы уверены что хотите удалить карту этого сотрудника?")) {
        axios.delete(`https://63e79c82ac3920ad5be0b369.mockapi.io/project/${this.employeeId}`)
        .then(res=> {
            alert("Карта сотрудника удалена")
        })
    }
}
        }
    }
</script>


<style scoped>

.form-control__label {
    font-size: 14px;
    color: #7d7d7d;
    margin-left: 10px;
}
.form-section {
    background-color: #e7ebec;
    margin-bottom: 20px;
    border-radius: 20px;
    width: 300px;
    padding: 10px 5px;
  
}

.form-section.edit {
    background-color: white;
    border: 2px solid #e7ebec;
}

.profile__title {
    text-transform: uppercase;
    color: #aaa;
    font-weight: normal;
}

.profile__img {
    border-radius: 20px;
    margin-bottom: 50px;
    width: 300px;
    height: 300px;
}
.input {
    font-size: 18px;
    border-radius: 20px;
    display: block;
    background-color:#e7ebec;
    border: none;
    margin-left: 10px;
 width: 95%;
 height: 100%;
  }

  .input.edit  {
    background-color: white;
  }
  
  .input:focus {
    outline: none;
  }
  
  
.profile__header {
    display: flex;
    align-items: center;
    margin: 50px 0;
}

.profile__line:after{
	content: '';
	background-color: rgb(175, 175, 175, .5);
	height: 2px;

	display: block;
}

.profile__info {
	float: left;
	width: 33.33333%;	
}




.profile__icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
}
.profile__wrapper {
    margin-top: 50px;
}



.profile__mini__img {
    border-radius: 50%;
}



</style>