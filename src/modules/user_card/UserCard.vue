<script setup>
	import getReadableDate from '@/common/utils/getReadableDate';
	import { computed } from 'vue';

	// const { card } = defineProps(['card']);

	// temp
	const card = {
		id: 1,
		personName: 'Alice Johnson',
		avatar: '/src/assets/images/avatars/gojo.webp',
		pubData: new Date(2024, 0, 15, 8, 30),
		rating: 5,
		commentary: 'Absolutely fantastic experience! Highly recommend.',
		topic: 'ADVENTURE',
	};

	const formattedDate = computed(() => getReadableDate(card.pubData));
</script>

<template>
	<div class="card">
		<div class="meta">
			<div class="creds">
				<p class="text">{{ card.personName }}</p>

				<p class="text">{{ formattedDate }}</p>
			</div>

			<div class="meta_col_2">
				<div class="stats">
					<p class="text">Rating</p>

					<!-- stars -->
				</div>

				<div class="avatar-wrapper">
					<img :src="card.avatar" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.card {
		padding: 0.5rem;
		background-color: #5bb9cd;
		border-radius: 0.5rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
	}

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

	.meta_col_2 {
		display: flex;
		gap: 1rem;
	}

	.stats {
	}

	.avatar-wrapper {
		width: 100%;
		max-width: 5rem;
		max-height: 10rem;
	}
</style>
