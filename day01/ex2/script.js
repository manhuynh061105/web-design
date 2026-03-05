let cartCount = 0;

const products = [
{
id:1,
name:"Women Bag",
price:100,
oldPrice:150,
category:"bags",
image:"https://m.media-amazon.com/images/I/61EVGcGLGAL._AC_SY695_.jpg"
},

{
id:2,
name:"Glasses",
price:25,
oldPrice:null,
category:"glasses",
image:"https://visioncentre.co.nz/wp-content/uploads/2023/04/AA-glomma-1.png"
},

{
id:3,
name:"Dress",
price:80,
oldPrice:120,
category:"clothing",
image:"https://thestateofwomen.com/wp-content/uploads/2016/03/women-shopping-1024x576.jpg"
},

{
id:4,
name:"Shoes",
price:60,
oldPrice:null,
category:"shoes",
image:"https://shapen.bwcdn.net/media/2024/06/1/8/barefoot-tenisky-feelin-uni-white-leather-1739-size-large-v-4-f-47889587.webp"
}
];


function displayProducts(list){

const container = document.getElementById("product-list");
container.innerHTML="";

list.forEach(item=>{

let card = document.createElement("div");
card.className="product";

card.innerHTML = `
<img src="${item.image}">
<h3>${item.name}</h3>

<p>
$${item.price}
${item.oldPrice ? `<span class="old-price">$${item.oldPrice}</span>` : ""}
</p>

<button onclick="addToCart()">Add to cart</button>
`;

container.appendChild(card);

});

}


function filterProducts(category){

if(category==="all"){
displayProducts(products);
return;
}

let result = products.filter(p=>p.category===category);
displayProducts(result);

}


function addToCart(){
cartCount++;
document.getElementById("cart-count").innerText = cartCount;
}


displayProducts(products);