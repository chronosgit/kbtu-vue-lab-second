<script setup>
	import { computed } from 'vue';
	// import IconYellowStar from '@/common/components/IconYellowStar.vue';
	// import IconEmptyStar from '@/common/components/IconEmptyStar.vue';

	const props = defineProps({
		rating: Number,
	});

	// const numOfEmptyStars = computed(() => 5 - props.rating);
</script>

<template>
	<div class="stats">
		<p class="text">Rating</p>

		<!-- Temporary -->
		<p class="text">{{ props.rating }}</p>

		<!-- <div class="stars">
			<template v-for="_ in props.rating">
				<div class="star-wrapper">
					<IconYellowStar />
				</div>
			</template>

			<template v-for="_ in numOfEmptyStars">
				<div class="star-wrapper">
					<IconEmptyStar />
				</div>
			</template>
		</div> -->
	</div>
</template>

<style scoped>
	.stats {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.text {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 1px;
		color: white;
	}

	.stars {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.star-wrapper {
		--max-size: 1.5rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
	}
</style>
