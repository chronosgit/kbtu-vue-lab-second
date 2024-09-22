import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const usePagination = (items) => {
	const router = useRouter();
	const route = useRoute();

	const curPage = ref(null);
	const totalPages = ref(null);
	const itemsPerPage = 4;

	const getPaginatedItems = (items) => {
		if (curPage.value == null) {
			console.error('Current page is not defined');

			return items;
		}

		const pagItems = items.slice(
			(curPage.value - 1) * itemsPerPage,
			curPage.value * itemsPerPage
		);

		return pagItems;
	};

	const toNextPage = () => {
		if (curPage.value + 1 > totalPages) return;

		router.push({
			path: route.path,
			query: { ...route.query, page: curPage.value + 1 },
		});
	};

	watch(items, (n) => {
		totalPages.value = Math.ceil(n.length / itemsPerPage);
	});

	watch(
		() => route.query,
		(q) => {
			const page = q['page'];

			if (page == null) {
				return router.push({
					path: route.path,
					query: { ...route.query, page: 1 },
				});
			}

			curPage.value = Number(page);
		},
		{
			immediate: true,
		}
	);

	return { curPage, totalPages, getPaginatedItems, toNextPage };
};

export default usePagination;
