<script setup>
	import { computed } from 'vue';

	const props = defineProps({
		contactType: String,
		contactValue: String,
	});

	const contactMessage = computed(() => {
		return `${props.contactType}: `.toUpperCase() + `${props.contactValue}`;
	});
</script>

<template>
	<p class="contact">{{ contactMessage }}</p>
</template>

<style scoped>
	.contact {
		font-size: 1.5rem;
		color: white;
	}
</style>
