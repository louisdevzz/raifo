/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env:{
        API_LOGIN_PATH:process.env.API_LOGIN_PATH
    }
};

export default nextConfig;
