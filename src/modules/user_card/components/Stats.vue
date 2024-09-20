<script setup>
	const { rating } = defineProps(['rating']);
</script>

<template>
	<div class="stats">
		<p class="text">Rating</p>

		<p>{{ rating }}</p>
	</div>
</template>

<style scoped>
	.stats {
	}

	.text {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 1px;
		color: white;
	}
</style>
