import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld/HelloWorld.vue";
import { IsSkGay, Yes, No } from "../components/IsSkGay/index.js";

console.log()
const routes = [
    {
        path: "/",
        name: "Root",
        redirect: '/isskgay'
    },
    {
        path: "/helloworld",
        name: "HelloWorld",
        component: HelloWorld
    },
    {
        path: "/isskgay",
        name: "IsSkGay",
        component: IsSkGay,
        children: [
            {
                path: "yes",
                component: Yes
            },
            {
                path: "no",
                component: No
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
