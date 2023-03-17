const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
//querySelectorAll was used to select the array of all matching elements

document.querySelector('.clickable').addEventListener('click', function() {
  alert('FAQ page opens.');
});

//for changing the product selection based on color, etc.
const products = [
    {
        id: 1,
        title:"Sarees",
        country: "Country of origin: India",
        productSelections:[
            {
                code:"c1",
                img: "./img/Chikankari1.jpg",
                desc: "Chikankari sarees are hand-embroidered traditional Indian sarees that showcase intricate white floral patterns on a variety of fabrics and colors, perfect for any occasion. With these Chikankari sarees, you'll not only look stunning, but also feel comfortable and confident!",
                price: 250,
            },
            {
                code:"c2",
                img: "./img/Chikankari2.jpg",
                desc: "Chikankari sarees are hand-embroidered traditional Indian sarees that showcase intricate white floral patterns on a variety of fabrics and colors, perfect for any occasion. With these Chikankari sarees, you'll not only look stunning, but also feel comfortable and confident!",
                price:220,
            },
            {
                code:"c3",
                img: "./img/Kollam_saree1.jpg",
                desc: "Kollam sarees are handwoven traditional south Indian sarees that feature exquisite designs, often inspired by nature. These sarees are made with high-quality fabrics, such as cotton and silk, and are available in a range of vibrant colors and styles, making them an ideal choice for any occasion. With Kollam sarees, you can add a touch of elegance and sophistication to your wardrobe, and stand out from the crowd in style.",
                price:200,
            },
            {
                code:"c4",
                img: "./img/Kollam_saree2.jpg",
                desc: "Kollam sarees are handwoven traditional south Indian sarees that feature exquisite designs, often inspired by nature. These sarees are made with high-quality fabrics, such as cotton and silk, and are available in a range of vibrant colors and styles, making them an ideal choice for any occasion. With Kollam sarees, you can add a touch of elegance and sophistication to your wardrobe, and stand out from the crowd in style.",
                price:205,
            },
            {
                code:"c5",
                img: "./img/Kollam_saree3.jpg",
                desc: "Kollam sarees are handwoven traditional south Indian sarees that feature exquisite designs, often inspired by nature. These sarees are made with high-quality fabrics, such as cotton and silk, and are available in a range of vibrant colors and styles, making them an ideal choice for any occasion. With Kollam sarees, you can add a touch of elegance and sophistication to your wardrobe, and stand out from the crowd in style.",
                price:210,
            },
        ],
    },
    {
        id: 2,
        title:"Hand made Bracelets",
        country: "Country of origin: India",
        productSelections:[
            {
                code:"b1",
                img: "./img/Bracelet1.jpg",
                desc:"Elevate your style with our handcrafted semi-precious stones bracelets from India, featuring unique designs and high-quality materials that add a touch of elegance to any outfit.",
                price: 60,
            },
            {
                code:"b2",
                img: "./img/Bracelet2.jpg",
                desc:"Elevate your style with our handcrafted semi-precious stones bracelets from India, featuring unique designs and high-quality materials that add a touch of elegance to any outfit.",
                price:75,
            },
            {
                code:"b3",
                img: "./img/Bracelet3.jpg",
                desc:"Elevate your style with our handcrafted semi-precious stones bracelets from India, featuring unique designs and high-quality materials that add a touch of elegance to any outfit.",
                price:75,
            },
        ],
    },
    {
        id: 3,
        title:"Ceramic Dinnerware",
        country: "Country of origin: China",
        productSelections:[
            {
                code:"c1",
                img: "./img/China_Porcelain2.jpg",
                desc:"Indulge in a cup of coffee or tea with our elegant ceramic hand-painted and gold-plated mugs, set of 2. These unique and stylish mugs are perfect for adding a touch of sophistication to your house, while also making a great gift for your loved ones.",
                price: 100,
            },
            {
                code:"c2",
                img: "./img/China_Porcelain1.jpg",
                desc:"These ceramic hand-painted plates come in a set of 6 and are beautifully adorned with intricate designs, making them a perfect addition to any dinner party or family gathering. Handcrafted by skilled artisans, each plate is unique and adds a touch of elegance to any table setting.",
                price:280,
            },
        ],
    },
    {
        id: 4,
        title:"Wooden Decorative Items",
        country: "Country of origin: India",
        productSelections:[
            {
                code:"w1",
                img: "./img/wood_elephant.png",
                desc:"Our wooden handcrafted home decorations are beautifully designed to add a touch of warmth and elegance to your living space. Made from high-quality wood, these unique pieces are perfect for those who love to surround themselves with natural and eco-friendly decor.",
                price: 150,
            },
            {
                code:"w2",
                img: "./img/wood_horse.jpg",
                desc:"Our wooden handcrafted home decorations are beautifully designed to add a touch of warmth and elegance to your living space. Made from high-quality wood, these unique pieces are perfect for those who love to surround themselves with natural and eco-friendly decor.",
                price:170,
            },
            {
                code:"w3",
                img: "./img/wood_parrot.jpg",
                desc:"Our wooden handcrafted home decorations are beautifully designed to add a touch of warmth and elegance to your living space. Made from high-quality wood, these unique pieces are perfect for those who love to surround themselves with natural and eco-friendly decor.",
                price:150,
            },
        ],
    },
];

let choosenProduct = products[0]

const currProductImg = document.querySelector(".productImg");   //for current product
const currProductTitle = document.querySelector(".productHeading");
const currProductCountry = document.querySelector(".productCountry");
const currProductDesc = document.querySelector(".productDesc");
const currProductSelections = document.querySelectorAll(".productSelection");  //used querySelectorAll as there are multiple selections
const currProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) =>{
    item.addEventListener("click",()=>{
        wrapper.style.transform= `translateX(${-100 * index}vw)`; //to change the slides

        choosenProduct = products[index] //to change the choosen product

        //currProductTitle.textContent = "XYZ" //for changing title to "XYZ"
        //This method is for non-array items 
        currProductTitle.textContent = choosenProduct.title  //to change title accordingly
        currProductCountry.textContent = choosenProduct.country  //to change country accordingly

        //For selecting first product as initial
        currProductImg.src = choosenProduct.productSelections[0].img //first image to show in that category
        currProductPrice.textContent = "$" + choosenProduct.productSelections[0].price 

    });
});

//for array of items
//to change the image depending on what product number is selected 
currProductSelections.forEach((productSelection,index) => {
    productSelection.addEventListener("click", () => {
        currProductImg.src = choosenProduct.productSelections[index].img;
        currProductDesc.textContent = choosenProduct.productSelections[index].desc;
        currProductPrice.textContent = "$" + choosenProduct.productSelections[index].price;
    });
});