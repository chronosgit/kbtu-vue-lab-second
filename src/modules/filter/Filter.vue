<script setup>
	import { computed, useTemplateRef } from 'vue';
	import IconFilter from '@/common/components/IconFilter.vue';
	import IconCaretDown from '@/common/components/IconCaretDown.vue';
	import useClickAway from '@/common/composables/useClickAway';

	// emit filter change
	const props = defineProps({
		filters: Object,
		activeFilter: Object,
	});
	const emit = defineEmits(['filter-change']);

	const dropdownAnchor = useTemplateRef('dropdown-anchor');
	const uClickAway = useClickAway(dropdownAnchor);

	const dropDownComputedStyle = computed(() => ({
		maxHeight: uClickAway?.isElActive.value ? '10rem' : 0,
	}));

	const onFilterClick = (filter) => {
		uClickAway?.closeEl();

		emit('filter-change', filter);
	};
</script>

<template>
	<div ref="dropdown-anchor" class="filter-box" @click.stop="uClickAway.openEl">
		<div class="icon-wrapper">
			<IconFilter />
		</div>

		<p class="filter-item">
			{{ filters[props.activeFilter.value] }}
		</p>

		<div class="icon-wrapper">
			<IconCaretDown />
		</div>

		<!-- Absolute toggleable dropdown -->
		<div class="dropdown" :style="dropDownComputedStyle">
			<template v-for="(fName, fKey) in props.filters">
				<p class="filter-item dropdown-item" @click.stop="onFilterClick(fKey)">
					{{ fName }}
				</p>
			</template>
		</div>
	</div>
</template>

<style scoped>
	.filter-box {
		position: relative;
		padding: 0.2rem 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		background-color: #eefcf7;
		cursor: pointer;
	}

	.icon-wrapper {
		--max-size: 1.8rem;
		--min-size: 1.2rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
		min-width: var(--min-size);
		min-height: var(--min-size);
	}

	.filter-item,
	.dropdown-item {
		font-size: 2.2rem;
		font-weight: 900;
		letter-spacing: 2px;
		color: #1de390;
	}

	.filter-item {
		text-transform: uppercase;
		margin-right: 0.8rem;
	}

	.dropdown {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateY(100%);

		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;

		background-color: #eefcf7;
		transition: max-height 0.3s ease;
		overflow-y: auto;
	}

	.dropdown::-webkit-scrollbar {
		width: 0;
	}

	.dropdown-item {
		padding-inline: 1rem;
		cursor: pointer;
	}

	@media screen and (max-width: 640px) {
		.filter-box {
			gap: 0.5rem;
		}

		.filter-item {
			font-size: 1.2rem;
		}
	}
</style>
