<script setup>
	import UserCards from '@modules/user_cards/UserCards.vue';
	import Filter from '@modules/filter/Filter.vue';
	import Date from './components/Date.vue';
	import Topic from './components/Topic.vue';
	import Navigator from './components/Navigator.vue';

	const props = defineProps({
		activeCategory: Object,
		filters: Object,
		activeFilter: Object,
		users: Object,
		curPage: Object,
		totalPages: Object,
	});

	const emit = defineEmits([
		'filter-change',
		'user-like',
		'page-next',
		'page-prev',
	]);

	const onUserLike = (userId) => emit('user-like', userId);
	const onFilterChange = (filter) => emit('filter-change', filter);
	const onPageNext = () => emit('page-next');
	const onPagePrev = () => emit('page-prev');
</script>

<template>
	<section class="screen">
		<main class="main">
			<div class="date-wrapper">
				<Date />
			</div>

			<div class="features">
				<Topic :topic="props.activeCategory" />

				<div class="right">
					<Filter
						:filters="props.filters"
						:active-filter="props.activeFilter"
						@filter-change="onFilterChange"
					/>

					<Navigator
						:cur-page="props.curPage"
						:total-pages="props.totalPages"
						@page-next="onPageNext"
						@page-prev="onPagePrev"
					/>
				</div>
			</div>

			<div class="user-cards-wrapper">
				<UserCards :users="props.users" @user-like="onUserLike" />
			</div>
		</main>
	</section>
</template>

<style scoped>
	.screen {
		margin: 0 auto;
		padding: 1rem;
		width: 90vw;
		background: linear-gradient(
			rgba(255, 255, 255, 0.918),
			rgba(242, 243, 243, 0.658)
		);
	}

	.date-wrapper {
		margin-bottom: 2.5rem;
		padding: 0.35rem;
	}

	.features {
		margin-bottom: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.features .right {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
</style>
