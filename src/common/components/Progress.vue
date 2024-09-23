<script setup>
	import { computed } from 'vue';

	const props = defineProps({ percent: Number });

	const style = computed(() => ({
		clipPath: `inset(0 ${100 - props.percent}% 0 0)`,
	}));
</script>

<template>
	<div :style>
		<slot></slot>
	</div>
</template>
