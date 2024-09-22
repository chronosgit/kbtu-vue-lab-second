<script setup>
	const props = defineProps({
		topic: Object,
	});
</script>

<template>
	<div class="topic-box">
		<p class="topic">{{ props.topic?.value }}</p>
	</div>
</template>

<style scoped>
	.topic-box {
		min-width: 20rem;
		max-width: 100%;
		padding-inline: 1rem;
		background-color: #5bb9cd;
		border-radius: 0.5rem;
	}

	.topic {
		font-size: 3rem;
		text-transform: uppercase;
		color: white;
	}
</style>
