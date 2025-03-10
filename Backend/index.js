import express from "express"

const app = express();
app.use(express.json())

let products = [{
    "id": 1,
    "name": "Samsung Galaxy S25",
    "price": 110000,
    "category": "mobiles"
}]

app.get("/", (req, res) => {
    res.json(products)
})

app.get("/:id", (req, res) => {
    console.log("User is Asking for Id => ", req.params.id)
    const product = products.filter(p => p.id === Number(req.params.id))
    console.log(product)
    res.json(product)
})  

app.post("/", (req, res) => {
  console.log("Adding Product ", req.body)
  const newId = products.length + 1;
  
//   TODO: Learn about Spread operator in javascript and re-write this function using that
  let newProduct = req.body;
  newProduct.id = newId

  products.push(newProduct)
  res.send("Successfully Created")
});

app.listen("8000", () => {
    console.log("Server is Running")
})