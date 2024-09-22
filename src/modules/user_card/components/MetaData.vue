<script setup>
	import { inject } from 'vue';
	import Creds from './Creds.vue';
	import Stats from './Stats.vue';

	const user = inject('userCtx');
	const dateTime = inject('dateTime');
</script>

<template>
	<div class="meta">
		<Creds :person-name="user?.personName" :date-time="dateTime" />

		<Stats :rating="user?.rating" />

		<div class="avatar-wrapper">
			<img :src="user?.avatar" alt="" />
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
