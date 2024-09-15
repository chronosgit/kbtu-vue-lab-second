<script setup>
	import { computed } from 'vue';
	import getReadableDate from '@/common/utils/getReadableDate';

	const now = new Date();

	const readableDate = computed(() => {
		return getReadableDate(now);
	});
</script>

<template>
	<div class="date-box">
		<p class="date">{{ readableDate }}</p>
	</div>
</template>

<style scoped>
	.date-box {
		max-width: max-content;
		padding-inline: 1rem;
		background-color: #5bb9cd;
		box-shadow: 0 0 0.3rem 0.3rem #5bb9cd;
		border-radius: 0.5rem;
	}

	.date {
		font-size: 2.2rem;
		color: white;
	}
</style>
