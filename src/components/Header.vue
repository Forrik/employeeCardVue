<template>
    <div class="employee__header">
        <div>Сотрудники</div>
        <RouterLink to="/employees/create">+Добавить</RouterLink>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.employee__header {
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
}

.employee__header::after {
    content: '';
	background-color: rgb(175, 175, 175);
	height: 1px;

	display: block;
}
</style>