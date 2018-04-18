import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);//注册

import axios from "axios";

const store = new Vuex.Store({

	state:{
		title:"https://fuss10.elemecdn.com/", //公用的状态
		comingsoonList:[]
	},


	actions:{
		getComingList(store){
			//action 可以异步， 也可以同步

			axios.get("/restapi/shopping/v3/restaurants?latitude=29.534893&longitude=106.489478&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5").then(res=>{
				//提交给mutation 改变状态
				console.log(res.data.items);
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

	getters:{

		getHomeComingList(state){
			return state.comingsoonList.slice(0,3)
		}
	}

})

export default store;
