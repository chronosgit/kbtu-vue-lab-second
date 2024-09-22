<script setup>
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const props = defineProps({
		category: String,
	});

	const navigateTo = () => {
		router.push(`/topic/${props.category.toLowerCase()}`);
	};
</script>

<template>
	<div class="category-box" @click="navigateTo">
		<p class="category-name">
			{{ props.category }}
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
