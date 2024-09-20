<script setup>
	import { inject } from 'vue';
	import Creds from './Creds.vue';
	import Stats from './Stats.vue';

	const userCardContext = inject('userCardContext');

	if (!userCardContext) {
		throw new Error('MetaData must consume the userCardContext');
	}

	const { avatar, rating, personName, dateTime } = userCardContext;
</script>

<template>
	<div class="meta">
		<Creds :date-time :person-name />

		<Stats :rating />

		<div class="avatar-wrapper">
			<img :src="avatar" alt="" />
		</div>
	</div>
</template>

<style scoped>
	.meta {
		display: flex;
		justify-content: space-between;
	}

	.text {
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 1px;
		color: white;
	}

	.avatar-wrapper {
		width: 100%;
		max-width: 5rem;
		max-height: 10rem;
	}
</style>
