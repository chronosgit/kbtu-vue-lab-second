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
		maxHeight: uClickAway.isElActive.value ? '10rem' : 0,
	}));
</script>

<template>
	<div ref="dropdown-anchor" class="filter-box" @click="uClickAway.openEl">
		<div class="icon-filter-wrapper">
			<IconFilter />
		</div>

		<p v-show="activeFilter" class="filter-item">
			{{ props.activeFilter?.value || 'NO FILTER' }}
		</p>

		<div class="icon-caret-down-wrapper">
			<IconCaretDown />
		</div>

		<!-- Absolute toggleable dropdown -->
		<div class="dropdown" :style="dropDownComputedStyle">
			<p
				v-for="(fName, fKey) in props.filters"
				class="filter-item dropdown-item"
				@click="emit('filter-change', fKey)"
			>
				{{ fName }}
			</p>
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

	.icon-filter-wrapper {
		--max-size: 1.8rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
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

	.icon-caret-down-wrapper {
		--max-size: 1.3rem;
		max-width: var(--max-size);
		max-height: var(--max-size);
	}

	.dropdown {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		transform: translateY(2.8rem);
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;
		background-color: #eefcf7;
		transition: all 0.3s ease;
		overflow-y: auto;
	}

	.dropdown::-webkit-scrollbar {
		width: 0;
	}

	.dropdown-item {
		padding-inline: 1rem;
		cursor: pointer;
	}
</style>
