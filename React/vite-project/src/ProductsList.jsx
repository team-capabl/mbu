import { useEffect, useState } from "react";
import { getProducts } from "./api";
import { ProductCard } from "./ProductCard/ProductCard";
import { Input } from "./components/ui/input";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProductsData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProductsData();
  }, []); //Component Did Mount

  console.log(search);

  const filteredProducts = products.filter((product) => {
    return product.title.includes(search);
  });

  return (
    <>
      <Input
        autoFocus
        className="my-2 mx-auto w-1/2 h-10"
        placeholder="Search Products"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <div className="grid grid-cols-5 gap-4 p-2">
        {filteredProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              imageUrl={product.image}
              price={product.price}
              title={product.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductsList;
