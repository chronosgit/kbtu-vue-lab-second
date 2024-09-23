import { ref, watch } from 'vue';
import { filter, orderBy } from 'lodash';
import usePagination from '@common/composables/usePagination';
import mockUsers from '@common/utils/mockUsers';

const useUsers = (activeCategory, activeFilter) => {
	// vertical to low pipeline; the lowest one is returned as 'users'
	const categorizedUsers = ref([]);
	const filteredUsers = ref([]);
	const paginatedUsers = ref([]);

	const uPagination = usePagination(filteredUsers);

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

	// Get categorized users
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

	// Get filtered users
	watch(
		[activeFilter, categorizedUsers],
		() => {
			switch (activeFilter.value) {
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

	// Get paginated users
	watch(
		[uPagination.curPage, filteredUsers],
		() => {
			if (uPagination.curPage.value == null) return;

			const pagFilUsers = uPagination.getPaginatedItems(filteredUsers.value);

			paginatedUsers.value = pagFilUsers;
		},
		{ immediate: true }
	);

	return {
		users: paginatedUsers,
		curPage: uPagination.curPage,
		totalPages: uPagination.totalPages,
		likeUser,
		toNextPage: uPagination.toNextPage,
	};
};

export default useUsers;
