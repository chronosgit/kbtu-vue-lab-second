import { ref, watch } from 'vue';

const useFilters = () => {
	const activeFilter = ref(null);

	const possibleFilters = {
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

	return {
		possibleFilters,
		activeFilter,
		onFilterChange,
	};
};

export default useFilters;
