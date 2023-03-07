var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// package.json
var package_exports = {};
__export(package_exports, {
  author: () => author,
  default: () => package_default,
  dependencies: () => dependencies,
  description: () => description,
  devDependencies: () => devDependencies,
  name: () => name,
  private: () => private2,
  scripts: () => scripts,
  type: () => type,
  version: () => version
});
var name, private2, version, description, author, type, scripts, dependencies, devDependencies, package_default;
var init_package = __esm({
  "package.json"() {
    name = "vite-vue3-ts-qiankun-demo";
    private2 = false;
    version = "0.0.1";
    description = "\u7EC4\u4EF6\u7EC3\u4E60";
    author = "wocwin";
    type = "module";
    scripts = {
      dev: "vite --mode dev",
      sit: "vue-tsc --noEmit && vite build --mode sit",
      uat: "vue-tsc --noEmit && vite build --mode uat",
      prod: "vue-tsc --noEmit && vite build --mode prod",
      deploy: "deploy.sh",
      preview: "vite preview"
    };
    dependencies = {
      "@element-plus/icons-vue": "^2.0.10",
      "@vueuse/core": "^9.13.0",
      "@wangeditor/editor": "^5.1.12",
      "@wangeditor/editor-for-vue": "^5.1.12",
      axios: "^1.1.2",
      "element-plus": "^2.2.18",
      "normalize.css": "^8.0.1",
      pinia: "^2.0.23",
      "pinia-plugin-persistedstate": "^2.3.0",
      "print-js": "^1.6.0",
      "vite-plugin-qiankun": "^1.0.15",
      vue: "^3.2.37",
      "vue-router": "^4.1.5",
      vuedraggable: "^4.1.0"
    };
    devDependencies = {
      "@types/js-cookie": "^3.0.2",
      "@types/node": "18.7.18",
      "@types/nprogress": "^0.2.0",
      "@types/path-browserify": "^1.0.0",
      "@typescript-eslint/eslint-plugin": "^5.40.0",
      "@typescript-eslint/parser": "^5.40.0",
      "@vitejs/plugin-vue": "^3.1.0",
      "@vitejs/plugin-vue-jsx": "^2.0.1",
      eslint: "^8.25.0",
      "eslint-config-prettier": "^8.5.0",
      "eslint-plugin-prettier": "^4.2.1",
      "eslint-plugin-vue": "^9.6.0",
      "js-cookie": "^3.0.1",
      jsencrypt: "3.0.0-rc.1",
      nprogress: "^0.2.0",
      "path-browserify": "^1.0.1",
      prettier: "^2.7.1",
      "rollup-plugin-visualizer": "^5.8.2",
      sass: "^1.55.0",
      "sass-loader": "^13.1.0",
      typescript: "^4.6.4",
      "unplugin-auto-import": "^0.11.2",
      vite: "^3.1.0",
      "vite-plugin-compression": "^0.5.1",
      "vite-plugin-vue-setup-extend": "^0.4.0",
      "vue-tsc": "^0.40.4"
    };
    package_default = {
      name,
      private: private2,
      version,
      description,
      author,
      type,
      scripts,
      dependencies,
      devDependencies
    };
  }
});

