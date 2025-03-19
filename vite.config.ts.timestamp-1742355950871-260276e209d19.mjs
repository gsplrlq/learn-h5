// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/vite@5.4.10_@types+node@22.8.7_less@4.2.0_terser@5.36.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_@types+node@22.8.7_less@4.2.0_terser@5.36.0__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.10_@types+node@22.8.7_less@4.2.0_terser@5.36.0__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_rollup@4.24.3_vue@3.5.12_typescript@5.6.3__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.26.2_rollup@4.24.3_vue@3.5.12_typescript@5.6.3__webpack-sources@3.2.3/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.4.10_@types+node@22.8.7_less@4.2.0_terser@5.36.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import mockDevServerPlugin from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/vite-plugin-mock-dev-server@1.8.0_esbuild@0.21.5_rollup@4.24.3_vite@5.4.10_@types+node@22.8.7_less@4.2.0_terser@5.36.0_/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import viteCompression from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.10_@types+node@22.8.7_less@4.2.0_terser@5.36.0_/node_modules/vite-plugin-compression/dist/index.mjs";
import { createHtmlPlugin } from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.4.10_@types+node@22.8.7_less@4.2.0_terser@5.36.0_/node_modules/vite-plugin-html/dist/index.mjs";

// build/cdn.ts
import { cdn } from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/vite-plugin-cdn2@1.1.0_rollup@4.24.3/node_modules/vite-plugin-cdn2/dist/index.mjs";
import { unpkg } from "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/node_modules/.pnpm/vite-plugin-cdn2@1.1.0_rollup@4.24.3/node_modules/vite-plugin-cdn2/dist/resolver/unpkg.mjs";
function enableCDN(isEnabled) {
  if (isEnabled === "true") {
    return cdn({
      resolve: unpkg(),
      modules: ["vue", "vue-demi", "pinia", "axios", "vant", "vue-router"]
    });
  }
}

