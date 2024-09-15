import { onMounted, onUnmounted, ref } from 'vue';

const useClickAway = (el) => {
	const isElActive = ref(false);

	const openEl = () => {
		isElActive.value = true;
	};

	const closeEl = () => {
		isElActive.value = false;
	};

	const onDocumentClick = (e) => {
		if (el.value && !el.value.contains(e.target)) {
			closeEl();
		}
	};

	onMounted(() => {
		document.addEventListener('click', onDocumentClick);
	});

	onUnmounted(() => {
		document.removeEventListener('click', onDocumentClick);
	});

	return { isElActive, openEl };
};

export default useClickAway;
