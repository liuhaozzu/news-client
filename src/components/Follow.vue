<template>
	<div class="content mt30">
		<div class="newsList">
			<ul>
				<li v-for="(item,index) in arrList">
					<a href="conText.html">
						<h2>{{index}}, {{item.title}}</h2>
						<p>{{item.detail}}</p>
					</a>
				</li>
				<ol>
					<li class="active"></li>
					<li></li>
					<li></li>
				</ol>
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
                this.$http.get('src/data/follow.data').then(function (res) {
                    console.log(res);
                    _this.arrList=res.data;
                    console.log(_this.arrList);
                }).catch(function (err) {
                    console.log('follow',err);
                });
            }
        }
	}
</script>
<style scoped>
	.mt30{
		margin-top:30px;
	}
</style>