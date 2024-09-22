<script setup>
	import { computed, provide } from 'vue';
	import MetaData from './components/MetaData.vue';
	import getRelativeDateTime from '@/common/utils/getRelativeDateTime';

	const props = defineProps({
		user: Object,
	});

	const formattedDate = computed(() =>
		getRelativeDateTime(props.user?.pubData)
	);

	provide('userCtx', props.user);
	provide('dateTime', formattedDate);
</script>

<template>
	<div class="card">
		<MetaData />

		<p class="text commentary">{{ props.user?.commentary }}</p>

		<button class="text btn-like" @click="console.log('Like')">Like</button>
	</div>
</template>

<style scoped>
	.card {
		padding: 0.5rem;
		display: grid;
		background-color: #5bb9cd;
		border-radius: 0.5rem;
	}

	.text {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 1px;
		color: white;
	}

	.commentary {
		padding-inline: 0.5rem;
		margin-top: 0.5rem;
	}

	.btn-like {
		max-width: max-content;
		padding: 0.2rem 1rem;
		justify-self: flex-end;
		font-family: inherit;
		text-transform: uppercase;
		background-color: #43ef27;
		border: none;
		border-radius: 0.5rem;
	}
</style>
