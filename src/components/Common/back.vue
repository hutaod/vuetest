<template>
	<mu-appbar :title="title" class="fix-header">
		  <mu-icon-button icon="arrow_back" slot="left" @click="backFn" />
		  <mu-icon-button icon="flight_takeoff" slot="right"/>
	</mu-appbar>
</template>

<script>
	export default{
		props:['title'],
		methods:{
			backFn(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>