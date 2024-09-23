<script setup>
	import UserCard from '@modules/user_card/UserCard.vue';

	const props = defineProps({
		users: Object,
	});

	const emit = defineEmits(['user-like']);

	const onUserLike = (userId) => emit('user-like', userId);
</script>

<template>
	<div class="user-cards">
		<div v-for="u in props.users?.value" :key="u.id" class="card-wrapper">
			<UserCard :user="u" @user-like="onUserLike" />
		</div>
	</div>
</template>

<style scoped>
	.user-cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	@media screen and (max-width: 1024px) {
		.user-cards {
			grid-template-columns: 1fr;
		}
	}
</style>
