import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Title from './components/Title.vue';
import Detail from './components/Detail.vue';
import Notfound from './components/Notfound.vue';

const routes = [
    {
        path: "/",
        component: Title,
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path : "/:anything(.*)",
        component : Notfound,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 