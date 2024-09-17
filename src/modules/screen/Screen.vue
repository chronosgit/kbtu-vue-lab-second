<script setup>
	import { inject } from 'vue';
	import Filter from '@modules/filter/Filter.vue';
	import Date from './components/Date.vue';
	import Topic from './components/Topic.vue';
	import UserCards from '../user_cards/UserCards.vue';

	const filtersContext = inject('filtersContext');
	const categoriesContext = inject('categoriesContext');
	const usersContext = inject('usersContext');

	if (!filtersContext || !categoriesContext || !usersContext) {
		throw Error('Screen must consume necessary contexts');
	}

	const { filters, activeFilter, onFilterChange } = filtersContext;
	const { activeCategory } = categoriesContext;
	const { users } = usersContext;
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

				<Filter
					:filters
					:active-filter="activeFilter"
					@filter-change="onFilterChange"
				/>
			</div>

			<div class="user-cards-wrapper">
				<UserCards :users="users" />
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
		align-items: center;
		gap: 1rem;
	}
</style>
