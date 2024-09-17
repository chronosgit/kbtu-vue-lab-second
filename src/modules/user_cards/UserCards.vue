<script setup>
	import UserCard from '@modules/user_card/UserCard.vue';

	const { users } = defineProps(['users']);
</script>

<template>
	<div class="user-cards">
		<!-- <div v-for="u in users" class="card-wrapper">
			<UserCard :card="u" />
		</div> -->

		<UserCard :card="null" />
	</div>
</template>
