import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);//注册

import axios from "axios";


const store = new Vuex.Store({

	state:{
		title:"xiaoying", //公用的状态
		comingsoonList:[]
	},


	actions:{
		getComingList(store){
			//action 可以异步， 也可以同步
			

			axios.get("/restapi/shopping/v1/alipay/content?type=0&tag=1&latitude=29.534893&longitude=106.489478&offset=0&limit=10&terminal=h5").then(res=>{
				//提交给mutation 改变状态
				console.log(res.data.items[0].foods);
				store.commit("changeComingsoonList",res.data.items);
			})
		}
	},
	mutations:{
		//只能同步
		changeMaizuoTitle:function(state,payload){
			console.log(payload);
			//改变状态
			state.title=payload;
		},

		changeComingsoonList:function(state,payload){
			state.comingsoonList = payload;
		}
	},
	
})

export default store;