// vite.config.ts
import { defineConfig } from "file:///E:/myTest/%E5%9F%BA%E6%9C%AC%E7%89%88vite-ts-pinia%E7%BB%84%E4%BB%B6%E6%A1%86%E6%9E%B6/vite-templates-master/node_modules/.pnpm/vite@3.2.5_jwgphxole5tuhzacciupzfrlie/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/myTest/%E5%9F%BA%E6%9C%AC%E7%89%88vite-ts-pinia%E7%BB%84%E4%BB%B6%E6%A1%86%E6%9E%B6/vite-templates-master/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.5+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/myTest/%E5%9F%BA%E6%9C%AC%E7%89%88vite-ts-pinia%E7%BB%84%E4%BB%B6%E6%A1%86%E6%9E%B6/vite-templates-master/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.5+vue@3.2.47/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import vueSetupExtend from "file:///E:/myTest/%E5%9F%BA%E6%9C%AC%E7%89%88vite-ts-pinia%E7%BB%84%E4%BB%B6%E6%A1%86%E6%9E%B6/vite-templates-master/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@3.2.5/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import AutoImport from "file:///E:/myTest/%E5%9F%BA%E6%9C%AC%E7%89%88vite-ts-pinia%E7%BB%84%E4%BB%B6%E6%A1%86%E6%9E%B6/vite-templates-master/node_modules/.pnpm/unplugin-auto-import@0.11.5_@vueuse+core@9.13.0/node_modules/unplugin-auto-import/dist/vite.js";
import viteCompression from "file:///E:/myTest/%E5%9F%BA%E6%9C%AC%E7%89%88vite-ts-pinia%E7%BB%84%E4%BB%B6%E6%A1%86%E6%9E%B6/vite-templates-master/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@3.2.5/node_modules/vite-plugin-compression/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\myTest\\\u57FA\u672C\u7248vite-ts-pinia\u7EC4\u4EF6\u6846\u67B6\\vite-templates-master";
var packName = (init_package(), __toCommonJS(package_exports)).name;
var vite_config_default = defineConfig({
  base: "",
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/auto-import.d.ts"
    }),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    })
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    host: "0.0.0.0",
    port: 3300,
    open: true,
    https: false,
    proxy: {
      "^/mes": {
        target: `http://10.0.10.243:5000/mesv2/`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/mes/, "")
      },
      "^/portal-user": {
        target: `http://10.0.10.240:8172`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-user/, "/portal-user")
      },
      "^/portal-sso": {
        target: `http://10.0.10.240:8171`,
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/portal-sso/, "/portal-sso")
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      components: resolve(__vite_injected_original_dirname, "src/components")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".mjs"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxteVRlc3RcXFxcXHU1N0ZBXHU2NzJDXHU3MjQ4dml0ZS10cy1waW5pYVx1N0VDNFx1NEVGNlx1Njg0Nlx1NjdCNlxcXFx2aXRlLXRlbXBsYXRlcy1tYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXG15VGVzdFxcXFxcdTU3RkFcdTY3MkNcdTcyNDh2aXRlLXRzLXBpbmlhXHU3RUM0XHU0RUY2XHU2ODQ2XHU2N0I2XFxcXHZpdGUtdGVtcGxhdGVzLW1hc3RlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovbXlUZXN0LyVFNSU5RiVCQSVFNiU5QyVBQyVFNyU4OSU4OHZpdGUtdHMtcGluaWElRTclQkIlODQlRTQlQkIlQjYlRTYlQTElODYlRTYlOUUlQjYvdml0ZS10ZW1wbGF0ZXMtbWFzdGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCcgLy8gXHU4QkJFXHU3RjZFbmVtZVx1NUM1RVx1NjAyN1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZScgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJyAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUzOEJcdTdGMjlcbi8vIGltcG9ydCB7dmlzdWFsaXplcn0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJyAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODRcdTg5QzZcdTU2RkVcdTY1ODdcdTRFRjZcbi8vIFx1OTE0RFx1N0Y2RXFpYW5rdW5cbi8vIGltcG9ydCBxaWFua3VuIGZyb20gJ3ZpdGUtcGx1Z2luLXFpYW5rdW4nXG5jb25zdCBwYWNrTmFtZSA9IHJlcXVpcmUoJy4vcGFja2FnZScpLm5hbWVcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBcdTkxNERcdTdGNkVOR1x1MjAxNFx1MjAxNFx1OEZEOVx1NEUyQVx1NjYyRlx1NEUwRVx1NTQwRVx1NTNGMFx1MzAwMVx1OEZEMFx1N0VGNFx1N0VBNlx1NUI5QVx1NTk3RFx1NzY4NFx1RkYwQ1x1NTA1QU5HXHU4RjZDXHU1M0QxXHVGRjFCXHU1MzczXHU0RTNCXHU1RTk0XHU3NTI4XHU1NzMwXHU1NzQwK1x1NUI1MFx1NUU5NFx1NzUyOGJhc2VcdTVDMzFcdTRGMUFcdTc2RjRcdTYzQTVOR1x1OEY2Q1x1NTNEMVxuICAvLyBiYXNlOiAnL3dvY3dpbi1hZG1pbi8nLFxuICBiYXNlOiAnJyxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywncGluaWEnXSwgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1dnVlXHUzMDAxdnVlLXJvdXRlclx1MzAwMXBpbmlhXHU3NkY4XHU1MTczQVBJXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnQuZC50cycgLy8gXHU3NTFGXHU2MjEwIGBhdXRvLWltcG9ydC5kLnRzYCBcdTUxNjhcdTVDNDBcdTU4RjBcdTY2MEVcbiAgICB9KSxcbiAgICAvLyBcdTkxNERcdTdGNkVxaWFua3VuXG4gICAgLy8gcWlhbmt1bihgJHtwYWNrTmFtZX1gLCB7XG4gICAgLy8gICB1c2VEZXZNb2RlOiB0cnVlXG4gICAgLy8gfSksXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gXHU0RTBEXHU3OTgxXHU3NTI4XHU1MzhCXHU3RjI5XG4gICAgICBkZWxldGVPcmlnaW5GaWxlOiBmYWxzZSwgLy8gXHU1MzhCXHU3RjI5XHU1NDBFXHU2NjJGXHU1NDI2XHU1MjIwXHU5NjY0XHU1MzlGXHU2NTg3XHU0RUY2XG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBcdTUzOEJcdTdGMjlcdTUyNERcdTY3MDBcdTVDMEZcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLCAvLyBcdTUzOEJcdTdGMjlcdTdCOTdcdTZDRDVcbiAgICAgIGV4dDogJy5neicgLy8gXHU2NTg3XHU0RUY2XHU3QzdCXHU1NzhCXG4gICAgfSksXG4gICAgLy8gdmlzdWFsaXplcih7XG4gICAgLy8gICBvcGVuOnRydWUsICAvL1x1NkNFOFx1NjEwRlx1OEZEOVx1OTFDQ1x1ODk4MVx1OEJCRVx1N0Y2RVx1NEUzQXRydWVcdUZGMENcdTU0MjZcdTUyMTlcdTY1RTBcdTY1NDhcbiAgICAvLyAgIGd6aXBTaXplOnRydWUsXG4gICAgLy8gICBicm90bGlTaXplOnRydWVcbiAgICAvLyB9KVxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXG4gICAgfSxcbiAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgcG9ydDogMzMwMCxcbiAgICBvcGVuOiB0cnVlLFxuICAgIGh0dHBzOiBmYWxzZSxcbiAgICBwcm94eToge1xuICAgICAgJ14vbWVzJzoge1xuICAgICAgICB0YXJnZXQ6IGBodHRwOi8vMTAuMC4xMC4yNDM6NTAwMC9tZXN2Mi9gLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwKSA9PiBwLnJlcGxhY2UoL15cXC9tZXMvLCAnJylcbiAgICAgIH0sXG4gICAgICAnXi9wb3J0YWwtdXNlcic6IHtcbiAgICAgICAgdGFyZ2V0OiBgaHR0cDovLzEwLjAuMTAuMjQwOjgxNzJgLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwKSA9PiBwLnJlcGxhY2UoL15cXC9wb3J0YWwtdXNlci8sICcvcG9ydGFsLXVzZXInKVxuICAgICAgfSxcbiAgICAgICdeL3BvcnRhbC1zc28nOiB7XG4gICAgICAgIHRhcmdldDogYGh0dHA6Ly8xMC4wLjEwLjI0MDo4MTcxYCxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocCkgPT4gcC5yZXBsYWNlKC9eXFwvcG9ydGFsLXNzby8sICcvcG9ydGFsLXNzbycpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgLy8gXHU5MTREXHU3RjZFXHU1MjJCXHU1NDBEXG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIGNvbXBvbmVudHM6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKVxuICAgIH0sXG4gICAgLy8gXHU3QzdCXHU1NzhCXHVGRjFBIHN0cmluZ1tdIFx1NUJGQ1x1NTE2NVx1NjVGNlx1NjBGM1x1ODk4MVx1NzcwMVx1NzU2NVx1NzY4NFx1NjI2OVx1NUM1NVx1NTQwRFx1NTIxN1x1ODg2OFx1MzAwMlxuICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nLCAnLnZ1ZScsICcubWpzJ11cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4WSxTQUFTLG9CQUFvQjtBQUMzYSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsZUFBZTtBQUN4QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLHFCQUFxQjtBQU41QixJQUFNLG1DQUFtQztBQVV6QyxJQUFNLFdBQVcsZ0RBQXFCO0FBRXRDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBRzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLGNBQWEsT0FBTztBQUFBLE1BQ3JDLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUtELGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUEsTUFDbEIsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBTUg7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLCtCQUErQjtBQUFBLElBQ2pDO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDeEM7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLGtCQUFrQixjQUFjO0FBQUEsTUFDNUQ7QUFBQSxNQUNBLGdCQUFnQjtBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLGlCQUFpQixhQUFhO0FBQUEsTUFDMUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBRVAsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUM3QixZQUFZLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsSUFDakQ7QUFBQSxJQUVBLFlBQVksQ0FBQyxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVMsUUFBUSxNQUFNO0FBQUEsRUFDcEU7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
