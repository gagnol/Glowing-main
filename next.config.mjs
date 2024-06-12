/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname:  "images-na.ssl-images-amazon.com",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },
          {
            protocol: "https",
            hostname: "www.amazon.com",
          },
          {
            protocol: "https",
            hostname: "m.media-amazon.com",
          },
          {
            protocol: "https",
            hostname: "sp-bootstrap.global.ssl.fastly.net",
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com"
          },
          {
            protocol: "https",
            hostname: "www.themealdb.com"
          },
          {
            protocol: "https",
            hostname: "v2.exercisedb.io"
            
          },
          {
            protocol: "https",
            hostname: "i.ytimg.com"
            
          }
                 
        ],
      },

};

export default nextConfig;
