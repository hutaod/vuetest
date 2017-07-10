<template>
	<mu-appbar title="Cnode社区" class="fix-header">
	  <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
	  <mu-icon-button icon="flight_takeoff" slot="right"/>
	</mu-appbar>
</template>

<script>
	export default {
	  
	  methods: {
	    toggle (flag) {
	      this.$emit('toggle',flag)
	    }
	  }
	}
</script>

<style>
	
</style>