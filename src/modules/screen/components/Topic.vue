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
		max-width: max-content;
		min-width: 20rem;
		padding-inline: 1rem;
		background-color: #5bb9cd;
		border-radius: 0.5rem;
	}

	.topic {
		font-size: 3rem;
		text-transform: uppercase;
		color: white;
		text-align: center;
	}

	@media screen and (max-width: 1024px) {
		.topic-box {
			min-width: 0;
		}
	}

	@media screen and (max-width: 768px) {
		.topic {
			font-size: 2rem;
		}
	}

	@media screen and (max-width: 480px) {
		.topic {
			font-size: 1.2rem;
		}
	}
</style>
