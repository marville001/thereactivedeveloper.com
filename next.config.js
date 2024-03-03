/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.thereactivedeveloper.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "www.mountaingoatsoftware.com",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig
