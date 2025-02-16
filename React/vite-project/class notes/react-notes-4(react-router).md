### **React Router: Detailed Notes**

React Router is a powerful library for creating dynamic, single-page applications (SPAs) in React. It enables navigation between different pages without a full page reload, creating a smoother user experience.

---

## **1. Why Do We Need React Router?**

- **Single Page Applications**: SPAs only load a single HTML page, and routing dynamically renders different components as users navigate.
- **Navigation**: React Router provides seamless navigation between views or components in your application.
- **URL Management**: It manages the browser history to allow users to navigate back and forth using the browser's back/forward buttons.
- **Declarative Routing**: Routes are defined declaratively using JSX, making it easy to understand and maintain.
- **Dynamic Routes**: It supports dynamic routing (e.g., `/product/:id`) to display specific product details.

---

## **2. How to Install React Router**

To install the latest version of React Router, run the following command:

```bash
npm install react-router-dom
```

---

## **3. Basic Concepts of React Router**

1. **`BrowserRouter`**: A wrapper component that provides routing capabilities to the entire app.
2. **`Routes`**: A component that holds all the route definitions.
3. **`Route`**: Defines a specific path and the component to render.
4. **`Link`**: A component to navigate between routes without reloading the page.
5. **`useParams`**: A hook to extract route parameters (e.g., product ID).
6. **`useNavigate`**: A hook to programmatically navigate to other routes.

---

## **4. Example: Using React Router for FakeStore API**

### **Steps to Implement:**

We will create:

1. A Home Page (`/`)
2. A Products Page (`/products`)
3. A Product Detail Page (`/products/:id`)

---

### **Folder Structure:**

```plaintext
src/
  components/
    Home.jsx
    Products.jsx
    ProductDetail.jsx
  App.js
  index.js
```

---

### **Code Example**

#### **1. `App.js` - Main Application with Routes**

```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>FakeStore App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

---

#### **2. `Home.jsx` - Home Page**

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to FakeStore</h2>
      <p>Browse through our collection of products.</p>
      <Link to="/products">
        <button>View Products</button>
      </Link>
    </div>
  );
}

export default Home;
```

---

#### **3. `Products.jsx` - Products Page**

This page fetches and displays a list of products from the FakeStore API.

```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
```

---

#### **4. `ProductDetail.jsx` - Product Detail Page**

This page fetches and displays detailed information about a single product based on its ID.

```jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Extract the product ID from the route
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/products">
        <button>Back to Products</button>
      </Link>
    </div>
  );
}

export default ProductDetail;
```

---

### **Explanation of Key Concepts**

4. **Navigation with `Link`**:
    
    - Instead of using `<a>` tags, we use `<Link>` to navigate without a full page reload.
    - Example: `<Link to="/products">View Products</Link>`
5. **Dynamic Route Parameters**:
    
    - The path `/products/:id` in `App.js` defines a dynamic route.
    - `useParams` is used to extract the `id` from the URL in `ProductDetail.jsx`.
6. **Fetching Data**:
    
    - `Products.jsx` fetches all products from the FakeStore API and displays them as links.
    - `ProductDetail.jsx` fetches data for the selected product based on the `id` parameter.
7. **BrowserRouter**:
    
    - Wrapping the app in `BrowserRouter` enables the use of `Routes` and `Link`.

---

## **5. Running the Application**

8. Ensure you have installed `react-router-dom`:
    
    ```bash
    npm install react-router-dom
    ```
    
9. Run the app:
    
    ```bash
    npm run dev
    ```
    
10. Navigate through the app:
    - Visit `/` to see the home page.
    - Click "View Products" to navigate to `/products`.
    - Click on any product to navigate to its detail page (`/products/:id`).

---

## **6. Summary**

React Router allows you to build dynamic, single-page applications with ease. It provides:

- Seamless navigation
- URL parameter extraction
- Declarative route definitions

With React Router, your app can provide a smooth, modern user experience without page reloads.