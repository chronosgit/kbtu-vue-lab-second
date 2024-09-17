import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const useCategories = () => {
	const router = useRouter();
	const route = useRoute();

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

	watch(
		() => route.fullPath,
		() => {
			const categoryInPath = route.fullPath.split('/')[2].toUpperCase();

			if (categories.hasOwnProperty(categoryInPath)) {
				activeCategory.value = categoryInPath.toLowerCase();
			} else {
				router.push('/not-found');
			}
		},
		{ immediate: true }
	);

	return {
		categories,
		activeCategory,
		categoriesGradients,
	};
};

export default useCategories;
