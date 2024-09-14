import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/modules/home/Home.vue';
import NotFound from '@/modules/not_found/NotFound.vue';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/:pathMatch(.*)*',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
