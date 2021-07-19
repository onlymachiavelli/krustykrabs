/*
Author : Alaa Barka
Date:---
*/
const foodcontainer = document.getElementById("common-food");
let i;
let foodpic = [
    `img/rglrburger.png`,
    `img/classicchickenburger.png`,
    `img/pizzargl.png`,
    `img/sand.png`,
    `img/salad.png`,
    `img/icecream.png`,
];
let foodtitle = [
    `Regular Burger`,
    `Chicken Burger`,
    `Pizza`,
    `Sandwich`,
    `Salad`,
    `IceCream`
];
const dollarsign = `<i class="fa fa-usd" aria-hidden="true"></i>`;
let foodprice = [12 ,08,27,11.50,3,25];
for(i = 0;i<6;i++ ){
    foodcontainer.innerHTML += `
    <div class="foodcard">
        <img src="${foodpic[i]}"/>
        <br/>
        <b>${foodtitle[i]}</b>
        <p>${foodprice[i]}${dollarsign}</p>
        <button class="orderbtn" onclick="order(foodpic[${i}], foodtitle[${i}],foodprice[${i}])">Order ${foodtitle[i]}</button>
    </div>
    `;
    if (i === 2){
        foodcontainer.innerHTML += "<br/><br/>";
    }
}
var to=document.getElementById("totalprice");
let main = document.getElementById("ppp");
let orderarea = document.getElementById("pppp");
function order(picture, title, price){

    main.style.display="none";
    orderarea.style.display = "block";
    orderarea.innerHTML = `
        <div class="ordercard">
            <img src="${picture}"  />
            <b id="tone">${title} : <b style="font-size:25px">${price}${dollarsign}</b></b>
            
            <p id="qqq">Quantity : <p id="qu">1</p></p>
            <button class="nx" onclick="pls(${price})"><i class="fa fa-plus" aria-hidden="true"></i></button>
                &nbsp;&nbsp;
            <button class="prv" onclick="minus(${price})"><i class="fa fa-minus" aria-hidden="true"></i></button>
            
            <b id="totalprice">${price}${dollarsign}</b>
            <button class="ord">Order Now</button>
        </div> `;
}
function minus(price){
    var qu = document.getElementById("qu");
    var to=document.getElementById("totalprice");
    if(Number(qu.innerHTML) === 0){
        to.innerHTML = (Number(qu.innerHTML)*price);
        to.innerHTML += dollarsign;
    }
    else{
        
    
    qu.innerHTML = Number(qu.innerHTML) - 1;
            to.innerHTML = (Number(qu.innerHTML)*price);
            to.innerHTML += dollarsign;
    }
}
function pls(price){
    var qu = document.getElementById("qu");
    var to=document.getElementById("totalprice");

    qu.innerHTML = Number(qu.innerHTML) + 1;
    to.innerHTML = (Number(qu.innerHTML)*price);
    to.innerHTML += dollarsign;
}
