export default{
	hideHeader:({commit})=>{
		//alert('hideHeader');
		commit('hideHeader');
	},
	showHeader:({commit})=>{
		//alert('showHeader from action');
		commit('showHeader');
	},
	showLoading:({commit})=>{
		commit('showLoading');
	},
    hideLoading:({commit})=>{
		commit('hideLoading');
	}
}
