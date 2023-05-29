import {defineConfig} from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/displaying", component: "displaying" },
    { path: "/day1", component: "Day1" },
    { path: "/tutorial", component: "tutorial" },
  ],
  npmClient: 'yarn',
});
