import { createRouter, createWebHistory } from "vue-router";

import authRoutes from '@/modules/auth/router/';
import sharedRoutes from '@/modules/shared/router/';

const routes = [
    ...authRoutes,
    ...sharedRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
