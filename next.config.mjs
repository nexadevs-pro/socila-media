/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "images.rawpixel.com",
          },
          {
            hostname: "img.freepik.com",
          },
          {
            hostname: "thumbs.dreamstime.com",
          }
        ],
      },
};

export default nextConfig;
