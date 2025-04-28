import Image from "next/image";
import nextimg from "../../assast/image/nextjs-cover-jpg.webp";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1>Gallery</h1>
      <p>Regular image gallery page!</p>
      <img
        src="https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2021/03/29113740/nextjs-cover-jpg-webp.webp"
        alt="Placeholder Image"
        className="h-[300px] mx-auto w-[300px] object-cover rounded-lg shadow-lg"
      />

      <h1> Optimazie image gallery</h1>
      {/* external image user for next.config.js 
      
        const nextConfig = {
        images: {
        remotePatterns: [
        {
            protocol: "https",
            hostname: "**",
        },
        ],
        },
        };  
      */}
      <Image
        src="https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2021/03/29113740/nextjs-cover-jpg-webp.webp"
        alt="Placeholder Image"
        width={300}
        height={300}
        className="h-[300px] w-[300px] mx-auto object-cover rounded-lg shadow-lg"
      />
      <h1> Local image gallery</h1>

      <Image
        src={nextimg}
        alt="nextjs-cover-jpg.webp"
        width={300}
        height={300}
        objectFit="cover"
        className="h-[300px] w-[300px] object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default page;
