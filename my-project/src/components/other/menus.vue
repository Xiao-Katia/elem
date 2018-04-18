<template>
	<div class="menu">
		<ul>
			<li v-for="data in menulist">
				<div class="top">
					<div v-if="data.restaurant.is_new" class="bander">
						<div class="new"><b>新店</b></div>
						<img :src="data.restaurant.image_path.slice(data.restaurant.image_path.length-3)==='png'?'https://fuss10.elemecdn.com'+'/'+ data.restaurant.image_path.slice(0,1) + '/' +data.restaurant.image_path.slice(1,3)+'/'+data.restaurant.image_path.slice(3)+ '.png':'https://fuss10.elemecdn.com'+'/'+ data.restaurant.image_path.slice(0,1) + '/' +data.restaurant.image_path.slice(1,3)+'/'+data.restaurant.image_path.slice(3)+ '.jpeg'"/>						
					</div>
					<div v-else class="bander">
						<img :src="data.restaurant.image_path.slice(data.restaurant.image_path.length-3)==='png'?'https://fuss10.elemecdn.com'+'/'+ data.restaurant.image_path.slice(0,1) + '/' +data.restaurant.image_path.slice(1,3)+'/'+data.restaurant.image_path.slice(3)+ '.png':'https://fuss10.elemecdn.com'+'/'+ data.restaurant.image_path.slice(0,1) + '/' +data.restaurant.image_path.slice(1,3)+'/'+data.restaurant.image_path.slice(3)+ '.jpeg'"/>						
					</div>
					<div class="right">
						<h3>{{data.restaurant.name}}</h3>
						<div class="view">
							<div class="img">
								<div class="tian-p-star">
									<div class="tian-p-star-left">
										<div class="tian-hui">
											<img :src="hui"/>
										</div>																
									<div class="tian-liang" :style="{'width':data.restaurant.rating/5*100 + '%'}">
									<img :src="liang"/>
									</div>
								</div>
								</div>
							</div>
							<span class="yue">{{data.restaurant.rating}}</span>
							<span>月销{{data.restaurant.recent_order_num}}单</span>
						</div>
						<div class="tale">
							<div class="left">
								<span>￥{{data.restaurant.float_minimum_order_amount}}起送</span>
								<span>{{data.restaurant.piecewise_agent_fee.tips}}</span>
							</div>
							<div class="leftright">
								<span>{{data.restaurant.distance}}m</span>
								<span>{{data.restaurant.order_lead_time}}分钟</span>
							</div>
						</div>
						
					</div>
				</div>
				
				<div class="bottom">
					<div v-if="data.restaurant.is_premium">
						<img src="//fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/">					
						<span :style="'color:'+data.restaurant.recommend.color">{{data.restaurant.recommend.reason}}</span>
					</div>
					<div v-for="datato in data.restaurant.activities"><span class="pic" :style="'background-color:#'+datato.icon_color">{{datato.icon_name}}</span><span>{{datato.description}}</span></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default {

		data(){
			return {
				menulist:[],
				hui:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
				liang:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
			}
		},
		mounted(){
			axios.get("/restapi/shopping/v3/restaurants?latitude=29.534893&longitude=106.489478&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5").then(res=>{
			 	this.menulist = res.data.items;
			 	console.log(res.data.items);
//			 	for (var i=0;i<res.data[0].entries.length;i++) {
//			 		console.log(res.data[0].entries[i].name);
//			 	}
			 })
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
	.menu{
		width: 100%;
		padding:0 0.2rem;		
	}
	.menu ul{
		width: 7.5rem;
	}
	.menu ul li{
		list-style: none;
		margin: 0.3rem 0;
		width: 100%;	
	}
	.menu span{
		color:#666;
		line-height: 0.28rem;
		font-size: 0.16rem;
	}
	.menu .top {
		width: 5.8rem;		
		display: flex;
	}
	.menu .top h3{
		font-size: 0.3rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		
	}
	.menu .top .bander>img{
		width: 1.3rem;
		height: 1.3rem;
	}
	.menu .tale{
		display: flex;
		justify-content: space-between;
	}
	/*.menu .right{
		float: right;
	}*/
	.menu .bottom{
		padding-left: 1.5rem;
	}
	.menu .top .view .yue{
		margin-left: 1.2rem;
	}
	.menu .top .img{
		position: absolute;		
		.tian-p-star{
			overflow:hidden;							
			.tian-liang{
				position: absolute; top: 0; left: 0;z-index: 2;overflow:hidden;
			}
		}
	}
	.menu .top .img img{
		width: 1.12rem;
		height: 0.2rem;
	}
	.menu .bottom  div{
		display: flex;
		padding: 0.1rem 0;
	}
	.menu .bottom  div img{
		width: 0.2rem;
		height: 0.2rem;
		margin-top: 0.01rem;
	}
	.menu .bottom .pic{
		display: block;
		line-height: 0.28rem;
		width: 0.28rem;
		height: 0.28rem;
		color:#fff;
		margin-right: 0.1rem;
	}
	.bander{
		  position: relative;
	}
	.bander .new{
		  position: absolute;
		  width:0.64rem;
		  height: 0.64rem;
		  top: 0;
		  left: 0;		  		  
		  background-image: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
	}
	.bander .new b{
		  display: block;
		  position: absolute;
		  width:0.64rem;
		  height: 0.64rem;
		  top: -0.05rem;
		  left: 0.05rem;		  
		 font-size: 0.1rem;
		  color: #fff;
		  background-color: transparent;
		  transform: rotate(-45deg);	 
		}
</style>