<script setup>
	import { computed } from 'vue';

	const { category } = defineProps(['category']);

	const categoryValidText = computed(() => {
		return category.replace('_', ' ');
	});
</script>

<template>
	<div class="category-box">
		<p class="category-name">
			{{ categoryValidText }}
		</p>
	</div>
</template>

<style scoped>
	.category-box {
		padding: 0.5rem 0.2rem;
		text-align: center;
	}

	.category-name {
		font-size: 1.8rem;
		font-weight: 600;
		color: white;
	}
</style>
