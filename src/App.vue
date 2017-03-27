<template>
	<div id="app">
		<loading v-show="loading"></loading>
		<nav-view v-if="headerShow"></nav-view>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<footer-view></footer-view>
	</div>
</template>
<script>
	import NavView from './components/Nav.vue'
	import FooterView from './components/Footer.vue'
	import {mapGetters,mapActions} from 'vuex'

	export default {
	    computed:mapGetters([
	       'headerShow',
			'loading'
		]),
	    components:{
	        NavView,
			FooterView
		},
		watch:{
	        $route(to, from){
                //var _this=this;
				//alert('1111111');
				//console.log(to);
				//console.log(from);
				if(to.path=='/user-info'){
				    this.$store.dispatch('hideHeader');
				}else {
                    this.$store.dispatch('showHeader');
				}
			}
		}

	}

</script>
<style>
	@import "./assets/css/index.css";
</style>