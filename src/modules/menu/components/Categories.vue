<script setup>
	import Category from './Category.vue';
	import categories from '../utils/categories';
	import { categoriesGradients } from '../utils/categories';
</script>

<template>
	<div class="categories">
		<div v-for="c in categories">
			<Category
				:category="c"
				:style="{
					background: categoriesGradients[c],
				}"
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
