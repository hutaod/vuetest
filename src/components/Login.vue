<template>
	<div id="Login">
		<div id="Login-form">
			<h2>登录</h2>
			<div class="form_goup">
				<mu-text-field hintText="用户名：" x-model="userInfo.username" fullWidth required errorColor/>
			</div>
			<div class="form_goup">
				<mu-text-field hintText="用户名：" type="password" x-model="userInfo.password" fullWidth/>
			</div>
			<p></p>
			<div class="form_goup">
				<mu-raised-button label="登录" type="submit" secondary class="demo-raised-button" v-on:click="login" fullWidth/>
			</div>
			<div id="form_goup">
				<router-link class="test-red toRegister" to="/register">注册</router-link>
				<router-link class="text-red forget-password" to="/forget">忘记密码？</router-link>
			</div>
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	
	export default {
		data:function(){
			return {
		      userInfo: {
		        username: '',
		        password: ''
		      },
		      loading: false,
		      submit_loading: false
		    };
		},
		methods: {
			login:function(){
				this.$router.push('/main/home')
			}
		}
	}
</script>

<style>
	#Login{margin-top: 100px;padding: 0 20px;}
	#Login-form{width: 100%;}
	#Login-form h2{text-align: center;}
	@media only screen and (min-width: 760px) {
		#Login-form{width: 420px;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);}
	}
	/*.form_goup{height: 50px;margin: 0px 10px;margin-bottom: 10px;}
	.form_goup input{width: 100%;height: 35px;border:0px;border-bottom:1px solid #bbb;text-indent: 15px;}
	input[type="submit"],button[type="submit"]{width: 100%;height: 100%;border: 0px;height: 40px;width: 100%;background:orangered;color:#eee ;margin-top: 15px;}*/
	.toRegister{float: left}
	.forget-password{float: right}
	a.text-red{margin-top: 10px;}
</style>