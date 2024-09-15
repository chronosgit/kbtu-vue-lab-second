import { onMounted, ref } from 'vue';
import population from '../utils/population';

const usePeople = () => {
	const people = ref([]);

	// fetch by categories (routing), fetch by filter, pagination, like

	onMounted(() => {
		people.value = population;
	});

	return { people };
};

export default usePeople;
