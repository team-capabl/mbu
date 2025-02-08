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