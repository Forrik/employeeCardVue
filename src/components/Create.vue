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
                    <input v-model="model.employee.firstName" type="text">
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
                    <input v-model="model.employee.phoneNumber" type="text">
                </div>
                <div>
                    <label for="">Почта</label>
                    <input v-model="model.employee.email" type="text">
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

    export default {
        name:'create',
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
        methods: {
            saveEmployee() {
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
</script>

<style scoped>

</style>