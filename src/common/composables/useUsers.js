import { ref, watch } from 'vue';
import { filter, orderBy } from 'lodash';
import mockUsers from '@common/utils/mockUsers';

const useUsers = (activeCategory, activeFilter) => {
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

	return { users: filteredUsers };
};

export default useUsers;
