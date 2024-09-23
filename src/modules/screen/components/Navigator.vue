<script setup>
	import { computed } from 'vue';
	import IconArrow from '@/common/components/IconArrow.vue';

	const props = defineProps({
		curPage: Object,
		totalPages: Object,
	});

	const emit = defineEmits(['page-next', 'page-prev']);

	const navigationInfo = computed(
		() => `${props.curPage.value}/${props.totalPages.value}`
	);

	const hasNextPage = computed(() => {
		return props.curPage.value + 1 <= props.totalPages.value;
	});

	const onArrowRightClick = () => {
		if (!hasNextPage.value) return;

		emit('page-next');
	};

	const onArrowLeftClick = () => {
		if (props.curPage.value - 1 <= 0) return;

		emit('page-prev');
	};
</script>

<template>
	<div class="navigator_box">
		<div class="arrows">
			<div class="icon-arrow-wrapper" @click="onArrowLeftClick">
				<IconArrow :is-right="false" />
			</div>

			<div class="icon-arrow-wrapper" @click="onArrowRightClick">
				<IconArrow />
			</div>
		</div>

		<p class="navigation-info">{{ navigationInfo }}</p>
	</div>
</template>

<style scoped>
	.navigator_box {
	}

	.arrows {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.icon-arrow-wrapper {
		--size: 5rem;
		width: var(--size);
		height: var(--size);
		cursor: pointer;
	}

	.navigation-info {
		font-family: 'Times New Roman', Times, serif;
		font-size: 2rem;
		font-style: italic;
		color: white;
		letter-spacing: 1px;
		text-align: center;
	}

	@media screen and (max-width: 640px) {
		.navigator_box {
			max-width: 5rem;
		}
	}
</style>
