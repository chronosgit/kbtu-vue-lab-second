<script setup>
	const props = defineProps({
		badgeText: String,
		badgeStyle: Object,
	});
</script>

<template>
	<div class="container">
		<slot></slot>

		<div class="badge" :style="props.badgeStyle">
			<p class="badge-text">{{ props.badgeText }}</p>
		</div>
	</div>
</template>

<style scoped>
	.container {
		position: relative;
	}

	.badge {
		position: absolute;
		right: 0;
		bottom: 0;
		border-radius: 100%;
	}
</style>
