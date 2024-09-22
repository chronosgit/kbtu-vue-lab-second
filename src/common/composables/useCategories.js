import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const useCategories = () => {
	const router = useRouter();
	const route = useRoute();

	const activeCategory = ref(null);

	const possibleCategories = {
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

	const isCategoryValid = (category) => {
		return Object.keys(possibleCategories).includes(category.toUpperCase());
	};

	const isPathValid = computed(() => {
		const category = route.params['topic'];

		return isCategoryValid(category);
	});

	watch(
		() => route.params,
		(p) => {
			if (!isPathValid.value) router.push('/not-found');

			const newCategory = p['topic'];

			activeCategory.value = newCategory.toUpperCase();
		},
		{
			immediate: true,
		}
	);

	return {
		activeCategory,
		possibleCategories,
		categoriesGradients,
	};
};

export default useCategories;
