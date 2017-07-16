<template>
	<div id="">
		<top v-on:toggle = "toggle"></top>
		<left v-on:toggle = "toggle" :open="open" :docked="docked"></left>
		<div id="main">
			<router-view></router-view>
		</div>
		{{changeOpen}}
	</div>
</template>

<script>
	import Vue from 'vue';
	import Router from 'vue-router'
	import top from '@/components/Share/Top';
	import left from '@/components/Share/Left';
	export default{
		data () {
		    return {
		      open: false,
		      docked: true
		    }
		},
		components:{
			top,
			left
		},
	  	methods: {
	    	toggle (flag) {
	    		
	    		this.open = !this.open;
		      	this.docked = !flag;
		      	
	    	}
	  	},
	  	computed:{
	  		changeOpen(){
	  			this.open = this.$store.state.navIsOpen;
	  		}
	  	},
	  	mounted() {
	  		//this.open = this.$store.state.navOpen;
	  		
	  		//console.log(this.$store.state.navOpen=true);
	  		//console.log(this.$store.state.navOpen);
	  	}
	}
	
</script>

<style>
	#main{margin-top: 56px;}
	@media (min-width: 480px) {
		#main{margin-top: 64px;}
	}
</style>