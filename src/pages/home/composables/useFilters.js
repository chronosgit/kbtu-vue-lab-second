import { ref } from 'vue';

const useFilters = () => {
	// values are readable names of the filters
	const filters = { BY_RATING: 'rating', BY_DATE_TIME: 'time' };
	const activeFilter = ref(null);
	const prevActiveFilter = ref(null);

	// clickedFilter is a key of filters
	const onFilterChange = (clickedFilter) => {
		if (!Object.keys(filters).includes(clickedFilter)) {
			throw Error(`Filter '${clickedFilter}' is not valid`);
		}

		prevActiveFilter.value = activeFilter;
		activeFilter.value = filters[clickedFilter];
	};

	return { filters, activeFilter, prevActiveFilter, onFilterChange };
};

export default useFilters;
