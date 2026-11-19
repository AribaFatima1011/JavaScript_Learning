const prompt = require("prompt-sync")();
const fs = require("fs");
let cart = [];
const products = [
    {
        id : 101,
        name : "Samsung Galaxy S24",
        price : 798,
        category : "Electronics",
        stock : 11,
        rating : 4.7 
    },
    {
        id : 102,
        name : "iPhone 15 Pro",
        price : 999,
        category : "Electronics",
        stock : 18,
        rating : 4.9
    },
    {
        id : 103,
        name : "Dell Inspiron 15",
        price : 776,
        category : "Electronics",
        stock :20 ,
        rating : 4.6
    },
    {
        id : 104,
        name : "HP Pavilion Laptop",
        price : 987,
        category : "Electronics",
        stock : 14,
        rating : 4.8
    },
    {
        id : 105,
        name : "Cotton Hoodie",
        price : 333,
        category : "Clothing",
        stock : 33,
        rating :4.0 
    },
    {
        id : 106,
        name : "Sunscreen SPF 50",
        price : 20,
        category : "Beauty",
        stock : 50,
        rating : 4.3
    },
    {
        id : 107,
        name : "Hair Dryer",
        price : 54,
        category : "Beauty",
        stock : 44,
        rating : 4.5
    },
    {
        id : 108,
        name : "Gaming Chair",
        price : 43,
        category : "Furniture",
        stock : 32,
        rating : 4.8
    },
    {
        id : 109,
        name : "Wall Clock",
        price : 20,
        category : "Home & Kitchen",
        stock : 12,
        rating : 4.5
    },
    {
        id : 110,
        name : "Makeup Brush Set",
        price : 19,
        category : "Beauty",
        stock : 10,
        rating : 4.3
    },
    {
        id : 111,
        name : "Electric Kettle",
        price : 44,
        category : "Home & Kitchen",
        stock : 33,
        rating : 4.6
    },
    {
        id : 112,
        name : "Table Lamp",
        price : 34,
        category : "Home & Kitchen",
        stock : 22,
        rating : 4.2
    },
    {
        id : 113,
        name : "Bedside Table",
        price : 99,
        category : "Furniture",
        stock : 9,
        rating : 4.4
    },
    {
        id : 114,
        name : "Electric Toothbrush",
        price : 41,
        category : "Personal Care",
        stock : 18,
        rating : 4.0
    },
    {
        id : 115,
        name : "Women's Perfume",
        price : 33,
        category : "Personal Care",
        stock : 12,
        rating : 4.4
    },
    {
        id : 116,
        name : "Water Bottle",
        price : 13,
        category : "Home & Kitchen",
        stock : 98,
        rating : 4.9
    },
    {
        id : 117,
        name : "Men's Perfume",
        price : 35,
        category : "Personal Care",
        stock : 99,
        rating : 4.7
    },
    {
        id : 118,
        name : "Women's Denim Jacket",
        price : 76,
        category : "Clothing",
        stock : 45,
        rating : 4.7
    },
    {
        id : 119,
        name : "Samsung Smart Watch",
        price : 287,
        category : "Electronics",
        stock : 34,
        rating : 3.9
    },
    {
        id : 120,
        name : "Air Fryer",
        price : 47,
        category : "Home & Kitchen",
        stock : 21,
        rating : 4.6 
    }
]
let coupons = [
    {
        id : 1,
        code : "SAVE15",
        discount : 15,
        minPurchase : 1500,
        isActive : true
    },
    {
        id : 2,
        code : "SAVE20",
        discount : 20,
        minPurchase : 2000,
        isActive : true
    },
    {
        id : 3,
        code : "SAVE30",
        discount : 30,
        minPurchase : 2500,
        isActive : false
    }
]
let choice;

