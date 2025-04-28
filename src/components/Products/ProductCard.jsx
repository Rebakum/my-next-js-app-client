"use client";

import Image from "next/image";

const ProductCard = ({ product }) => {
  console.log(product);
  const { productName, Category, brand, price, image } = product;

  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
      <div>
        <Image
          src={image}
          alt={productName}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-semibold">{productName}</h2>
        <p className="text-gray-500 text-sm mb-1">Category: {Category}</p>
        <p className="text-gray-500 text-sm mb-1">Brand: {brand}</p>
        <p className="text-primary font-bold text-md">${price}</p>
        <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
