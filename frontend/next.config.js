/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Disable trailing slash for Capacitor compatibility
    trailingSlash: false,
}

module.exports = nextConfig
