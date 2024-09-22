<script setup>
	import { provide } from 'vue';
	import Heading from './components/Heading.vue';
	import Categories from './components/Categories.vue';
	import Contacts from './components/Contacts.vue';

	const props = defineProps({
		categories: Object,
		categoriesGradients: Object,
	});

	provide('categoriesCtx', {
		categories: props.categories,
		categoriesGradients: props.categoriesGradients,
	});
</script>

<template>
	<aside class="menu">
		<Heading />

		<div class="menu-content-box">
			<Categories />

			<div class="contacts_wrapper">
				<Contacts />
			</div>
		</div>
	</aside>
</template>

<style scoped>
	.menu {
		--full-size: 100%;

		width: var(--full-size);
		height: var(--full-size);
		padding: 0.5rem 0.8rem;
		display: grid;
		grid-template-rows: max-content 1fr;
		background-color: #c1ebf1;
	}

	.menu-content-box {
		margin-top: 1.5rem;
		padding-block: 0.6rem;
		background-color: white;
		border-radius: 0.5rem;
	}

	.contacts_wrapper {
		margin-top: 4rem;
		padding-inline: 1rem;
	}
</style>
