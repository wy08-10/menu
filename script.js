const products = [
    { 
        id: 0, name: 'Haruka Rose & Carnation Machino Flower Box', price:35 },
    { id: 1, name: 'Ashley Red Rose Bouquet', price: 65 },
    { id: 3, name: 'Casabella Pink Hydrangea Bouquet', price: 55 },
    { id: 4, name: 'Triumph', price: 60 },
    { id: 5, name: 'Prestige', price: 55 },
    { id: 6, name: 'Samantha Grand Opening Flower Stand', price: 70 }
];

const product = [
    {
        id:0,
        image: 'p1.png',
        title: 'Haruka Rose & Carnation Machino Flower Box',
        price: 138,
    },
    {
        id:1,
        image: 'p2.webp',
        title: 'Ashley Red Rose Bouquet',
        price: 95,
    },
    {
        id:2,
        image: 'p3.webp',
        title: 'Casabella Pink Hydrangea Bouquet',
        price: 199,
    },
    {
        id:3,
        image: 'p7.png',
        title: 'Triumph',
        price: 229,
    },
    {
        id:4,
        image: 'p5.png',
        title: 'Prestige',
        price: 259,
    },
    {
        id:5,
        image: 'p6.png',
        title: 'Samantha Grand Opening Flower',
        price: 219,
    },
    {
        id:6,
        image: 'p8.png',
        title: 'Esmerelda Pink Rose Flower Box',
        price: 119,
    },
    {
        id:7,
        image: 'p9.png',
        title: 'Hannah Fresh Flower Bouquet',
        price: 79,
    },
    {
        id:8,
        image: 'p4.png',
        title: 'Esther White',
        price: 109,
    },
    {
        id:9,
        image: 'p10.png',
        title: 'Luz Soap Flower Bridal Bouquet',
        price: 128.90,
    },
    {
        id:10,
        image: 'p11.jpg',
        title: 'Luz Soap Flower Bridal Bouquet',
        price: 138,
    },
    {
        id:11,
        image: 'p12.png',
        title: 'Lilies',
        price: 99,
    },
    {
        id:12,
        image: 'p13.jpg',
        title: 'JOELLE Sunflower and Lily Bouquet',
        price: 215,
    },
    {
        id:13,
        image: 'p14.jpg',
        title: 'Old Style Sunflower Bouquet',
        price: 158,
    },
    {
        id:14,
        image:'p15.webp',
        title:'Calypso Sunflower & Rose Bouquet',
        price: 159,
    },
    {
        id:15,
        image:'p16.jpeg',
        title:'11 Soap Carnation Rose Sunflower Flower Bouquet',
        price:52.90,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image ,title ,price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}