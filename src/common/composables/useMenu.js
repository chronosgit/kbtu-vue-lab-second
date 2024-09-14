import { onMounted, onUnmounted, ref } from 'vue';

const useMenu = (menuEl) => {
	const isMenuActivated = ref(false);

	const openMenu = () => {
		isMenuActivated.value = true;
	};

	const closeMenu = () => {
		isMenuActivated.value = false;
	};

	const onDocumentClick = (e) => {
		if (menuEl.value && !menuEl.value.contains(e.target)) {
			closeMenu();
		}
	};

	onMounted(() => {
		document.addEventListener('click', onDocumentClick);
	});

	onUnmounted(() => {
		document.removeEventListener('click', onDocumentClick);
	});

	return { isMenuActivated, openMenu };
};

export default useMenu;
