
fetch('./assets/dataset.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

console.log("test");

const Price = document.getElementById("js--Price");

const imageChanger = document.getElementById("js--imageChanger");
const Button1 = document.getElementById("js--Button1");
const Button2 = document.getElementById("js--Button2");
const Button3 = document.getElementById("js--Button3");
const Button4 = document.getElementById("js--Button4");
const Button5 = document.getElementById("js--Button5");

Button1.onclick = function () {
    imageChanger.src = "./assets/products/pet.png";
    Button1.style.border = '0.4rem solid black';
    Button2.style.border = "0";
    Button3.style.border = "0";
    Button4.style.border = '0';
    Button5.style.border = "0";
    Price.innerText = "€233";

    console.log(imageChanger.src);
}

Button2.onclick = function () {
    imageChanger.src = "./assets/products/pet-zilver.png";
    Button1.style.border = '0';
    Button2.style.border = "0.4rem solid black";
    Button3.style.border = "0";
    Button4.style.border = '0';
    Button5.style.border = "0";
    Price.innerText = "€445";

    console.log(imageChanger.src);
}

Button3.onclick = function () {
    imageChanger.src = "./assets/products/pet-rood.png";
    Button1.style.border = '0';
    Button2.style.border = "0";
    Button3.style.border = "0.4rem solid black";
    Button4.style.border = '0';
    Button5.style.border = "0";
    Price.innerText = "€63";

    console.log(imageChanger.src);
}

Button4.onclick = function () {
    imageChanger.src = "./assets/products/pet-goud.png";
    Button1.style.border = '0';
    Button2.style.border = "0";
    Button3.style.border = "0";
    Button4.style.border = '0.4rem solid black';
    Button5.style.border = "0";
    Price.innerText = "€803";

    console.log(imageChanger.src);
}

Button5.onclick = function () {
    imageChanger.src = "./assets/products/pet-blauw.png";
    Button1.style.border = '0';
    Button2.style.border = "0";
    Button3.style.border = "0";
    Button4.style.border = '0';
    Button5.style.border = "0.4rem solid black";
    Price.innerText = "€902";

    console.log(imageChanger.src);
}


const Order = document.getElementById("js--Order");

Order.onclick = function () {
    alert("Bestelling is voltooid");
}