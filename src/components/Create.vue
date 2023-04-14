<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Add Employee</h4>
            </div>
            <div class="card-body">
                <div>
                    <label for="">id</label>
                    <input v-model="model.employee.id" type="text">
                </div>
                <div>
                    <label for="">Имя</label>
                    <input v-model.trim="model.employee.firstName" @input="setTouched('firstName')" :class="v$.model.employee.firstName.$error?'input-error':''" type="text">
                    <div v-for="error of v$.model.employee.firstName.$errors" :key="error.$uid" class="input-error" style="color: red;">{{error.$message}}</div>
                </div>
                <div>
                    <label for="">Фамилия</label>
                    <input v-model="model.employee.middleName" type="text">
                </div>
                <div>
                    <label for="">Отчество</label>
                    <input v-model="model.employee.lastName" type="text">
                </div>
                <div>
                    <label for="">Фото</label>
                    <input v-model="model.employee.avatar" type="text">
                </div>
                <div>
                    <label for="">Должность</label>
                    <input v-model="model.employee.jobTitle" type="text">
                </div>
                <div>
                    <label for="">Номер</label>
                    <input v-model="model.employee.phoneNumber" @input="setTouched('phoneNumber')" type="text">
                    <div style="color: red;" v-for="error of v$.model.employee.phoneNumber.$errors" :key="error.$uid" class="input-error">{{error.$message}}</div>
                </div>
                <div>
                    <label for="">Почта</label>
                    <input v-model="model.employee.email"  @input="setTouched('email')" :class="v$.model.employee.email.$error?'input-error':''"  type="text">
                    <div style="color: red;" v-for="error of v$.model.employee.email.$errors" :key="error.$uid" class="input-error">{{error.$message}}</div>
                </div>
                <div>
                    <label for="">Номер приказа</label>
                    <input v-model="model.employee.numberOrder" type="text">
                </div>
                <div>
                    <label for="">Дата начала</label>
                    <input v-model="model.employee.firstDate" type="text">
                </div>
                <div>
                    <label for="">Дата окончания</label>
                    <input v-model="model.employee.lastDate" type="text">
                </div>
                <div>
                    <button type="button" @click="saveEmployee" >Add employee</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required, email, sameAs, between, minValue, alpha, numeric, helpers } from '@vuelidate/validators';
    export default {
        name:'create',
        setup() {
            return {v$: useVuelidate()}
        },
        data() {
            return {
               
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

        validations() {
            return {
                model: {
                    employee: {
                       id:{},
                       firstName:{
                        required,
                        alpha:helpers.withMessage('цифры в имени', alpha)
                    },
                       middleName:{},
                       lastName:{},
                       avatar:{},
                       jobTitle:{},
                       phoneNumber:{required, numeric},
                       email:{required, email},
                    }
                }
            }
        },
        methods: {

            setTouched(theModel) {
                if (theModel == 'email' || theModel == 'all') {this.v$.model.employee.email.$touch()}
                if (theModel == 'firstName' || theModel == 'all') {this.v$.model.employee.firstName.$touch()}
            },

           async onSubmit(event) {
            event.preventDefault();
            this.setTouched('all');
            if (!this.v$.$invalid)
            {
                alert('all good')
            }
           },
            saveEmployee(event) {
              event.preventDefault();
              this.setTouched('all');
              if (!this.v$.$invalid) {
                axios.post('https://63e79c82ac3920ad5be0b369.mockapi.io/project?', this.model.employee).then(res => {
                    
                    
                    this.model.employee ={
                         id:'',
                         firstName:'',
                         middleName:'',
                         lastName:'',
                         avatar:'',
                         jobTitle:'',
                         phoneNumber: '',
                         email:'',
                    }
                 })
                     .catch(function(error) {
 
                     if(error.response) {
 
                      console.log(error.status)
                     
                     } else if (error.request) {
                         console.log(error.request); 
                     } else {
                         console.log('Error', error.message);
                     }
 
                     })
              }
                    }
        }
    }
</script>

<style scoped>

</style>