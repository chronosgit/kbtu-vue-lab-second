import { ref, watch } from 'vue';
import mockUsers from '@common/utils/mockUsers';
import { filter } from 'lodash';

const useCategorizedUsers = (activeCategory) => {
	const categorizedUsers = ref([]);

	watch(
		activeCategory,
		(newCategory) => {
			const filteredAllUsers = filter(mockUsers, (u) => {
				return u.topic.toLowerCase() === newCategory.toLowerCase();
			});

			categorizedUsers.value = filteredAllUsers;
		},
		{ immediate: true }
	);

	return { categorizedUsers };
};

export default useCategorizedUsers;
