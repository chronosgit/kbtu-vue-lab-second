import { onMounted, ref } from 'vue';
import useFilters from './composables/useFilters';
import useCategories from './composables/useCategories';
import population from '../modules/home/utils/population';

const usePeople = () => {
	const { filters, activeFilter, onFilterChange } = useFilters();
	const { categories, categoriesGradients } = useCategories();

	const people = ref([]);

	// fetch by filter, pagination, like

	const getPeopleByCategories = (category) => {
		console.log(category);

		const peopleByCategories = [];

		people.forEach((p, i) => {
			if (p.topic.toLowerCase() === 'category'.toLowerCase()) {
				peopleByCategories.push(p);
			}
		});

		return peopleByCategories;
	};

	const getPeopleByFilter = () => {
		// lodash by something and datetime
	};

	onMounted(() => {
		people.value = population;
	});

	return { people, filters, activeFilter, onFilterChange };
};

export default usePeople;
