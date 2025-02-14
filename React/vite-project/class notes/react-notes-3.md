### **Detailed Notes on `useEffect` in React**

[YouTube Tutorial - `useEffect` in React](https://youtu.be/0ZJgIjIuY7U?si=7zcKOdq01ZnsvbT1)

`useEffect` is a React Hook that lets you perform side effects in function components. It runs after the component is rendered and has two key use cases:

1. **With dependencies:** Runs only when specified dependencies change.
2. **Without dependencies:** Runs after every render.

---

### **1. `useEffect` Without Dependencies**

When you use `useEffect` without specifying any dependencies:

```jsx
useEffect(() => {
  // Side effect code here
});
```

**Behavior:**

- This runs after every render, including the initial render.
- Can cause performance issues if it runs too frequently or triggers unnecessary API calls.

**Example Use Case:**

```jsx
useEffect(() => {
  console.log("Component rendered or updated!");
});
```

---

### **2. `useEffect` With Dependencies**

When you provide an array of dependencies:

```jsx
useEffect(() => {
  // Side effect code here
}, [dependency1, dependency2]);
```

**Behavior:**

- It runs on the initial render.
- It only runs again when one of the dependencies changes.

**Example Use Case:** Fetching data based on category change:

```jsx
import { useState, useEffect } from "react";

function ProductList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [products, setProducts] = useState([]);

  // Fetch categories on initial render
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []); // Empty dependency array ensures this runs only once

  // Fetch products when `selectedCategory` changes
  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [selectedCategory]); // This runs when `selectedCategory` changes

  return (
    <div>
      <h1>Products</h1>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
```

---

### **Dependency Management**

- **Empty dependency array (`[]`):** Runs only once, typically used for fetching data on mount or setting up subscriptions.
- **Single or multiple dependencies:** Runs only when specified dependencies change. Useful for making API calls or updating state when user actions trigger changes.
- **No dependency array:** Avoid this unless you need to run on every render (rare use case).

---

### **Common Mistakes to Avoid**

1. **Missing Dependencies:**  
    Forgetting to include all variables that your effect relies on can lead to bugs or stale data.
    
    ```jsx
    useEffect(() => {
      // You should include `selectedCategory` in the dependency array
      fetchProducts(selectedCategory);
    }, []);
    ```
    
    **Fix:**  
    Add all necessary dependencies to the array:
    
    ```jsx
    useEffect(() => {
      fetchProducts(selectedCategory);
    }, [selectedCategory]);
    ```
    
2. **Infinite Loops:**  
    Accidentally setting state inside `useEffect` without a proper dependency array can cause infinite loops.
    
    ```jsx
    useEffect(() => {
      setData("new data"); // This causes a re-render and re-triggers the effect
    });
    ```
    
    **Fix:** Ensure the state update is conditional or has appropriate dependencies.
    

---

### **useEffect with Cleanup**

If your effect creates subscriptions, timers, or other side effects, you should clean them up:

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running interval");
  }, 1000);

  return () => clearInterval(interval); // Cleanup on component unmount
}, []);
```

---

### **Summary of Key Points:**

1. **Without Dependencies:** Runs after every render. Use cautiously.
2. **With Empty Dependency Array (`[]`):** Runs only once (on mount).
3. **With Dependencies:** Runs when one or more specified dependencies change.
4. **Cleanup Function:** Important for cleaning up side effects like subscriptions or timers to avoid memory leaks.
