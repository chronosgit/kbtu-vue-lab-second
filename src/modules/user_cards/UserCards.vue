<script setup>
	import UserCard from '@modules/user_card/UserCard.vue';

	const props = defineProps({
		users: Object,
	});
</script>

<template>
	<div class="user-cards">
		<div v-for="u in props.users?.value" :key="u.id" class="card-wrapper">
			<UserCard :user="u" />
		</div>
	</div>
</template>

<style scoped>
	.user-cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		align-items: stretch;
	}
</style>
