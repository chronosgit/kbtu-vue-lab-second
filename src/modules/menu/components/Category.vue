<script setup>
	import { computed } from 'vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const { category } = defineProps(['category']);

	const navigateTo = () => {
		router.push(`/topic/${category.toLowerCase()}`);
	};
</script>

<template>
	<div class="category-box" @click="navigateTo">
		<p class="category-name">
			{{ category }}
		</p>
	</div>
</template>

<style scoped>
	.category-box {
		padding: 0.5rem 0.2rem;
		text-align: center;
		cursor: pointer;
	}

	.category-name {
		font-size: 1.8rem;
		font-weight: 600;
		color: white;
	}
</style>
