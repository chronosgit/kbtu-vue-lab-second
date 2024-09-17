import { createRouter, createWebHistory } from 'vue-router';
import Home from '@pages/home/Home.vue';
import NotFound from '@pages/not_found/NotFound.vue';

const routes = [
	{
		path: '/topic/:topic',
		component: Home,
	},
	{
		path: '/not-found',
		component: NotFound,
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/not-found',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
