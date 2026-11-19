// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     data.forEach((post) => {
//         console.log(post);
//     })
// })
async function getPosts(){
    const response = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json");
    const data = await response.json();
    data.forEach((post) => {
        console.log(post);
    })
}
getPosts();