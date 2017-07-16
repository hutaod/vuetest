<template>
	<div id="" class="demo-infinite-container">
		<mu-list>
			<template v-for="item in items">
				<mu-list-item @click = "detail(item.id)">
		      		<div class="list-item_left">
		      			<mu-badge v-if="item.top" content="置顶" secondary />
		      			<mu-badge v-else content="分享"/>
		      			<div>
		      				<img :src="item.author.avatar_url"/>
		      			</div>
		      			
		      		</div>
		      		<div class="list-item_right">
		      			<p class="title">{{item.title}}</p>
		      			<p>
		      				<span>{{item.author.loginname}}</span>
		      				<span class="item_count"><i style="color: #f44336;">{{item.reply_count}}</i> / {{item.visit_count}}</span>
		      			</p>
		      			<p>创建于：{{new Date(item.create_at).toLocaleString()}}</p>
		      		</div>
		      		
		    	</mu-list-item>
			</template>
		    
		    
  		</mu-list>
		{{getItems}}
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				items:null
			}
		},
		computed:{
			getItems(){
				//console.log()
				var self = this;
//				console.log(this.$store.state.navIsOpen);
				this.$http.get('https://cnodejs.org/api/v1/topics',{
					params:{
						tab:this.$store.state.homekey
					}
				}).then(response=>{
					//console.log(response)
					self.items = response.body.data;
					//console.log(self.items)
					this.$store.state.navOpen = false;
				})
	  		}
			
		},
		methods:{
			detail(id){
				localStorage.setItem("detailId",id);
				this.$router.push({ name: 'Detail', params: { id: id }})
			}
		},
		
		mounted() {
			
			var wh = window.innerHeight;
			var top_h = document.querySelector(".fix-header").offsetHeight;
			var home = document.querySelector(".demo-infinite-container");
			home.style.height = (wh-top_h)+"px";
			
		}
			
	}
</script>

<style>
	.list-item_left{float: left;width: 60px;height:80px;overflow: hidden;text-align: center;}
	
	.list-item_left img{width:60px;height: 60px;}
	.list-item_right{margin-left: 80px;}
	.list-item_right .title{white-space: nowrap;overflow:hidden;text-overflow:ellipsis;
		font-weight: bold;font-size: 16px;color: #222;
	}
	.list-item_right p{margin-top: 0px;margin-bottom: 10px;color: #777;position: relative;}
	.item_count{position: absolute;right: 0px;}
	.demo-infinite-container{
	  	overflow: auto;
	  	-webkit-overflow-scrolling: touch;
	  	border: 1px solid #d9d9d9;
	}
</style>