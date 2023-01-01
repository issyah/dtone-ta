export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Megasoft",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/ant/main.less"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui", "@/plugins/token", "@/plugins/axios"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/proxy", "@nuxtjs/axios", "@nuxtjs/moment", "cookie-universal-nuxt", "@nuxtjs/markdownit"],
  axios: {
    proxy: true,
  },
  markdownit:{
    runtime: true
  },
  proxy:{
    '/api/' : {
      target: process.env.API_BASE_URL + '/v1',
      pathRewrite: {
        '^/api/' : ''
      }
    }
  },
  env: {
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          math: "always",
        },
      },
    },
  },
};
