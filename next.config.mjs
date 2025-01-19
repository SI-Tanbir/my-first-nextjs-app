/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['www.themealdb.com'], // Add the hostname here
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*',  
          port: '',         
          pathname: '*',
        }, 
        
      ],
    },
  };
  
  export default nextConfig;  
  