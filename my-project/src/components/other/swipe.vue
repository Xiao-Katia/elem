<template>
	<div class="nav">
		<ul>
			<li v-for="data in looplist">
				<img :src="data.image_hash.slice(data.image_hash.length-3)==='png'?'https://fuss10.elemecdn.com'+'/'+ data.image_hash.slice(0,1) + '/' +data.image_hash.slice(1,3)+'/'+data.image_hash.slice(3)+ '.png':'https://fuss10.elemecdn.com'+'/'+ data.image_hash.slice(0,1) + '/' +data.image_hash.slice(1,3)+'/'+data.image_hash.slice(3)+ '.jpeg'"/>
				<span>{{data.name}}</span>
			</li>
		</ul>
		<div class="list">
			
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default {

		data(){
			return {
				looplist:[]
			}
		},
		mounted(){
			axios.get("/restapi/shopping/openapi/entries?latitude=29.534893&longitude=106.489478&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template").then(res=>{
			 	this.looplist = res.data[0].entries;
//			 	console.log(res.data[0].entries);
//			 	for (var i=0;i<res.data[0].entries.length;i++) {
//			 		console.log(res.data[0].entries[i].name);
//			 	}
			 })
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
	.nav{
		width: 100%;		
	}
	ul{
		width: 7.5rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	ul li{
		list-style: none;
		width: 20%;	
		text-align: center;
	}
	.nav img{
		width: 0.9rem;
		
	}
	.nav span{
		font-size: 0.28rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list{
		width: 7.1rem;
		height: 2.2rem;
		margin: 0 auto;
		background: linear-gradient(to bottom, #fafafa , #f4f4f4); 
	}
</style>