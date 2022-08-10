import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import vue from "@vitejs/plugin-vue";
import path from "path";
export default defineConfig({
	resolve: {
		alias: {
			"@/": `${path.resolve(__dirname, "src")}/`,
		},
	},
	plugins: [vue({ reactivityTransform: true }), Pages({ dirs: "src/views" })],
});
