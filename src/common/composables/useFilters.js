import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const useFilters = () => {
	const router = useRouter();
	const route = useRoute();

	const activeFilter = ref('NO');

	const possibleFilters = {
		NO: 'No filter',
		TIME: 'Time',
		RATING: 'Rating',
	};

	const isFilterValid = (filter) => {
		return Object.keys(possibleFilters).includes(filter);
	};

	const onFilterChange = (newFilter) => {
		if (!isFilterValid(newFilter)) return;

		activeFilter.value = newFilter;
	};

	// watch(
	// 	() => route.query,
	// 	(q) => {
	// 		const filterQuery = q['filter']?.toUpperCase();

	// 		if (filterQuery == null || !isFilterValid(filterQuery)) {
	// 			return router.push({
	// 				path: route.path,
	// 				query: { filter: 'NO', ...route.query },
	// 			});
	// 		}

	// 		activeFilter.value = filterQuery;
	// 	},
	// 	{
	// 		immediate: true,
	// 	}
	// );

	return {
		possibleFilters,
		activeFilter,
		onFilterChange,
	};
};

export default useFilters;
