import { ref } from 'vue';

const useFilters = () => {
	// values are readable names of the filters
	const filters = { BY_RATING: 'rating', BY_DATE_TIME: 'time' };
	const activeFilter = ref(filters['BY_RATING']);

	// clickedFilter is a key of filters
	const onFilterChange = (clickedFilter) => {
		if (!Object.keys(filters).includes(clickedFilter)) {
			throw Error(`Filter '${clickedFilter}' is not valid`);
		}

		activeFilter.value = filters[clickedFilter];
	};

	return { filters, activeFilter, onFilterChange };
};

export default useFilters;
