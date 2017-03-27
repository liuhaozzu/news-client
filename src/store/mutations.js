import getters from './getters'
const state={
	header:true,
	loading:false
};

const mutations={
	hideHeader(state){
		//alert('hideHeader');
		state.header=false;
	},
	showHeader(state){
		//alert(state.headShow);
		state.header=true;
        //alert(state.headShow);
	},
	showLoading(state){
		state.loading=true;
	},
    hideLoading(state){
		state.loading=false;
	}
};



export default{
	state,
	mutations,
	getters
}