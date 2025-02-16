export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (response.status === 200) {
    const data = await response.json();
    // console.log(data);
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
    // console.log(data);
    return data;
  }
}

// TODO: Create another api for fetching products by category
// Eg: https://fakestoreapi.com/products/category/{category}

export const getProductsByCategory = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (response.status === 200) {
    const data = await response.json();
    // console.log(data);
    return data;
  }
}

export const getProductById = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (response.status === 200) {
    const data = await response.json();
    // console.log(data);
    return data;
  }
}

export const getProductForMeUsingCategory = async (category) => {

  console.log(`I received category ${category}`);

  let url = `https://fakestoreapi.com/products/category/${category}`;

  console.log("I created URL For fetching products, waiting for server response", url);

  const response = await fetch(url);

  if(response.status == 200) {
    
    const data = await response.json();

    console.log("Got new Products, thank you server", data);

    return data;
  }


}