<script setup>
	import { inject } from 'vue';

	const userCardContext = inject('userCardContext');

	if (!userCardContext) {
		throw new Error('MetaData must consume the userCardContext');
	}

	const { personName, dateTime } = userCardContext;
</script>

<template>
	<div class="creds">
		<p class="text">{{ personName }}</p>

		<p class="text">{{ dateTime }}</p>
	</div>
</template>

<style scoped>
	.creds {
		padding: 0.5rem;
		display: grid;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
		background-color: #73c3d3;
		border-radius: 0.5rem;
	}

	.text {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 1px;
		color: white;
	}
</style>
