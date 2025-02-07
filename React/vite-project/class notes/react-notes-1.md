---

# Full Stack Development - React Basics: JSX, Props, and Lists

---

## Agenda

In today’s session, we’ll cover:
- What is React and its advantages
- Setting up React using Vite
- Components and JSX (JavaScript + XML)
- Props
- Rendering Lists
- Component composition

---

## Challenges in Modern Frontend Development

1. **Code Maintainability**:
   Managing large-scale applications requires a structured approach.
   
2. **Single Page Applications (SPA)**:
   Modern SPAs reduce page reloads using one HTML file and browser's History API.

3. **Performance**:
   With features like search, real-time messaging, and profiles (e.g., LinkedIn), DOM updates can be costly. React optimizes this.

---

**Lot of feature in our WebApp**
- Hence the DOM manipulation is costly.

As we open linkedin we see a lot of functionalities such as shown below like home, mynetwork,jobs, messaging, me etc.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/489/original/upload_a8b0bac0a165c827242385575fafe404.png?1699630915)
 
**Single Page Application (SPA)**
* That does not reload even if the URL is changed
* It is done by having single html file which utilizes the History API.
*  the cross team communication, and hot reload. This done using the Create-React-App ad Vite.

**Asking Question**
**Q:** Then why there is so much name of react?
**Ans:** We have tools like document API(least performant), where the react can effeciently help to do  the DOM manipulation.

---
title: What is React
description: Discussion of react in detail.

---


## What is React?

**React** is a JavaScript library for building user interfaces efficiently.  

React works on different platforms:
| Desktop  | Mobile         | Web          | Virtual Reality |
|----------|----------------|--------------|-----------------|
| Electron | React Native   | React DOM    | React VR        |

React uses **Reconciliation** for optimized UI updates.

---
### Setting Up React Using Vite

Get started with React in no time using Vite by following these steps:

1. **Install Vite**:  
   Run the following command in your terminal:
   ```bash
   npm create vite@latest
   ```
   If you face any error here: Try installation using gitbash(Refer `installation(gitbash).md` notes) 

   You'll be prompted to:
   - **Select a framework**: Choose `React`.
   - **Specify a folder name**: The default is `vite-project`. Change it if needed.
   - **Choose a variant**:  
     - Select **JavaScript** or **JavaScript + SWC**.
     - The **SWC** (Speedy Web Compiler) variant is optimized for faster build times.

2. **Navigate to the Project Directory**:  
   Move into the folder created by Vite:
   ```bash
   cd vite-project
   ```
   If you've specified a custom folder name during setup, replace `vite-project` with that name.

3. **Install Dependencies**:  
   Install all necessary packages:
   ```bash
   npm install
   ```

4. **Start the Development Server**:  
   Launch your project to start development:
   ```bash
   npm run dev
   ```
   The development server will run, and the app can be accessed at the provided URL (usually `http://localhost:5173`).
   
---

## First React Application with Vite

Update the `App.jsx` file inside the `src` folder:
```jsx
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

This setup uses JSX, which makes writing React components similar to HTML but allows embedding JavaScript expressions.

---

## Key Concepts in React

### 1. **Components**

React components are reusable, isolated pieces of code.
**Example:**
```jsx
function Greeting() {
  return <h1>Welcome to React</h1>;
}
```

### 2. **JSX (JavaScript XML)**

JSX allows us to write HTML-like code in JavaScript:
```jsx
function Greeting() {
  const name = "React";
  return <h1>Hello, {name}!</h1>;
}
```
Here, `{name}` embeds JavaScript expressions into JSX.

### 3. **Props (Properties)**

Props allow components to receive dynamic data:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage:
<Welcome name="John" />
```

### 4. **Component Composition**

One component can render another:
```jsx
function Parent() {
  return (
    <div>
      <Child message="React is awesome!" />
    </div>
  );
}

function Child(props) {
  return <p>{props.message}</p>;
}
```

### 5. **Rendering Lists**

Rendering a list of items is simple in React:
```jsx
const names = ["Alice", "Bob", "Charlie"];

function NameList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
```
Note: Here we have used `map` syntax instead of forloops. More on that is discussed in below section.

## Key Prop

Do you see any mistake here?

![key error](image.png)

-> Every child in a list should have a key prop. A unique value for each list item.
-> A key ensures that none of the component is rendered multiple times. 
-> It also helps to identify each item uniquely.
-> Purpose of react is to optimize DOM.
-> Browser is very bad a doing DOM manipulation.
-> React makes it easier for the browser to manipulate DOM structure.

