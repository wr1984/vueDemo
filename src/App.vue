<template>
  <div id="app">
  	<nav>
	  	<div id="logo"></div>
  		<ul>
        <li><router-link :to="{ name: 'top' }">Top</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'products'}">Products</router-link></li>
        <li><router-link :to="{ name: 'projects'}">Projects</router-link></li>
        <li><router-link :to="{ name: 'clients'}">Clients</router-link></li>
        <li><router-link :to="{ name: 'recruitment'}">Recruitment</router-link></li>
        <li><router-link :to="{ name: 'contacts'}">Contacts</router-link></li>
      </ul>
      <div id="right">
      	<div id="encn"></div>
      	<div id="search"></div>
      </div>
  	</nav>
  	<router-view name='tree'></router-view>
  	<router-view name='space'></router-view>
  	<router-view name='particle'></router-view>
    <router-view></router-view>
  </div>
</template>
<script>
//import tm from './components/common/lib/TweenMax.min.js';
//console.log(TweenMax)
export default {
  name: 'app'
}
</script>

<style>
body::-webkit-scrollbar{
  display:none;
}
html,body{
	margin: 0;
	padding: 0;
	height: 100%;
	/*overflow-y:-Scroll;*/
	/*overflow-y:hidden;*/
	/*overflow-y: hidden;*/
}
#app {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	max-width: 1600px;
	padding-left: 4%;
	padding-right: 4%;
}
#logo{
	width: 10%;
	height: 60%;
	background-image: url(./assets/logo.png);
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: center;
}

#right{
	width: 10%;
	height: 100%;
	display: flex;
	flex-direction: row;
	/*justify-content: flex-end;*/
	align-content: center;
	/*background-color: yellow;*/
}
#encn{
	width: 50%;
	height: 100%;
	background-image: url(./assets/encn.png);
	background-size: 46%;
	background-repeat: no-repeat;
	background-position: right;
}
#search{
	width: 50%;
	height: 100%;
	background-image: url(./assets/SEARCH.png);
	background-size: 50%;
	background-repeat: no-repeat;
	background-position: right;
}
nav{
		display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 align-items: center;
	width: 100%;
	height: 80px;
	/*background-color: burlywood;*/

}
nav > ul{
	padding: 0;
	
	 display: flex;
	 flex-direction: row;
	 justify-content: center;
	 /*align-items: center;*/
	 list-style: none;
	 /*background-color: green;*/
}
nav>ul>li{
	padding-left: 10px;
	padding-right: 10px;
}
a,a:hover{
		text-decoration: none;
}

</style>
