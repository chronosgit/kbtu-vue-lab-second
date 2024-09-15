<script setup>
	import { useTemplateRef, computed, provide } from 'vue';
	import Header from '@modules/header/Header.vue';
	import Menu from '@modules/menu/Menu.vue';
	import Screen from '@modules/screen/Screen.vue';
	import useFilters from './composables/useFilters';
	import useClickAway from '@/common/composables/useClickAway';
	import usePeople from './composables/usePeople';

	const menu = useTemplateRef('menu');

	const { isElActive, openEl } = useClickAway(menu);
	const { filters, activeFilter, onFilterChange } = useFilters();
	const { people } = usePeople();

	provide('openMenu', openEl);
	provide('filtersContext', {
		filters,
		activeFilter,
		onFilterChange,
	});
	provide('peopleContext', { people });

	const menuComputedStyle = computed(() => ({
		left: isElActive.value ? 0 : '-100%',
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

		<div class="screen-wrapper">
			<Screen />
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

	.screen-wrapper {
		margin-top: 1rem;
	}

	@media screen and (min-width: 1280px) {
		.menu-wrapper {
			--menu-width: 20%;
		}
	}
</style>
