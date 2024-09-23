<script setup>
	import arrowRightIcon from '@assets/images/arrow-right.png';

	const props = defineProps({
		isRight: {
			type: Boolean,
			default: true,
		},
	});

	const imgStyle = {
		transform: props.isRight ? '' : 'scaleX(-1)',
	};
</script>

<template>
	<img
		:src="arrowRightIcon"
		alt="arrow is pointing to the right"
		:style="imgStyle"
	/>
</template>
