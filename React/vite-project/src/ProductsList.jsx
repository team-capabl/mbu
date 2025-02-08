//? What is an API ?

import { useEffect, useState } from "react";
import { getProducts } from "./api";

//? How to fetch api

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

  console.log(search)

  const filteredProducts = products.filter((product) => {
    return product.title.includes(search);
  })

  return (
    <>
      <input
        placeholder="Search Products"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul>
        {filteredProducts.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </>
  );
};

export default ProductsList;
