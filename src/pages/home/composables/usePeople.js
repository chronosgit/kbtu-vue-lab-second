import { onMounted, ref, watch } from 'vue';
import { filter, orderBy } from 'lodash';
import useFilters from './useFilters';
import useCategories from './useCategories';
import population from '../utils/population';

const usePeople = () => {
	const { filters, activeFilter, prevActiveFilter, onFilterChange } =
		useFilters();
	const {
		categories,
		activeCategory,
		prevActiveCategory,
		categoriesGradients,
	} = useCategories();

	const people = ref([]);
	const peopleDisplayed = ref([]);

	// cheezy pipeline :)
	const getPeopleByCategories = (peopleDataSet) => {
		if (!activeCategory.value || prevActiveCategory === activeCategory) {
			return peopleDataSet;
		}

		const filteredByCategory = filter(peopleDataSet, {
			topic: activeCategory.value,
		});

		return filteredByCategory;
	};

	const getPeopleByFilter = (peopleDataSet) => {
		if (!activeFilter.value || prevActiveFilter === activeFilter) {
			return peopleDataSet;
		}

		switch (activeFilter) {
			case 'rating':
				const sortedByRating = orderBy(peopleDataSet, ['rating'], ['desc']);

				return sortedByRating;
			case 'time':
				const sortedByTime = orderBy(peopleDataSet, ['pubDate'], ['desc']);

				return sortedByTime;
		}
	};

	const getFilteredPeople = (peopleDataSet) => {
		const p1 = getPeopleByCategories(peopleDataSet);
		const p2 = getPeopleByFilter(p1);

		return p2;
	};

	// pagination

	watch([activeCategory, activeFilter], () => {
		peopleDisplayed.value = getFilteredPeople(people.value);
	});

	onMounted(() => {
		people.value = population;
	});

	return {
		people: peopleDisplayed,
		filters,
		activeFilter,
		categories,
		activeCategory,
		categoriesGradients,
		onFilterChange,
	};
};

export default usePeople;
