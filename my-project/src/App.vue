<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body,h1,h2,h3,h5,p,ul,li,div,header{
	margin: 0;
	padding: 0;
}
img{
	display: inline-block;
}
a{
	text-decoration: none;
}
html{
	width: 100%;
}
body{
	font-size: 20px;
}
#app {
	width: 100%;
}
</style>
