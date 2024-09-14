<script setup>
	import Header from '../header/Header.vue';
</script>

<template>
	<div class="home">
		<div class="header-wrapper">
			<Header />
		</div>
	</div>
</template>

<style scoped>
	.home {
		max-width: 100%;
		min-height: 100vh;
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url(/src/assets/images/bg.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
	}

	.header-wrapper {
		padding-top: 0.4rem;
	}
</style>
