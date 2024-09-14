<script setup>
	import { useTemplateRef, computed, provide } from 'vue';
	import Header from '../header/Header.vue';
	import Menu from '../menu/Menu.vue';
	import useMenu from '@/common/composables/useMenu';

	const menu = useTemplateRef('menu');

	const { isMenuActivated, openMenu } = useMenu(menu);

	provide('openMenu', openMenu);

	const menuComputedStyle = computed(() => ({
		left: isMenuActivated.value ? 0 : '-100%',
	}));
</script>

<template>
	<div class="home">
		<!-- toggleable absolute menu -->
		<div ref="menu" class="menu-wrapper" :style="menuComputedStyle">
			<Menu />
		</div>

		<div class="header-wrapper">
			<Header />
		</div>
	</div>
</template>

<style scoped>
	.menu-wrapper {
		--menu-width: 30%;

		position: absolute;
		width: var(--menu-width);
		top: 0;
		bottom: 0;
		transition: all 0.5s ease;
	}

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

	@media screen and (min-width: 1280px) {
		.menu-wrapper {
			--menu-width: 20%;
		}
	}
</style>
