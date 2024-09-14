<script setup>
	import { computed } from 'vue';

	const { contactType, contactValue } = defineProps([
		'contact-type',
		'contact-value',
	]);

	const contactMessage = computed(() => {
		return `${contactType}: `.toUpperCase() + `${contactValue}`;
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
