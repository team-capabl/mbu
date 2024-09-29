let products = []
let prices = []

function addMultipleProducts(newProducts, newPrices) {
    newProducts.map((product, index) => {
        // Add Product to our existing list
        products.push(product);
        prices.push(newPrices[index])
    })
}

let newMobiles = ["One Plus", "iPhone", "Samsung"]
let newPrices = [15000, 100000, 70000]
addMultipleProducts(newMobiles, newPrices)

console.log(newMobiles, newPrices)

function filterProductsWithinRange(minPrice, maxPrice) {
    let productsWithinBudget = products.map((product, index) => {
        let productPrice = prices[index];
        // greater than or equal to minPrice and less than or equal to maxPrice
        if(productPrice >= minPrice && productPrice <= maxPrice) {
            return product
        }
    })
    console.log(productsWithinBudget)
}

// [ 'One Plus', 'iPhone', 'Samsung' ] [ 15000, 100000, 70000 ]
// filterProductsWithinRange(10000, 75000)

// Input: [ 15000, 100000, 70000 ]
// Output: [ 14000, 99000, 69000 ]

function applyDiscount(discount) {
    let discountedPrices = prices.map((price, index) => {
        let discountedPrice = price - discount
        return discountedPrice
    })
    return discountedPrices
}

console.log(applyDiscount(2000))

// TODO: Try to applyDiscount in-terms of percentage
function applyDiscountInTermsOfPercentage(percentage) {
    
}