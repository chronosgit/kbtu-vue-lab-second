<script setup>
	import { inject } from 'vue';
	import UserCards from '@modules/user_cards/UserCards.vue';
	import Filter from '@modules/filter/Filter.vue';
	import Date from './components/Date.vue';
	import Topic from './components/Topic.vue';
	import Navigator from './components/Navigator.vue';

	const filtersContext = inject('filtersContext');
	const categoriesContext = inject('categoriesContext');
	const usersContext = inject('usersContext');
	const paginationContext = inject('paginationContext');

	if (
		!filtersContext ||
		!categoriesContext ||
		!usersContext ||
		!paginationContext
	) {
		throw Error('Screen must consume necessary contexts');
	}

	const { filters, activeFilter, onFilterChange } = filtersContext;
	const { activeCategory } = categoriesContext;
	const { users, likeUser } = usersContext;
	const { totalPages, curPage, isNextPageExist, toNextPage } =
		paginationContext;
</script>

<template>
	<section class="screen">
		<main class="main">
			<div class="date-wrapper">
				<Date />
			</div>

			<div class="features">
				<!-- Make logical -->
				<Topic :topic="activeCategory" />

				<div class="right">
					<Filter
						:filters
						:active-filter="activeFilter"
						@filter-change="onFilterChange"
					/>

					<Navigator
						:cur-page="curPage"
						:total-pages="totalPages"
						:is-next-page-exist="isNextPageExist"
						@next-page="toNextPage"
					/>
				</div>
			</div>

			<div class="user-cards-wrapper">
				<UserCards :users :onUserLikeButtonClick="likeUser" />
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
		gap: 4rem;
	}
</style>
