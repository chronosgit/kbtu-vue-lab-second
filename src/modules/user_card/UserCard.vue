<script setup>
	import { computed, provide } from 'vue';
	import MetaData from './components/MetaData.vue';
	import getRelativeDateTime from '@/common/utils/getRelativeDateTime';

	// const { card } = defineProps(['card']);

	const card = {
		id: 1,
		personName: 'Alice Johnson',
		avatar: '/src/assets/images/avatars/gojo.webp',
		pubData: new Date(2024, 0, 15, 8, 30),
		rating: 5,
		commentary: 'Absolutely fantastic experience! Highly recommend.',
		topic: 'ADVENTURE',
	};

	const formattedDate = computed(() => getRelativeDateTime(card.pubData));

	provide('userCardContext', {
		personName: card.personName,
		avatar: card.avatar,
		dateTime: formattedDate,
	});
</script>

<template>
	<div class="card">
		<MetaData />
	</div>
</template>

<style scoped>
	.card {
		padding: 0.5rem;
		background-color: #5bb9cd;
		border-radius: 0.5rem;
	}

	.text {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 1px;
		color: white;
	}
</style>
