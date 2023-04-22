import {defineConfig} from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/displaying", component: "displaying" },
    { path: "/tutorial", component: "tutorial" },
  ],
  npmClient: 'yarn',
});
