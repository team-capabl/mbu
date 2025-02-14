export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

// getProducts();


// TODO: Create new api for fetching users list from
//  url - https://jsonplaceholder.typicode.com/users
// Create new component called UsersList and display the names


// TODO: Create new api for fetching product categories
// https://fakestoreapi.com/products/categories

export const getProductCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
}

// TODO: Create another api for fetching products by category
// Eg: https://fakestoreapi.com/products/category/{category}
// TODO: Create another api for fetching products by category
// Eg: https://fakestoreapi.com/products/category/{category}
export const getProductsByCategory = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
}