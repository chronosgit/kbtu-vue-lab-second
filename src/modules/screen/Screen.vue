<script setup>
	import { inject } from 'vue';
	import Filter from '@modules/filter/Filter.vue';
	import Date from './components/Date.vue';
	import Topic from './components/Topic.vue';

	const filtersContext = inject('filtersContext');
	const categoriesContext = inject('categoriesContext');

	if (!filtersContext || !categoriesContext) {
		throw Error(
			'Screen must consume filtersContext and categoriesContext, so it can pass data to Filter component'
		);
	}

	const { filters, activeFilter, onFilterChange } = filtersContext;
	const { activeCategory } = categoriesContext;
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

	.main {
	}

	.date-wrapper {
		margin-bottom: 2.5rem;
		padding: 0.35rem;
	}

	.features {
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		gap: 1rem;
	}
</style>
