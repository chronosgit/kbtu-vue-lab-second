<script setup>
	const props = defineProps({
		personName: String,
		dateTime: String,
	});
</script>

<template>
	<div class="creds">
		<p class="text">{{ props.personName }}</p>

		<p class="text">{{ props.dateTime }}</p>
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
