import { onMounted, ref, watch } from 'vue';
import { filter, orderBy } from 'lodash';
import useFilters from './useFilters';
import useCategories from './useCategories';
import mockUsers from '../utils/mockUsers';

const useUsers = () => {
	const { filters, activeFilter, prevActiveFilter, onFilterChange } =
		useFilters();
	const { categories, activeCategory, categoriesGradients } = useCategories();

	const allUsers = ref([]);
	const filteredUsers = ref([]);
	const displayedUsers = ref([]);

	const getUsersByCategories = (usersDataSet) => {
		if (!activeCategory.value) {
			return usersDataSet;
		}

		const filteredByCategory = filter(usersDataSet, {
			topic: activeCategory.value,
		});

		return filteredByCategory;
	};

	const getUsersByFilter = (usersDataSet) => {
		if (!activeFilter.value || prevActiveFilter === activeFilter) {
			return usersDataSet;
		}

		switch (activeFilter) {
			case 'rating':
				const sortedByRating = orderBy(usersDataSet, ['rating'], ['desc']);

				return sortedByRating;
			case 'time':
				const sortedByTime = orderBy(usersDataSet, ['pubDate'], ['desc']);

				return sortedByTime;
		}
	};

	const getFilteredUsers = (usersDataSet) => {
		if (!usersDataSet || usersDataSet.length === 0) return usersDataSet;

		const p1 = getUsersByCategories(usersDataSet);
		const p2 = getUsersByFilter(p1);

		return p2;
	};

	// pagination (displayedUsers)

	watch(
		[allUsers, activeCategory],
		() => {
			filteredUsers.value = getFilteredUsers(allUsers.value);
		},
		{ immediate: true }
	);

	onMounted(() => {
		allUsers.value = mockUsers;
	});

	return {
		users: filteredUsers,
		filters,
		activeFilter,
		categories,
		activeCategory,
		categoriesGradients,
		onFilterChange,
	};
};

export default useUsers;
