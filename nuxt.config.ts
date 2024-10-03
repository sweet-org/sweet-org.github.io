// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        //'@nuxtjs/device',
        '@nuxt/content',
        '@nuxt/image'
    ],
    css: ['~/assets/css/style.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ssr: true,
    runtimeConfig: {
        public: {},
    },
    app: {
        header: {
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
        },
    },
})