while(choice !== 13){
    showMenu();

    switch(choice){
        case 1:
            displayProducts();
            break;

        case 2:
            searchProducts();
            break;

        case 3:
            filterProductsByCategory();
            break;

        case 4:
            filterProductsByPrice();
            break;

        case 5:
            viewProductDetails();
            break;

        case 6:
            addToCart();
            break;

        case 7:
            updateQuantity();
            break;

        case 8:
            removeFromCart();
            break;

        case 9:
            applyCoupon();
            break;

        case 10:
            CalculateCartTotal();
            break;

        case 11:
            validateCheckout();
            break;

        case 12:
            saveCart();
            restoreCart();
            break;

        case 13:
            console.log("Exit successfully");
            break;

        default:
            console.log("Invalid choice");
    }
}

function showMenu(){
    console.log("-- E-Commerce Shopping Cart System --\n");
    console.log("1. Display All Products");
    console.log("2. Search Products by Name");
    console.log("3. Filter Products by Category");
    console.log("4. Filter Products by Price Range");
    console.log("5. View Product Details");
    console.log("6. Add Product to Cart");
    console.log("7. Increase or Decrease Product Quantity");
    console.log("8. Remove Product from Cart");
    console.log("9. Apply Discount Coupon");
    console.log("10. Calculate Cart Total");
    console.log("11. Validate Checkout");
    console.log("12. Save and restore Cart Data");
    console.log("13. Exit");

    choice = Number(prompt("Enter your choice:"));
}
function displayProducts(){
    if(products.length === 0){
        console.log("No product is available");
    }
    else{
        products.forEach((product) => {
            console.log(`Product ID: ${product.id}`);
            console.log(`Product Name: ${product.name}`);
            console.log(`Product Price: $${product.price}`);
            console.log(`Product Category: ${product.category}`);
            console.log(`Product Stock: ${product.stock}`);
            console.log(`Product Rating: ${product.rating}`);
            console.log("-------------------------------");
    }) 
    }
}
function searchProducts(){
    let searchName = prompt("Enter Name of searching product:");
    searchName = searchName.trim().toLowerCase();
    if(searchName === ""){
        console.log("Name cannot be empty");
        return;
    }
    const filteredProducts = products.filter((product) =>{
        return product.name.toLowerCase().includes(searchName)
    })
    if(filteredProducts.length === 0){
        console.log(`${searchName} is not available`);
    }
    else{
        filteredProducts.forEach((product) => {
            console.log("---Search Product---")
            console.log(`Product ID: ${product.id}`);
            console.log(`Product Name: ${product.name}`);
            console.log(`Product Price: $${product.price}`);
            console.log(`Product Category: ${product.category}`);
            console.log(`Product Stock: ${product.stock}`);
            console.log(`Product Rating: ${product.rating}`);
            console.log("-------------------------------");
        })
    }
}
function filterProductsByCategory(){
    let category = prompt("Enter Category that you wanna select:").trim().toLowerCase();
    if(category === "all"){
        displayProducts();
        return;
    }
    if(category === ""){
        console.log("Category cannot be empty");
        return;
    }
    let searchedCategory = products.filter((product) => {
        return category === product.category.toLowerCase();
    })
    if(searchedCategory.length > 0){
        console.log("Products under ", category, " are:");
        searchedCategory.forEach((product) => {
            console.log(`Product ID: ${product.id}`);
            console.log(`Product Name: ${product.name}`);
            console.log(`Product Price: $${product.price}`);
            console.log(`Product Category: ${product.category}`);
            console.log(`Product Stock: ${product.stock}`);
            console.log(`Product Rating: ${product.rating}`);
            console.log("-------------------------------");
        })
    }
    else{
        console.log(category, " Not Fonud!");
    }
}
function filterProductsByPrice(){
    let minPrice = Number(prompt("Enter minimum price:").trim());
    let maxPrice = Number(prompt("Enter maximum price:").trim());
    if(minPrice === 0 || maxPrice === 0){
        console.log("Price is Empty!!!");
        return;
    }
    else if (isNaN (minPrice)|| isNaN (maxPrice)){
        console.log("Invalid Price");
        return;
    }
    else if (minPrice<0 || maxPrice<0){
        console.log("Price cannot be negative");
        return;
    }
    else if(minPrice>maxPrice){
        console.log("Maxprice should be greater than Minprice");
        return;
    }
    let filterProducts = products.filter((product) => {
        return product.price >= minPrice && product.price <= maxPrice
    });
    if(filterProducts.length > 0) {
        console.log("Products found in this price range:");
        filterProducts.forEach((product) => {
            console.log(`Product ID: ${product.id}`);
            console.log(`Product Name: ${product.name}`);
            console.log(`Product Price: $${product.price}`);
            console.log(`Product Category: ${product.category}`);
            console.log(`Product Stock: ${product.stock}`);
            console.log(`Product Rating: ${product.rating}`);
            console.log("-------------------------------");
        });
    console.log("Total products found:", filterProducts.length);
    } 
    else {
        console.log("No product found in this price range!");
   }
}
function viewProductDetails(){
    let viewProductID = prompt("Enter ID of product you wanna view details of:").trim();

    if(viewProductID === "" || !Number.isInteger(Number(viewProductID))){
        console.log("Invalid ID");
        return;
    }
    ID = Number(viewProductID);
    let result = products.find((product) => {
        return ID === product.id;
    });

    if(result) {
        console.log("---Product Details---");
        console.log(`Product ID: ${result.id}`);
        console.log(`Product Name: ${result.name}`);
        console.log(`Product Price: $${result.price}`);
        console.log(`Product Category: ${result.category}`);
        console.log(`Product Stock: ${result.stock}`);
        console.log(`Product Rating: ${result.rating}`);
        console.log("-------------------------------");
    }
    else{
        console.log("Product with ID", ID, "Not Exist!");
    }
}
function addToCart() {
    let productIdInput = prompt("Enter product id:");

    if (productIdInput == null || productIdInput.trim() === "") {
        console.log("Product id cannot be empty");
        return;
    }

    let productId = Number(productIdInput);

    if (isNaN(productId) || !Number.isInteger(productId) || productId <= 0) {
        console.log("Please Enter a valid product ID!");
        return;
    }

    let selectedProduct = products.find((product) => {
        return product.id === productId;
    })
    if (!selectedProduct) {
        console.log("Product not found!");
        return;
    }

    let quantityInput = prompt("Enter Quantity:");

    if (quantityInput == null || quantityInput.trim() === "") {
        console.log("Quantity cannot be empty!");
        return;
    }

    let quantity = Number(quantityInput);

    if (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
        console.log("Please Enter a positive whole number!");
        return;
    }

    let existingProduct = cart.find((product) => {
        return product.id === productId;
    })
    let totalQuantity = quantity;

    if (existingProduct) {
        totalQuantity += existingProduct.quantity;
    }

    if (totalQuantity > selectedProduct.stock) {
        console.log("Not enough stock available!");
        return;
    }

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } 
    else {
        cart.push({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: quantity
        });
    }

    console.log("Product added to cart successfully!");

    cart.forEach((product) => {
        console.log(`Product ID: ${product.id}`);
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Price: $${product.price}`);
        console.log(`Product Quantity: ${product.quantity}`);
        console.log(`Total: $${product.price * product.quantity}`);
    });
}
function updateQuantity(){
    let updatedID = prompt("Enter ID of product whose quantity you wanna update:").trim();
    if(updatedID === ""){
        console.log("Invalid ID");
        return;
    }
    updatedID = Number(updatedID);
    let result = cart.find((product) => {
        return updatedID === product.id;
    });
    let cartProduct = products.find((product) => {
        return updatedID === product.id;
    });
    if(!result){
        console.log("No matching ID found");
        return;
    }
    else{
        console.log("---Current quantity---");
        console.log(`Product ID: ${result.id}`);
        console.log(`Product Name: ${result.name}`);
        console.log(`Product Quantity: ${result.quantity}`);
        let choice = Number(prompt("Do you wanna increase or decrease:(Press 1 to increase,2 to decrease)").trim());
        if(choice !== 1 && choice !== 2 || choice === 0 ){
            console.log("Invalid Choice");
            return;
        }
        else if(choice === 1){
            let increaseQuantity = prompt("How much quantity you want to increase:");
            if (increaseQuantity === null || increaseQuantity.trim() === "") {
                console.log("Quantity cannot be empty!");
                 return;
            }
            increaseQuantity = Number(increaseQuantity);
            if (isNaN(increaseQuantity) || !Number.isInteger(increaseQuantity) || increaseQuantity <= 0) {
                console.log("Please enter a positive whole number!");
                 return;
            }
            if(result.quantity+increaseQuantity > cartProduct.stock){
                console.log("Not enough stock available");
                return;
            }
            else{
                result.quantity += increaseQuantity;
            }
        }
        else{
            let decreaseQuantity = prompt("How much quantity you want to decrease:");
            if (decreaseQuantity === null || decreaseQuantity.trim() === "") {
                console.log("Quantity cannot be empty!");
                 return;
            }
            decreaseQuantity = Number(decreaseQuantity);
            if (isNaN(decreaseQuantity) || !Number.isInteger(decreaseQuantity) || decreaseQuantity <= 0) {
                console.log("Please enter a positive whole number!");
                 return;
            }
            if(decreaseQuantity >= result.quantity){
                let index = cart.findIndex((product) => {
                    return product.id === updatedID;
                })
                cart.splice(index, 1);
            }
            else{
                result.quantity -= decreaseQuantity;
            }
        }
    }
}
function CalculateCartTotal(){
    if(cart.length == 0){
              console.log("Your cart is empty!");
             return;
    }
    let subtotal = cart.reduce((total , product) => {
     return total + (product.price * product.quantity)
},0);
   
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    let discountInput = prompt("Enter discount percentage:");
    if (discountInput.trim() === ""){
        console.log("Discount Percentage cannot be empty!");
        return;
    }
    let discountPercent = Number(discountInput);
    if(isNaN(discountPercent) || discountPercent<0 || discountPercent>100){
        console.log("Please enter a valid percentage!");
        return;
    }
    let discountAmount = subtotal * (discountPercent / 100);
    let finalTotal = subtotal - discountAmount;
    console.log(`Subtotal: ${subtotal.toFixed(2)}`);
            console.log(`Discount: (${discountPercent}%): $${discountAmount.toFixed(2)}`);
            console.log(`FinalTotal: ${finalTotal.toFixed(2)}`);
    }
function removeFromCart(){
    if(cart.length == 0){
        console.log("Your cart is empty is empty!");
        return;
    }
    let productIdInput = prompt("Enter Product id to remove:");
    if (productIdInput === null || productIdInput.trim() === ""){
        console.log("Product Id cannot be empty!");
        return;
    }
    let productId = Number(productIdInput);
    if (isNaN(productId) || !Number.isInteger(productId) || productId<=0){
        console.log("Please enter a valid product ID:");
        return;
    }
    let productIndex = cart.findIndex((product) => {
        return product.id === productId;
    })
    if(productIndex === -1){
        console.log("Product not found in your cart!");
        return;
    }
    cart.splice(productIndex, 1);
    console.log("Product remove from cart successfully!");
    if(cart.length == 0){
            console.log("Your cart is now is empty!");
            return;
    }
    console.log("Updated Cart:");
     cart.forEach((product) => {
            console.log(`Product ID: ${product.id}`);
            console.log(`Product Name: ${product.name}`);
            console.log(`Product Price: $${product.price}`);
            console.log(`Product Quantity: ${product.quantity}`);
            console.log(`Total : ${product.price * product.quantity}`);
         }) ;
    }
function applyCoupon() {

    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    let total = cart.reduce((sum, product) => {
        return sum + (product.price * product.quantity);
    }, 0);

    console.log(`Original Total: ${total}`);

    let couponCode = prompt("Enter Coupon Code:").trim().toUpperCase();

    if (couponCode === "") {
        console.log("Please enter a coupon code..You have entered nothing!!");
        return;
    }

    let result = coupons.find((coupon) => {
        return coupon.code === couponCode;
    });

    if (!result) {
        console.log("Invalid Coupon Code");
        return;
    }

    if (!result.isActive) {
        console.log("This coupon is inactive");
        return;
    }

    if (total < result.minPurchase) {
        console.log(`Minimum purchase should be ${result.minPurchase}`);
        return;
    }

    let discountAmount = (total * result.discount) / 100;

    let finalTotal = total - discountAmount;

    console.log(`Discount: ${discountAmount}`);
    console.log(`Final Total: ${finalTotal}`);
}
function validateCheckout(){
    let name = prompt("Enter full Name:")
    let email = prompt("Enter Email");
    let phno = prompt("Enter phone No.(03xxxxxxxxx):");
    let address = prompt("Enter address:").trim();
    let city = prompt("Enter city:");
    let postalCode = prompt("Enter Postal Code:");
    let namePattern = /^[A-Za-z]+$/;
    if(name.trim() === ""){
        console.log("Name is required");
        return;
    }
    name = name.trim();
    if(!namePattern.test(name)){
        console.log("Invalid Name");
        return;
    }
    let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    if(email.trim() === ""){
        console.log("Email is required");
        return;
    }
    email = email.trim();
    if(!emailPattern.test(email)){
        console.log("Invalid Email");
        return;
    }
    let phnoPattern = /^[0-9]{11}$/;
    if(phno.trim() === ""){
        console.log("Phone No. is required");
        return;
    }
    phno = phno.trim();
    if(!phnoPattern.test(phno)){
        console.log("Invalid Phone No.");
        return;
    }
    if(address === ""){
        console.log("Address is required");
        return;
    }
    if(address.length < 10){
        console.log("Please enter a complete address");
        return;
    }
    let cityPattern = /^[a-zA-Z ]+$/;
    if(city.trim() === ""){
        console.log("City is required");
        return;
    }
    city = city.trim();
    if (!cityPattern.test(city)) {
        console.log("Invalid city name");
        return;
    }
    let postalCodePattern = /^[0-9]{5}$/;
    if(postalCode.trim() === ""){
        console.log("Postal Code is required");
        return;
    }
    postalCode = postalCode.trim();
    if(!postalCodePattern.test(postalCode)){
        console.log("Invalid postal code. Enter exactly 5 digits");
        return;
    }
    console.log("Checkout form is validated");
}
function saveCart() {
   if (cart.length === 0) {
        console.log("Your cart is empty!");
        return;
    }
    let cartData = JSON.stringify(cart, null, 2);
    fs.writeFileSync("cart.json", cartData);
    console.log("Cart data saved successfully!");
}
function restoreCart() {
if (fs.existsSync("cart.json")) {
    let cartData = fs.readFileSync("cart.json", "utf8");
    cart = JSON.parse(cartData);
    console.log("Cart data restored successfully!");
    if (cart.length === 0) {
            console.log("Your cart is empty!");
            return;
        }
        console.log("Restored Cart:");
       cart.forEach((product) => {
            console.log(`Product ID: ${product.id}`);
            console.log(`Product Name: ${product.name}`);
            console.log(`Product Price: $${product.price}`);
            console.log(`Product Quantity: ${product.quantity}`);
            console.log(`Total: $${product.price * product.quantity}`);
        });
 } else {
        console.log("No saved cart data found!");
    }
}
