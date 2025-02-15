import { useEffect, useState } from "react";
import { getProductCategories, getProducts, getProductsByCategory, getProductForMeUsingCategory } from "./api";
import { ProductCard } from "./ProductCard/ProductCard";
import { Input } from "./components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./components/ui/select";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  // create another state for storing categories
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("")
  const [search, setSearch] = useState("");

  const fetchProductsData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const fetchCategoryData = async () => {
    // Call the new api which you created
    const data = await getProductCategories();
    setCategories(data)
  }

  // const fetchProductByCategoryData = async (category) => {
  //   // Call the new api which you created
  //   const data = await getProductsByCategory(category);
  //   setProducts(data)
  // }

  const categoryUpdateTrigger = async() => {
    console.log(`Inside Trigger: Category Changed to ${selectedCategory}`);
    // Call Api and fetch products according to selectedCategory
   const receivedData = await getProductForMeUsingCategory(selectedCategory);
   console.log("Received Data",receivedData);
   setProducts(receivedData);
  }

    // UseEffect With Dependency
  // This function will get called whenever selectedCatgory changes
  useEffect(()=>{

    console.log("INSIDE USE EFFECT");
    categoryUpdateTrigger();

  },[selectedCategory])
  
  // useEffect(() => {

  //   fetchProductByCategoryData(selectedCategory);
  // }, [selectedCategory]);



  // Use Effect Without Dependency
  // This function will get called first time when our Component is loaded
  useEffect(() => {

    console.log("I wil get called only first time");
    fetchProductsData();
    fetchCategoryData();
  }, []); //Component Did Mount

  // console.log(categories);

  const filteredProducts = products.filter((product) => {
    return product.title.includes(search);
  });

  // console.log(selectedCategory)

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

      <Select onValueChange={(selectedVal) => {
        setSelectedCategory(selectedVal);
      }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a category" />
          <SelectContent>
            {categories.map((category) => {
              return (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              );
            })}
          </SelectContent>
        </SelectTrigger>
      </Select>

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
