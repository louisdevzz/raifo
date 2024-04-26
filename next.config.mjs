/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env:{
        API_LOGIN_PATH:process.env.API_LOGIN_PATH,
        API_REGISTER_PATH:process.env.API_REGISTER_PATH
    }
};

export default nextConfig;
