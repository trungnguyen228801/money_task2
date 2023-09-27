import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";
import TransactionDetailPage from "./pages/TransactionDetailPage";
import NotFound from "./pages/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "overview-route",
        component: HomePage,
    },
    {
        path: "/transactions",
        name: "transactions-route",
        component: TransactionPage,
    },
    {
        path: "/transactions/:id",
        name: "transacion-detail-route",
        component: TransactionDetailPage,
    },
    {
        path: "/ts",
        redirect: "/transactions",
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
]

const router = createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes,
    }
);
export default router