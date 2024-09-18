<script setup>
	import UserCard from '@modules/user_card/UserCard.vue';

	const { users, onUserLikeButtonClick } = defineProps([
		'users',
		'onUserLikeButtonClick',
	]);
</script>

<template>
	<div class="user-cards">
		<div v-for="u in users" class="card-wrapper">
			<UserCard :user="u" @user-like-button-click="onUserLikeButtonClick" />
		</div>
	</div>
</template>
