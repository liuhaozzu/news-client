<template>
	<div class="content">
		<banner-view></banner-view>
		<div class="newsList">
			<ul>
				<li v-for="(item, index) in arrList">
					<!--<a href="conText.html">
						<h2>{{index}},{{item.title}}</h2>
						<p>{{item.detail}}</p>
					</a>-->
					<router-link :to="'/article/'+item.id">
						<a href="conText.html">
							<h2>{{index}},{{item.title}}</h2>
							<p>{{item.detail}}</p>
						</a>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import BannerView from './Banner.vue'
	export default {
	    data(){
			return {
			    arrList:[]
			}
		},
	    components:{
	        BannerView
		},
		mounted(){
			this.fetchData();
		},
		methods:{
		    fetchData(){
		        var _this=this;
				this.$http.get('src/data/index.data').then(function (res) {
					console.log(res);
					_this.arrList=res.data;
					console.log(_this.arrList);
                }).catch(function (err) {
					console.log('home',err);
                });
			}
		}
	}
</script>
<style scoped>

</style>