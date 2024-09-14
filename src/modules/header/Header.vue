<script setup>
	import IconBurger from '@/common/components/IconBurger.vue';
	import IconPerson from '@/common/components/IconPerson.vue';
	import Banner from './components/Banner.vue';
</script>

<template>
	<section class="header">
		<div class="icon-burger-wrapper" @click="console.log('burger click')">
			<IconBurger />
		</div>

		<Banner />

		<div class="icon-person-wrapper">
			<IconPerson />
		</div>
	</section>
</template>

<style scoped>
	.header {
		--max-icon-size: 3rem;

		padding: 0.3rem;
		display: grid;
		grid-template-columns: var(--max-icon-size) 1fr var(--max-icon-size);
		align-items: center;
		gap: 2rem;
		background-color: rgba(243, 246, 222, 0.5);
	}

	.icon-burger-wrapper {
		max-width: var(--max-icon-size);
		max-height: var(--max-icon-size);
		cursor: pointer;
	}
</style>
