<script setup>
	import { useTemplateRef, computed, provide } from 'vue';
	import Header from '@modules/header/Header.vue';
	import Menu from '@modules/menu/Menu.vue';
	import Screen from '@modules/screen/Screen.vue';
	import useClickAway from '@/common/composables/useClickAway';
	import useCategories from '@/common/composables/useCategories';
	import useUsers from '@/common/composables/useUsers';
	import useFilters from '@/common/composables/useFilters';

	const menu = useTemplateRef('menu');
	const uClickAway = useClickAway(menu);

	const uCategories = useCategories();
	const uFilters = useFilters();

	const uUsers = useUsers(uCategories?.activeCategory, uFilters?.activeFilter);
	// provide('paginationCtx', {
	// 	totalPages: usersCom?.totalPages,
	// 	curPage: usersCom?.curPage,
	// 	isNextPageExist: usersCom?.isNextPageExist,
	// 	toNextPage: usersCom?.toNextPage,
	// });

	const menuComputedStyle = computed(() => ({
		left: uClickAway?.isElActive?.value ? 0 : '-100%',
	}));
</script>

<template>
	<div class="home">
		<!-- toggleable absolute menu -->
		<div ref="menu" class="menu-wrapper" :style="menuComputedStyle">
			<Menu
				:categories="uCategories?.possibleCategories"
				:categories-gradients="uCategories?.categoriesGradients"
			/>
		</div>

		<div class="header-wrapper">
			<Header @menu-open="uClickAway?.openEl" />
		</div>

		<div class="screen-wrapper">
			<Screen
				:active-category="uCategories?.activeCategory"
				:filters="uFilters?.possibleFilters"
				:active-filter="uFilters?.activeFilter"
				:users="uUsers?.users"
				@filter-change="uFilters?.onFilterChange"
				@user-like="uUsers?.likeUser"
			/>
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
