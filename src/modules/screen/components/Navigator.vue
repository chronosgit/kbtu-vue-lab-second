<script setup>
	import IconArrowRight from '@/common/components/IconArrowRight.vue';
	import { computed } from 'vue';

	const { totalPages, curPage, isNextPageExist, onNextPage } = defineProps([
		'totalPages',
		'curPage',
		'isNextPageExist',
		'onNextPage',
	]);

	const navigationInfo = computed(() => `${curPage}/${totalPages}`);

	const onArrowClick = () => {
		if (!isNextPageExist) return;

		onNextPage();
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
