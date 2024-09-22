<script setup>
	import IconArrowRight from '@/common/components/IconArrowRight.vue';
	import { computed } from 'vue';

	const props = defineProps({
		totalPages: Object,
		curPage: Object,
		isNextPageExist: Object,
		onNextPage: Function,
	});

	const navigationInfo = computed(
		() => `${props.curPage.value}/${props.totalPages.value}`
	);

	const onArrowClick = () => {
		if (!props.isNextPageExist) return;

		props.onNextPage();
	};
</script>

<template>
	<div class="">
		<div class="icon-arrow-right-wrapper" @click="onArrowClick">
			<IconArrowRight />
		</div>

		<p class="navigation-info">{{ navigationInfo }}</p>
	</div>
</template>

<style scoped>
	.icon-arrow-right-wrapper {
		--max-size: 5rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
		cursor: pointer;
	}

	.navigation-info {
		font-family: 'Times New Roman', Times, serif;
		font-size: 2rem;
		font-style: italic;
		color: white;
		letter-spacing: 1px;
	}
</style>
