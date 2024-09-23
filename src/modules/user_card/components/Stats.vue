<script setup>
	import { computed } from 'vue';
	import IconYellowStar from '@/common/components/IconYellowStar.vue';
	import ItemWithBadge from '@/common/components/ItemWithBadge.vue';
	import Progress from '@/common/components/Progress.vue';

	const props = defineProps({
		rating: Number,
	});

	const numFullStars = computed(() => Math.floor(props.rating / 4));
	const starFragment = computed(() => {
		if (props.rating < 4) return props.rating * 25;

		return (props.rating % 4) * 25;
	});

	const badgeCustomStyle = {
		padding: '0.3rem',
		fontSize: '1rem',
		fontWeight: '900',
		lineHeight: '0.7rem',
		color: 'black',
		backgroundColor: '#ffe100',
		border: '2px solid #5bb9cd',
		transform: 'translate(1rem, 0.5rem)',
	};
</script>

<template>
	<div class="stats">
		<p class="text">Rating</p>

		<div class="stars">
			<template v-if="numFullStars >= 10">
				<ItemWithBadge
					:badge-text="String(numFullStars)"
					:badge-style="badgeCustomStyle"
				>
					<div class="star-wrapper">
						<IconYellowStar />
					</div>
				</ItemWithBadge>
			</template>

			<template v-else>
				<div v-for="_ in numFullStars" class="star-wrapper">
					<IconYellowStar />
				</div>

				<Progress :percent="starFragment">
					<div class="star-wrapper">
						<IconYellowStar />
					</div>
				</Progress>
			</template>
		</div>
	</div>
</template>

<style scoped>
	.stats {
		width: 100%;
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
		max-width: 8rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.2rem;
	}

	.star-wrapper {
		--max-size: 1.4rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
	}
</style>
