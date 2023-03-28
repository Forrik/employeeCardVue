<template>
    <aside class="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left" id="show-side-navigation1">
        <div class="wrp__dashboard__logo">
			<img class="dashboard__logo" src="../img/logo.png" alt="">
		</div>
      
    
      
        <ul class="categories list-unstyled">
          <li class="dashboard__item">
            Workspace
           
           
          </li>
          <li class="dashboard__item">
            Tasks
           
           
          </li>
          <li class="dashboard__item">
           Events
           
           
          </li>
        
       
        </ul>
      </aside>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.dashboard__logo {
	height: 150px;
	width: 200px;
	pointer-events: none;
	margin: 0 auto;
}

.dashboard__item {
	color: #5C5858;
	font-size: 22px;
	cursor: pointer;
	font-weight: 600;
	
}

.dashboard__item:active {
	color: black;
	
}

.wrp__dashboard__logo:after{
	content: '';
	background-color: rgb(175, 175, 175, .5);
	height: 2px;

	display: block;
}
.sidebar {
    padding: 20px;
	background-color: #F5F5F5;
	width: 30vh;
	transition: all .3s ease-in-out;
	transform: translateX(0);
	z-index: 9999999;
    height: 100vh;
	position: fixed;
   	left: 0;
   
}

.sidebar .close-aside {
	position: absolute;
	top: 7px;
	right: 7px;
	cursor: pointer;
	color: #EEE;
}

.sidebar .sidebar-header {
	border-bottom: 1px solid #2a2b3c
}

.sidebar .sidebar-header h5 a {
	color:#D1D5DB;
}

.sidebar .sidebar-header p {
	color: #8a8a8a;
	font-size: .825rem;
}

.sidebar .search .form-control ~ i {
	color: #2b2f3a;
	right: 40px;
	top: 22px;
}

.sidebar > ul > li {
	padding: .7rem 1.75rem;
}

.sidebar ul > li > a {
	color:#9CA3AF;
	text-decoration: none;
}

/* Start numbers */
.sidebar ul > li > a > .num {
	line-height: 0;
	border-radius: 3px;
	font-size: 14px;
	padding: 0px 5px
}

.sidebar ul > li > i {
	font-size: 18px;
	margin-right: .7rem;
	color:  #6B7280;
}

.sidebar ul > li.has-dropdown > a:after {
	content: '\eb3a';
	font-family: unicons-line;
	font-size: 1rem;
	line-height: 1.8;
	float: right;
	color:  #6B7280;
	transition: all .3s ease-in-out;
}

.sidebar ul .opened > a:after {
	transform: rotate(-90deg);
}

/* Start dropdown menu */
.sidebar ul .sidebar-dropdown {
	padding-top: 10px;
	padding-left: 30px;
	display: none;
}
.sidebar ul .sidebar-dropdown.active {
	display: block;
}

.sidebar ul .sidebar-dropdown > li > a {
  font-size: .85rem;
	padding: .5rem 0;
	display: block;
}
/* End dropdown menu */

.show-sidebar {
	transform: translateX(-270px);
}

@media (max-width: 767px) {
	.sidebar ul > li {
		padding-top: 12px;
		padding-bottom: 12px;
	}

	.sidebar .search {
		padding: 10px 0 10px 30px
	}
}



</style>