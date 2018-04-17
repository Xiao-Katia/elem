<template>
 <div>
			comingsoon	
			<ul>
				<li v-for="data in comingsoonList">
					<!-- <img :src="data.foods.img"/> -->
					<h3>
						{{data.description}}
					</h3>
					<p>{{data.description}}</p>
				</li>	
			</ul>	
	</div>
</template>

<script>
import {mapState} from "vuex";
	export default {

		data(){
			return {
				
			}
		},

		mounted(){
			if(this.$store.state.comingsoonList.length==0){
				//进行action 请求数据
				this.$store.dispatch("getComingList");
			}
		},

		computed:{
			// datalist(){
			// 	return this.$store.state.comingsoonList
			// }
			...mapState(["comingsoonList"])
		}
	}
</script>

<style scoped>

</style>
