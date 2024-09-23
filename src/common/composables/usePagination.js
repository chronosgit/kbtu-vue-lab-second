import { ref, watch } from 'vue';

const usePagination = (items) => {
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
		console.log(curPage);

		if (curPage.value + 1 > totalPages) return;

		curPage.value++;
	};

	const toPrevPage = () => {
		console.log(curPage);

		if (curPage.value - 1 <= 0) return;

		curPage.value--;
	};

	watch(items, (n) => {
		totalPages.value = Math.ceil(n.length / itemsPerPage);

		if (totalPages.value === 0) curPage.value = 0;
		else curPage.value = 1;
	});

	return { curPage, totalPages, getPaginatedItems, toNextPage, toPrevPage };
};

export default usePagination;
