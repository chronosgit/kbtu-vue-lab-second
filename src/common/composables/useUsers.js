import { ref, watch } from 'vue';
import { filter, orderBy } from 'lodash';
import mockUsers from '@common/utils/mockUsers';

const useUsers = (activeCategory, activeFilter) => {
	// vertical to low pipeline; the lowest one is returned as 'users'
	const categorizedUsers = ref([]);
	const filteredUsers = ref([]);

	watch(
		activeCategory,
		(category) => {
			const filteredAllUsers = filter(mockUsers, (u) => {
				return u.topic.toLowerCase() === category.toLowerCase();
			});

			categorizedUsers.value = filteredAllUsers;
		},
		{ immediate: true }
	);

	const filterByTime = (users) => {
		const filteredUsers = orderBy(users, [(u) => u.pubData], ['desc']);

		return filteredUsers;
	};

	const filterByRating = (users) => {
		const filteredUsers = orderBy(users, [(u) => u.rating], ['desc']);

		return filteredUsers;
	};

	const likeUser = (userId) => {
		const likedUser = filteredUsers.value.find((u) => u.id === userId);

		if (likedUser == null) {
			console.error(`User with id: ${userId} doesn't exist`);
			return;
		}

		if (typeof likedUser.rating !== 'number') {
			console.error(`User with id: ${userId} doesn't have a rating`);
			return;
		}

		likedUser.rating++;
	};

	watch(
		activeFilter,
		(f) => {
			switch (f) {
				case 'TIME':
					const byTime = filterByTime(categorizedUsers.value);
					filteredUsers.value = byTime;

					break;
				case 'RATING':
					const byRating = filterByRating(categorizedUsers.value);
					filteredUsers.value = byRating;

					break;
				default:
					filteredUsers.value = categorizedUsers.value;
			}
		},
		{ immediate: true }
	);

	return { users: filteredUsers, likeUser };
};

export default useUsers;
