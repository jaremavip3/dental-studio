import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
        pathname: "/docs/gallery/masonry/",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
