const prompt = require("prompt-sync")();
let products = [
    {
        id : 201,
        name : "Mouse",
        price : 1200,
        quantity : 5
    },
    {
        id : 202,
        name : "Key-Board",
        price : 5000,
        quantity : 4
    },
    {
        id : 203,
        name : "USB",
        price : 700,
        quantity : 8
    },
    {
        id : 204,
        name : "Laptop Charger",
        price : 2000,
        quantity : 10
    },
]
let cart = [];
let role;
while(role !== 3){
    mainMenu();
    switch(role){
        case 1:
            adminMenu();
            break;
        case 2:
            customerMenu();
            break;
        case 3:
            console.log("Exit Successfully");
            break;
        default:
            console.log("Invalid Input");
    }
}
function mainMenu(){
    console.log("---Shopping System---\n1.Admin\n2.Customer\n3.Exit");
    role = Number(prompt("Enter your role:(1 or 2 or 3):"));
}
function adminMenu(){
    console.log("---Admin Menu---\n1.Add Products\n2.View Products\n3.Search Product\n4.Update Product\n5.Delete Product\n6.Exit to Main Menu");
    let funcOfAdmin = Number(prompt("Enter Function that you want to do(i.e. 1):"));;
    if(funcOfAdmin === 1){
        addProduct();
    }
    else if(funcOfAdmin === 2){
        viewProduct();
    }
    else if(funcOfAdmin === 3){
        searchProduct();
    }
    else if(funcOfAdmin === 4){
        updateProduct();
    }
    else if(funcOfAdmin === 5){
        deleteProduct();
    }
    else if(funcOfAdmin === 6){
        return;
    }
    else{
        console.log("Invalid Input");
    }
}
function customerMenu(){
    console.log("---Customer Menu---\n1.View Products\n2.Search Products\n3.Add to cart\n4.View cart\n5.Remove Item\n6.Checkout\n7.Exit to Main Menu");
    let funcOfCustomer = Number(prompt("Enter Function that you want to do(i.e. 1):"));;
    if(funcOfCustomer === 1){
        viewProduct();
    }
    else if(funcOfCustomer === 2){
        searchProduct();
    }
    else if(funcOfCustomer === 3){
        addToCart();
    }
    else if(funcOfCustomer === 4){
        viewCart();
    }
    else if(funcOfCustomer === 5){
        removeItem();
    }
    else if(funcOfCustomer === 6){
        checkout();
    }
    else if(funcOfCustomer === 7){
       return;
    }
    else{
        console.log("Invalid Input");
    }
}
function viewProducts(){
    if(products.length === 0){
        console.log("No Product is available");
    }
    else{
        console.log("---Available Products---");
        for(let i = 0; i<products.length; i++){
            console.log("id:", products[i].id);
            console.log("Name:", products[i].name);
            console.log("Price:", products[i].price);
            console.log("Available Stock:", products[i].quantity);
            console.log("---------------------------------");
        }
    }
}
function addProduct(){
    let id = Number(prompt("Enter Product ID:"));
    let name = prompt("Enter Product Name:");
    let price = Number(prompt("Enter Product Price:"));
    let quantity = Number(prompt("Enter Product Quantity:"));

    if(!Number.isFinite(id) || !Number.isFinite(price) ||
       !Number.isFinite(quantity) || name.trim() === ""){
        console.log("Invalid Input");
        return;
    }

    if(id <= 0 || price <= 0 || quantity <= 0 ||
       !Number.isInteger(id) || !Number.isInteger(quantity)){
        console.log("Invalid Product Data");
        return;
    }

    let index = products.findIndex(product => product.id === id);

    if(index !== -1){
        console.log("Product ID already exists");
        return;
    }

    let newProduct = {
        id: id,
        name: name.trim(),
        price: price,
        quantity: quantity
    };

    products.push(newProduct);

    console.log("Product Added Successfully!");
}
function searchProduct(){
    let search_Product = prompt("Enter the name of searching product:");
    for(let i = 0; i<products.length; i++){
        if(search_Product.trim().toLowerCase() === products[i].name.toLowerCase()){
            console.log("id:", products[i].id);
            console.log("Name:", products[i].name);
            console.log("Price:", products[i].price);
            console.log("Available Stock:", products[i].quantity);
            return;
        }
    }
    console.log(`${search_Product} Not Found`);
}
function updateProduct(){
    let updateId = Number(prompt("Enter id of product that you want to update:"));
    let found = false;
    for(let i = 0; i<products.length; i++){
        if(updateId === products[i].id){
            found = true;
            console.log("Update:\n1.Price\n2.Quantity");
            let updatedItem = Number(prompt("Enter your choice:"));
            if(updatedItem === 1){
                let newPrice = Number(prompt("Enter new price:"));
                if(newPrice <= 0 || !Number.isFinite(newPrice)){
                     console.log("Invalid Price");
                    return;
                }
                else{
                    products[i].price = newPrice;
                    console.log("Price updated successfully");
                }
            }
            else if (updatedItem === 2){
                let newQunatity = Number(prompt("Enter new quantity:"));
                if(!Number.isInteger(newQuantity) || newQuantity <= 0){
                     console.log("Invalid Quantity"); 
                }
                else{
                    products[i].quantity = newQunatity;
                    console.log("Quantity updated successfully");
                }
            }
            else{
                console.log("Invalid Choice");
            }
        }
    }
    if(!found){
        console.log(`${updateId} Not Found`)
    }
}
function deleteProduct(){
    let delId = Number(prompt("Enter Id of deleting Object:"));
    let index = products.findIndex(product => product.id === delId);
    if(index !== -1){
        products.splice(index, 1);
        console.log("Deleted successfully");
    }else{
        console.log(delId, " Not found")
    }
}
function addToCart(){
    let cartItem = Number(prompt("Enter ID of product that you want to add to cart:"));
    for(let i = 0; i<products.length; i++){
        if(cartItem === products[i].id){
        let req_Qunatity = Number(prompt("Enter required quantity:"));
            if(req_Qunatity <= products[i].quantity){
                for(let i = 0; i<products.length; i++){
                    if(cart[i].id === cartItem){
                        cart[i].quantity++;
                    }
                    else{
                        cart.push(products[i]);
                    }
                }
            }
        }
    }
    console.log("Item is not Available");
}
function viewCart(){
    if(cart.length === 0){
        console.log("Empty Cart");
        return;
    }
    for(let i=0; i<cart.length; i++){
        console.log(`ID:${cart[i].id}`);
        console.log(`Name:${cart[i].name}`);
        console.log(`Price:${cart[i].price}`);
        console.log(`Qunatity:${cart[i].quantity}`);
    }
}
function removeItem(){
    let delItem = Number(prompt("Enter ID of the deleted item:"));
    let index = cart.findIndex(item => item.id === delItem);
    if(index !== -1){
        cart.splice(index, 1);
        console.log("Item deleted successfully");
    }
    console.log("Item Not Found in Cart!")
}
function checkout(){
    if(cart.length === 0){
        console.log("Cart is empty");
        return;
    }
    let total = 0;
    for(let i=0; i<cart.length; i++){
        let productPrice = cart[i].price * cart[i].quantity;
        total += productPrice;
    }
    console.log("Total Bill:", total);
    for(let i = 0; i < cart.length; i++){ 
        for(let j = 0; j < products.length; j++){
             if(cart[i].id === products[j].id){
                 products[j].quantity -= cart[i].quantity;
                 break;
             } 
        }
    }
    cart = [];
}