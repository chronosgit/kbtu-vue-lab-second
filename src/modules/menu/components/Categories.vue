<script setup>
	import { inject } from 'vue';
	import Category from './Category.vue';

	const categoriesCtx = inject('categoriesCtx');
</script>

<template>
	<div class="categories">
		<div v-for="(c, i) in categoriesCtx.categories" :key="i">
			<Category
				:category="c"
				:style="{ background: categoriesCtx.categoriesGradients[i] }"
			/>
		</div>
	</div>
</template>

<style scoped>
	.categories {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
</style>
