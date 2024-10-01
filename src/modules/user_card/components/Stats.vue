<script setup>
	import { computed } from 'vue';
	import IconYellowStar from '@/common/components/IconYellowStar.vue';
	import Progress from '@/common/components/Progress.vue';
	import IconWhiteStar from '@/common/components/IconWhiteStar.vue';

	const props = defineProps({
		rating: Number,
	});

	const numFullStars = computed(() => {
		if (Math.floor(props.rating) / 4 >= 5) {
			return 5;
		}

		return Math.floor(props.rating / 4);
	});
	const numEmptyStars = computed(() => {
		if (numFullStars.value >= 5) return 0;

		return Math.floor(4 - numFullStars.value);
	});
	const starFragment = computed(() => {
		if (props.rating < 4) return props.rating * 25;

		return (props.rating % 4) * 25;
	});

	console.log(numFullStars.value, numEmptyStars.value);
</script>

<template>
	<div class="stats">
		<p class="text">Rating</p>

		<div class="stars">
			<div v-for="_ in numFullStars" class="star-wrapper">
				<IconYellowStar />
			</div>

			<div v-if="numFullStars < 5" class="star-common">
				<Progress :percent="starFragment">
					<div class="star-wrapper star-common-yellow">
						<IconYellowStar />
					</div>
				</Progress>

				<Progress :percent="starFragment" :reverse="true">
					<div class="star-wrapper star-common-white">
						<IconWhiteStar />
					</div>
				</Progress>
			</div>

			<div
				v-if="numEmptyStars > 0"
				v-for="_ in numEmptyStars"
				class="star-wrapper"
			>
				<IconWhiteStar />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.star-common {
		width: 1.4rem;
		height: 1.4rem;
		position: relative;
	}

	.star-common * {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.star-common-yellow {
		z-index: 2;
	}

	.star-common-white {
		z-index: 3;
	}

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
