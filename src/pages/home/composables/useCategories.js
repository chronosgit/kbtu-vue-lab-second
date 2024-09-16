import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const useCategories = () => {
	const route = useRoute();

	const prevActiveCategory = ref(null);
	const activeCategory = ref(null);

	const categories = {
		ADVENTURE: 'Adventure',
		NATURE: 'Nature',
		FASHION: 'Fashion',
		MODERN: 'Modern',
	};

	const categoriesGradients = {
		ADVENTURE: 'linear-gradient(to right, #4cd87c, #3dd560)',
		NATURE: 'linear-gradient(to right, #5dde69, #23ce20)',
		FASHION: 'linear-gradient(to right, #79de56, #49e522)',
		MODERN: 'linear-gradient(to right, #68e574, #7ecd86)',
	};

	watchEffect(() => {
		const category = route.fullPath.split('/')[2].toUpperCase();
		prevActiveCategory.value = activeCategory;

		if (categories.hasOwnProperty(category)) {
			activeCategory.value = category;
		} else {
			activeCategory.value = categories[Object.keys(categories)[0]];
		}
	});

	return {
		categories,
		prevActiveCategory,
		activeCategory,
		categoriesGradients,
	};
};

export default useCategories;
