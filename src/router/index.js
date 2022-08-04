import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/day1",
        name: "day1",
        component: () => import("@/views/Day1.vue"),
    },{
        path: "/day11",
        name: "day11",
        component: () => import("@/views/Day11.vue"),
    },
    {
        path: "/day2",
        name: "day2",
        component: () => import("@/views/Day2.vue"),
    },
    {
        path: "/day3",
        name: "day3",
        component: () => import("@/views/Day3.vue"),
    },
    {
        path: "/day4",
        name: "day4",
        component: () => import("@/views/Day4.vue"),
    },
    {
        path: "/day5",
        name: "day5",
        component: () => import("@/views/Day5.vue"),
    },
    {
        path: "/day6",
        name: "day6",
        component: () => import("@/views/Day6.vue"),
    },
    {
        path: "/day7",
        name: "day7",
        component: () => import("@/views/Day7.vue"),
    },
    {
        path: "/day8",
        name: "day8",
        component: () => import("@/views/Day8.vue"),
    },
    {
        path: "/day9",
        name: "day9",
        component: () => import("@/views/Day9.vue"),
    },
    {
        path: "/day10",
        name: "day10",
        component: () => import("@/views/Day10.vue"),
    },
    {
        path: "/day11",
        name: "day11",
        component: () => import("@/views/Day11.vue"),
    },
    {
        path: "/day13",
        name: "day13",
        component: () => import("@/views/Day13.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
