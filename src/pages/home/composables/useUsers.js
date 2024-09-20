import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue';
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

	const totalPages = ref(null);
	const curPage = ref(null);
	const usersPerPage = 4;

	const isNextPageExist = computed(() => curPage.value + 1 <= totalPages.value);

	const filterUsersByCategories = (usersList) => {
		if (!activeCategory.value) {
			return usersList;
		}

		const filteredByCategory = filter(usersList, {
			topic: activeCategory.value.toUpperCase(),
		});

		return filteredByCategory;
	};

	const filterUsersByFilters = (usersList) => {
		if (!activeFilter.value || prevActiveFilter === activeFilter) {
			return usersList;
		}

		switch (activeFilter) {
			case 'rating':
				const sortedByRating = orderBy(usersList, ['rating'], ['desc']);

				return sortedByRating;
			case 'time':
				const sortedByTime = orderBy(usersList, ['pubDate'], ['desc']);

				return sortedByTime;
		}
	};

	const getFilteredUsers = () => {
		let usersByCats = filterUsersByCategories(allUsers.value);
		const usersByFilters = filterUsersByFilters(usersByCats);

		return usersByFilters;
	};

	const getPaginatedUsers = () => {
		const paginatedUsers = filteredUsers.value.slice(
			(curPage.value - 1) * usersPerPage,
			curPage.value * usersPerPage
		);

		return paginatedUsers;
	};

	const resetPagination = () => {
		curPage.value = 1;
		totalPages.value = Math.ceil(filteredUsers.value.length / usersPerPage);
	};

	const likeUser = (userId) => {
		if (userId instanceof Event) {
			throw Error('You must provide valid userId');
		}

		const user = displayedUsers.value.filter((u) => u.id === userId)[0];

		if (!user) {
			throw Error(`User with id: ${userId} doesn't exist`);
		}

		console.log('Liked');
	};

	const toNextPage = () => {
		curPage.value++;
	};

	watch(
		[allUsers, activeCategory],
		() => {
			filteredUsers.value = getFilteredUsers();
		},
		{ immediate: true }
	);

	watch(filteredUsers, (n, o) => {
		resetPagination();

		displayedUsers.value = getPaginatedUsers();
	});

	watch(curPage, () => {
		displayedUsers.value = getPaginatedUsers();
	});

	onMounted(() => {
		allUsers.value = mockUsers;
	});

	return {
		users: displayedUsers,
		likeUser,
		totalPages,
		curPage,
		isNextPageExist,
		toNextPage,
		filters,
		activeFilter,
		onFilterChange,
		categories,
		activeCategory,
		categoriesGradients,
	};
};

export default useUsers;
