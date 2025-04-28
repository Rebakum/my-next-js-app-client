import ProductCard from "@/components/Products/ProductCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20">
        Welcome to Our E-commerce Store
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
