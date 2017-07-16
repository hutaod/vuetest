<template>
	<div id="HomeDetail" class="content-box">
		<backHeader title="主题"></backHeader>
		<div id="topic-container" v-show="show">
			<div class="topic-box" >
		      <h4 class="topic-title">{{resData.title}}</h4>
		      <div class="author-box">
		      	发布于{{new Date(resData.create_at).toLocaleString()}} <i class="topic-point"></i>
		      	 浏览{{resData.visit_count}}次
		      </div>
		    </div>
			<div class="markdown-body" v-html="resData.content">
				{{resData.content}}
			</div>
			<div class="replies_count">
				<b>{{resData.reply_count}}</b> "条回复"
			</div>
			<div class="replies_items">
				<mu-list>
					<template v-for="item in resData.replies">
						<mu-list-item>
							<div class="reply-author-info">
								<div class="rai-left">
									<img :src="item.author.avatar_url"/>
								</div>
								<div class="rai-info">
									{{item.author.loginname}} 发布于 ：{{item.create_at}}
									<!--<div class="dianzan">
										<template>
											<mu-icon value=":fa fa-thumbs-o-up"/>	
											<span class="">{{item.ups.length}}</span>
										</template>
										
									</div>-->
								</div>
							</div>
							<div v-html="item.content">
								{{item.content}}
							</div>
							
						</mu-list-item>
					</template>
				</mu-list>
			</div>
		</div>
	</div>
</template>

<script>
	import backHeader from '@/components/Common/back.vue';
	export default{
		data(){
				
			return {
				resData:{
					content:null,
					title:null,
					author:{
						loginname:null
					},
					create_at:null,
					top:null,
					visit_count:null,
					reply_count:null,
					replies:null,
					last_reply_at:null
				},
				show:false
			}
		},
		beforeCreate:function(){
			//console.log(222)
		},
		created:function(){
			var self = this;
			//console.log(12)
			var id = this.$route.params.id ? this.$route.params.id : localStorage.getItem("detailId");
			
			
			if(id){
				self.$http.get('https://cnodejs.org/api/v1/topic/'+id).then(response=>{
					//console.log(response)
					var datas = response.body.data;
					self.resData = datas;
					//self.content = datas.content;
					console.log(datas)
				})
			}
		},
		computed:{
			
		},
		components:{
			backHeader
		},
		updated:function(){
			this.show = true
		}
	}
</script>

<style>
	#topic-container{margin-top: 56px;}
	@media (min-width: 480px) {
		#topic-container{margin-top: 64px;}
	}
	.content-box {
	    position: relative;
	    width: 100%;
	    padding:15px;
	}
	.content-box .topic-box{
	    background-color: #fff;
	    line-height: 1.1;
	    
	}
	.content-box .topic-box .topic-title{
	    font-size: 18px;
	    font-weight: bolder;
	}
	.content-box .topic-box .author-box {
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	}
	.content-box .topic-box .author-box .author-avatar{
	    width: 40px;
	    height: 40px;
	    margin-right: 10px;
	    overflow: hidden;
	    border-radius: 50%;
	}
	.content-box .topic-box .topic-content{
	    padding: 15px;
	    margin-top: 15px;
	    border-bottom: 1px solid #ddd;
	}
	.markdown-body{
		border-top: 1px #ddd solid;
		margin-top: 25px;
	}
	.markdown-body>:last-child {
	    margin-bottom: 0!important;
	}
	
	.markdown-body>:first-child {
	    margin-top: 0!important;
	}
	.markdown-body * {
	    box-sizing: border-box;
	}
	.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
	    margin-top: 1em;
	    margin-bottom: 16px;
	    font-weight: 700;
	    line-height: 1.4;
	    
	}
	.markdown-body blockquote, .markdown-body dl, .markdown-body ol, .markdown-body p, .markdown-body pre, .markdown-body table, .markdown-body ul {
	    margin-top: 0;
	    margin-bottom: 16px;
	}
	.markdown-body h1 {
	    padding-bottom: .3em;
	    font-size: 2.25em;
	    line-height: 1.2;
	    border-bottom: 1px solid #eee;
	}
	.markdown-body h2 {
	    padding-bottom: .3em;
	    font-size: 1.75em;
	    line-height: 1.225;
	    border-bottom: 1px solid #eee;
	}
	.markdown-body ol, .markdown-body ul {
	    padding-left: 2em;
	}
	.markdown-body img {
	    max-width: 100%;
	    box-sizing: content-box;
	    background-color: #fff;
	    border: 0;
	}
	.markdown-body blockquote {
	    padding: 0 15px;
	    color: #777;
	    border-left: 4px solid #ddd;
	}
	.markdown-body a {
	    color: #4078c0;
	    text-decoration: none;
	    background-color: transparent;
	}
	.markdown-body table {
	    display: block;
	    width: 100%;
	    overflow: auto;
	    word-break: normal;
	    word-break: keep-all;
	    border-collapse: collapse;
    	border-spacing: 0;
	}
	thead {
	    display: table-header-group;
	    vertical-align: middle;
	    border-color: inherit;
	}
	.markdown-body table tr {
	    background-color: #fff;
	    border-top: 1px solid #ccc;
	}
	.markdown-body table td, .markdown-body table th {
	    padding: 6px 13px;
	    border: 1px solid #ddd;
	}
	.markdown-body table th {
	    font-weight: 700;
	}
	.topic-point{display:inline-block;width: 6px;height: 6px;background: #222222;border-radius: 3px;margin: 6px 5px 0px;}
	
	.replies_count{padding: 15px;}
	.replies_count b{color: #80bd01;border-bottom: 1px solid #ddd;}
	
	.reply-author-info{overflow: hidden}
	.rai-left{float: left;}
	.rai-left img{width: 40px;height: 40px;}
	.rai-info{margin-left: 50px;position: relative;}
	.rai-info .dianzan{position: absolute;right: 0px;top: 0px;}
</style>