This can be fixed by adding `key` prop inside your map

```jsx
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
```

---
### Creating, Importing, and Exporting Components

#### Creating a Component
Components can be created as individual JavaScript files for better modularity and reusability. For example, create a new file named `ProfileCard.js` and define your component:

```jsx
// ProfileCard.js
function ProfileCard({ name, description }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', borderRadius: '8px' }}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;
```

#### Exporting a Component
Components can be exported in two ways:

1. **Default Export** (most common):
   - Allows a single component to be exported per file.
   - Import syntax doesn’t require curly braces.
   ```jsx
   export default ProfileCard;
   ```

2. **Named Export**:
   - Allows multiple components to be exported from a file.
   - Requires curly braces when importing.
   ```jsx
   export const ProfileCard = ({ name, description }) => (
       <div>
           <h2>{name}</h2>
           <p>{description}</p>
       </div>
   );
   ```

#### Importing a Component
Import components into another file to use them within your application:

1. **Import Default Export**:
   ```jsx
   import ProfileCard from './ProfileCard';
   ```

2. **Import Named Export**:
   ```jsx
   import { ProfileCard } from './ProfileCard';
   ```

### Example: Using an Imported Component
In a parent component file, import and use the `ProfileCard` component:

```jsx
import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    return (
        <div>
            <ProfileCard name="John Doe" description="Software Developer" />
        </div>
    );
}

export default App;
```

---


## Using `map` and `filter` in React
### Why `map` and `filter`?
1. **Readability**: Using `map` and `filter` results in cleaner and more concise code compared to `for` loops.
2. **Functional Approach**: Encourages immutability and avoids modifying the original array.
3. **Chaining Capabilities**: You can chain multiple operations (like `map`, `filter`, and `reduce`) easily.

### `map` in React
`map` is used to transform an array into another array by applying a function to each element.

#### Example:
Displaying a list of items in React:
```jsx
const fruits = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}
```

### `filter` in React
`filter` is used to create a new array that includes elements meeting certain criteria.

#### Example:
Filtering items based on a condition:
```jsx
const numbers = [1, 2, 3, 4, 5, 6];

function EvenNumbers() {
    const evenNumbers = numbers.filter(number => number % 2 === 0);

    return (
        <ul>
            {evenNumbers.map((number, index) => (
                <li key={index}>{number}</li>
            ))}
        </ul>
    );
}
```

### Comparison with `for` Loop
Using `map` and `filter` improves code readability and adheres to functional programming principles, whereas `for` loops often require manual array manipulation.

#### `for` Loop Example:
```jsx
const items = ['A', 'B', 'C'];
const result = [];
for (let i = 0; i < items.length; i++) {
    result.push(<li key={i}>{items[i]}</li>);
}
```
This can be replaced with:
```jsx
const items = ['A', 'B', 'C'];
const result = items.map((item, i) => <li key={i}>{item}</li>);
```

---

## Additional Array Methods for React
1. **`reduce`**:
   Used for accumulating values or reducing an array to a single output.
   ```jsx
   const numbers = [1, 2, 3, 4];
   const total = numbers.reduce((sum, num) => sum + num, 0);

   function TotalSum() {
       return <h2>Total: {total}</h2>;
   }
   ```

2. **`find`**:
   Finds the first element that matches a condition.
   ```jsx
   const people = [
       { name: 'John', age: 25 },
       { name: 'Jane', age: 30 },
   ];
   const person = people.find(p => p.age > 26);

   function FoundPerson() {
       return <p>Found: {person ? person.name : 'None'}</p>;
   }
   ```

3. **`some` and `every`**:
   - `some`: Checks if at least one element satisfies a condition.
   - `every`: Checks if all elements satisfy a condition.
   ```jsx
   const ages = [18, 22, 25];

   const hasMinor = ages.some(age => age < 18);
   const allAdults = ages.every(age => age >= 18);
   ```

---

### Summary

1. React simplifies UI development with components, props, and JSX.
2. Vite makes it easy to get started with React.
3. Concepts like props and component composition enable reusable, scalable code.
4. Why to use map, filter, reduce instead of for/while loops in React

Experiment with these examples to build your first React project!

### Further Study

If you want to explore more on react, checkout docs - https://react.dev/learn
