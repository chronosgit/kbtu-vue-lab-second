<script setup>
	import Contact from './Contact.vue';
	import contacts from '../utils/contacts';
</script>

<template>
	<div class="contacts-box">
		<p class="contacts-heading">CONTACTS</p>

		<div class="contacts-list">
			<div v-for="(value, key) in contacts">
				<Contact :contact-type="key" :contact-value="value" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.contacts-box {
		padding: 0.6rem;
		background: linear-gradient(#abef8d, #47c432);
		border-radius: 0.5rem;
	}

	.contacts-heading {
		margin-bottom: 2rem; /* possible change? */
		text-align: center;
		font-size: 1.8rem;
		color: white;
	}

	.contacts-list {
		display: grid;
		gap: 1rem;
	}
</style>
