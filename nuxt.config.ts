// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        //'@nuxtjs/device',
        '@nuxtjs/seo',
        '@nuxtjs/sitemap',  // Must be before @nuxt/content
        '@nuxt/content',
        '@nuxt/image',
        'nuxt-og-image'
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
        public: {
            googleSiteVerification: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'N/A',
        },
    },
    app: {
        header: {
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
        },
    },
    nitro: {
        prerender: {
            //routes: ['/sitemap.xml']
        }
    },
    site: {
        //url: 'https://sweet-org.github.io',
        name: 'SWEET Homepage'
    },
})