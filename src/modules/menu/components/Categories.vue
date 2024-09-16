<script setup>
	import Category from './Category.vue';

	const { categories, categoriesGradients } = defineProps({
		categories: Object,
		categoriesGradients: Object,
	});
</script>

<template>
	<div class="categories">
		<div v-for="(c, i) in categories" :key="i">
			<Category :category="c" :style="{ background: categoriesGradients[i] }" />
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
