<template>
	<mu-drawer :open="open" :docked="docked" @close="toggle()" id="main-left" >
		<div id="left-header" v-bind:style="{height:leftTop+'px'}">
			<div>
				<img src="../../assets/cnodejs_light.svg"/>
			</div>
			<p><router-link to="/login" class="text-white">请登录</router-link></p>
			
		</div>
		<div class="demo-refresh-container" id="left-nav" v-bind:style="{height:leftNavHeight+'px'}">
				<mu-list>
					<template  v-for="s in sorts">
				    	<mu-list-item :title="s.text" @click="showList(s.searchKey)">
					      	<mu-icon slot="left" :value="s.icon"/>
					    </mu-list-item>
				    </template>
				    <!--<mu-list-item title="精华">
				      	<mu-icon slot="left" value=":fa fa-thumbs-up"/>
				    </mu-list-item>
				    <mu-list-item title="分享">
				      	<mu-icon slot="left" value=":fa fa-share-alt"/>
				    </mu-list-item>
				    <mu-list-item title="问答">
				      	<mu-icon slot="left" value="live_help"/>
				    </mu-list-item>
				    <mu-list-item title="招聘">
				      	<mu-icon slot="left" value="assignment"/>
				    </mu-list-item>-->
				</mu-list>
				<mu-divider />
				<mu-list>
				    <mu-list-item title="消息">
				      	<mu-icon slot="left" value=":fa fa-bell"/>
				    </mu-list-item>
				    <mu-list-item title="设置">
				      	<mu-icon slot="left" value=":fa fa-cog"/>
				    </mu-list-item>
				    <mu-list-item title="关于">
				      	<mu-icon slot="left" value=":fa fa-info-circle"/>
				    </mu-list-item>
				   	
	    		</mu-list>
	    		
		</div>
      <!--<mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        
      </mu-list>-->
    </mu-drawer>
</template>

<script>
	
	export default {
	  data(){
	  	return {
	  		leftTop:150,
	  		sorts:[
		  		{
		  			text:'全部',
		  			icon:':fa fa-align-justify',
		  			searchKey:''
		  		},
		  		{
		  			text:'精华',
		  			icon:':fa fa-thumbs-up',
		  			searchKey:'good'
		  		},
		  		{
		  			text:'分享',
		  			icon:':fa fa-share-alt',
		  			searchKey:'share'
		  		},
		  		{
		  			text:'问答',
		  			icon:'live_help',
		  			searchKey:'ask'
		  		},
		  		{
		  			text:'招聘',
		  			icon:'assignment',
		  			searchKey:'job'
		  		}
	  		]
	  	}
	  },
	  props:{
	  	open:{
	  		type:Boolean
	  	},
	  	docked:{
	  		type:Boolean
	  	}
	  	
	  },
	  computed:{
	  	leftNavHeight:function(){
	  		var wh = window.innerHeight;
	  		return (wh-this.leftTop);
	  	}
	  },
	  methods: {
	    toggle (flag) {
	      this.$emit('toggle')
	    },
	    showList(ky){
	    	//console.log(this.$store.state.homekey,ky);
	    	this.$store.commit('setHomeKey',ky)
	    	this.$store.commit('changeNavIsOpen')
//	    	this.$emit('showList')
	    }
	  },
	  components:{
	  	
	  }
	}
</script>
	
<style>
	
	#left-header{background-color: crimson;top:0px;padding: 20px;}
	#left-header a{font-size: 18px;}
	#left-nav{overflow-y: auto;}
</style>