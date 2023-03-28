/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
    },
];

const nextConfig = {
    reactStrictMode: true,

    // proxy rewrites
    // async rewrites() {
    //     return [
    //         {
    //             source: "/",
    //             destination: "/",
    //         },
    //     ];
    // },

    // website headers
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: "/",
                headers: securityHeaders,
            },
        ];
    },

    // allowed external images
    images: {
        domains: ["example.com"],
    },
};

module.exports = nextConfig
