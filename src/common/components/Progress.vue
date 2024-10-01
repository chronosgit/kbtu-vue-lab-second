<script setup>
	import { computed } from 'vue';

	const props = defineProps({ percent: Number, reverse: Boolean });

	const style = computed(() => ({
		clipPath: props.reverse
			? 'inset(${100 - props.percent}% 0 0 0)'
			: `inset(0 ${100 - props.percent}% 0 0)`,
	}));
</script>

<template>
	<div :style>
		<slot></slot>
	</div>
</template>