// vite.config.ts
var __vite_injected_original_import_meta_url = "file:///D:/Project/%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0/learn-h5/vite.config.ts";
var root = process.cwd();
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, "");
  return {
    base: env.VITE_PUBLIC_PATH || "/",
    plugins: [
      vue(),
      vueJsx(),
      mockDevServerPlugin(),
      // vant 组件自动按需引入
      Components({
        dts: "src/typings/components.d.ts",
        resolvers: [VantResolver()]
      }),
      // svg icon
      createSvgIconsPlugin({
        // 指定图标文件夹
        iconDirs: [path.resolve(root, "src/icons/svg")],
        // 指定 symbolId 格式
        symbolId: "icon-[dir]-[name]"
      }),
      // 生产环境 gzip 压缩资源
      viteCompression(),
      // 注入模板数据
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || "false"
          }
        }
      }),
      // 生产环境默认不启用 CDN 加速
      enableCDN(env.VITE_CDN_DEPS)
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    server: {
      host: true,
      // 仅在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并 mock
      // doc: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
      proxy: {
        "^/dev-api": {
          target: ""
        },
        "/api": {
          // 这里填写后端地址
          target: "http://36.111.148.143:9101",
          changeOrigin: true,
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvY2RuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUHJvamVjdFxcXFxcdTVCNjZcdTRFNjBcdTVFNzNcdTUzRjBcXFxcbGVhcm4taDVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RcXFxcXHU1QjY2XHU0RTYwXHU1RTczXHU1M0YwXFxcXGxlYXJuLWg1XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0LyVFNSVBRCVBNiVFNCVCOSVBMCVFNSVCOSVCMyVFNSU4RiVCMC9sZWFybi1oNS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xyXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbW9ja0RldlNlcnZlclBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tbW9jay1kZXYtc2VydmVyXCI7XHJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4taHRtbFwiO1xyXG5pbXBvcnQgeyBlbmFibGVDRE4gfSBmcm9tIFwiLi9idWlsZC9jZG5cIjtcclxuXHJcbi8vIFx1NUY1M1x1NTI0RFx1NURFNVx1NEY1Q1x1NzZFRVx1NUY1NVx1OERFRlx1NUY4NFxyXG5jb25zdCByb290OiBzdHJpbmcgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIC8vIFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcm9vdCwgXCJcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIGJhc2U6IGVudi5WSVRFX1BVQkxJQ19QQVRIIHx8IFwiL1wiLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgdnVlSnN4KCksXHJcbiAgICAgIG1vY2tEZXZTZXJ2ZXJQbHVnaW4oKSxcclxuICAgICAgLy8gdmFudCBcdTdFQzRcdTRFRjZcdTgxRUFcdTUyQThcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjVcclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgZHRzOiBcInNyYy90eXBpbmdzL2NvbXBvbmVudHMuZC50c1wiLFxyXG4gICAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXVxyXG4gICAgICB9KSxcclxuICAgICAgLy8gc3ZnIGljb25cclxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxyXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHJvb3QsIFwic3JjL2ljb25zL3N2Z1wiKV0sXHJcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBIHN5bWJvbElkIFx1NjgzQ1x1NUYwRlxyXG4gICAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCJcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4MyBnemlwIFx1NTM4Qlx1N0YyOVx1OEQ0NFx1NkU5MFxyXG4gICAgICB2aXRlQ29tcHJlc3Npb24oKSxcclxuICAgICAgLy8gXHU2Q0U4XHU1MTY1XHU2QTIxXHU2NzdGXHU2NTcwXHU2MzZFXHJcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICAgIGluamVjdDoge1xyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBFTkFCTEVfRVJVREE6IGVudi5WSVRFX0VOQUJMRV9FUlVEQSB8fCBcImZhbHNlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyBcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTlFRDhcdThCQTRcdTRFMERcdTU0MkZcdTc1MjggQ0ROIFx1NTJBMFx1OTAxRlxyXG4gICAgICBlbmFibGVDRE4oZW52LlZJVEVfQ0ROX0RFUFMpXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhvc3Q6IHRydWUsXHJcbiAgICAgIC8vIFx1NEVDNVx1NTcyOCBwcm94eSBcdTRFMkRcdTkxNERcdTdGNkVcdTc2ODRcdTRFRTNcdTc0MDZcdTUyNERcdTdGMDBcdUZGMEMgbW9jay1kZXYtc2VydmVyIFx1NjI0RFx1NEYxQVx1NjJFNlx1NjIyQVx1NUU3NiBtb2NrXHJcbiAgICAgIC8vIGRvYzogaHR0cHM6Ly9naXRodWIuY29tL3Blbmd6aGFuYm8vdml0ZS1wbHVnaW4tbW9jay1kZXYtc2VydmVyXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgXCJeL2Rldi1hcGlcIjoge1xyXG4gICAgICAgICAgdGFyZ2V0OiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIi9hcGlcIjoge1xyXG4gICAgICAgICAgLy8gXHU4RkQ5XHU5MUNDXHU1ODZCXHU1MTk5XHU1NDBFXHU3QUVGXHU1NzMwXHU1NzQwXHJcbiAgICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzM2LjExMS4xNDguMTQzOjkxMDFcIixcclxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwic3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanNcIixcclxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcInN0YXRpYy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXFx1NUI2Nlx1NEU2MFx1NUU3M1x1NTNGMFxcXFxsZWFybi1oNVxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdFxcXFxcdTVCNjZcdTRFNjBcdTVFNzNcdTUzRjBcXFxcbGVhcm4taDVcXFxcYnVpbGRcXFxcY2RuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0LyVFNSVBRCVBNiVFNCVCOSVBMCVFNSVCOSVCMyVFNSU4RiVCMC9sZWFybi1oNS9idWlsZC9jZG4udHNcIjtpbXBvcnQgeyBjZG4gfSBmcm9tIFwidml0ZS1wbHVnaW4tY2RuMlwiO1xyXG5pbXBvcnQgeyB1bnBrZyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1jZG4yL3Jlc29sdmVyL3VucGtnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQ0ROKGlzRW5hYmxlZDogc3RyaW5nKSB7XHJcbiAgaWYgKGlzRW5hYmxlZCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgIHJldHVybiBjZG4oe1xyXG4gICAgICByZXNvbHZlOiB1bnBrZygpLFxyXG4gICAgICBtb2R1bGVzOiBbXCJ2dWVcIiwgXCJ2dWUtZGVtaVwiLCBcInBpbmlhXCIsIFwiYXhpb3NcIiwgXCJ2YW50XCIsIFwidnVlLXJvdXRlclwiXVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxlQUFlLFdBQVc7QUFDclUsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFVBQVU7QUFDakIsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTyxxQkFBcUI7QUFDNUIsU0FBUyx3QkFBd0I7OztBQ1ZxUSxTQUFTLFdBQVc7QUFDMVQsU0FBUyxhQUFhO0FBRWYsU0FBUyxVQUFVLFdBQW1CO0FBQzNDLE1BQUksY0FBYyxRQUFRO0FBQ3hCLFdBQU8sSUFBSTtBQUFBLE1BQ1QsU0FBUyxNQUFNO0FBQUEsTUFDZixTQUFTLENBQUMsT0FBTyxZQUFZLFNBQVMsU0FBUyxRQUFRLFlBQVk7QUFBQSxJQUNyRSxDQUFDO0FBQUEsRUFDSDtBQUNGOzs7QURWK0osSUFBTSwyQ0FBMkM7QUFjaE4sSUFBTSxPQUFlLFFBQVEsSUFBSTtBQUdqQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUV4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLE1BQU0sRUFBRTtBQUNsQyxTQUFPO0FBQUEsSUFDTCxNQUFNLElBQUksb0JBQW9CO0FBQUEsSUFDOUIsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1Asb0JBQW9CO0FBQUE7QUFBQSxNQUVwQixXQUFXO0FBQUEsUUFDVCxLQUFLO0FBQUEsUUFDTCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsTUFDNUIsQ0FBQztBQUFBO0FBQUEsTUFFRCxxQkFBcUI7QUFBQTtBQUFBLFFBRW5CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsTUFBTSxlQUFlLENBQUM7QUFBQTtBQUFBLFFBRTlDLFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQTtBQUFBLE1BRUQsZ0JBQWdCO0FBQUE7QUFBQSxNQUVoQixpQkFBaUI7QUFBQSxRQUNmLFFBQVE7QUFBQSxVQUNOLE1BQU07QUFBQSxZQUNKLGNBQWMsSUFBSSxxQkFBcUI7QUFBQSxVQUN6QztBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBLE1BRUQsVUFBVSxJQUFJLGFBQWE7QUFBQSxJQUM3QjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUEsTUFHTixPQUFPO0FBQUEsUUFDTCxhQUFhO0FBQUEsVUFDWCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0EsUUFBUTtBQUFBO0FBQUEsVUFFTixRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUFBLFVBQVFBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUM1QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
