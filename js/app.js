
fetch('./assets/dataset.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

console.log("test");



const imageChanger = document.getElementById("js--imageChanger");
const Button1 = document.getElementById("js--Button1");
const Button2 = document.getElementById("js--Button2");
const Button3 = document.getElementById("js--Button3");
const Button4 = document.getElementById("js--Button4");
const Button5 = document.getElementById("js--Button5");

Button1.onclick = function () {
    imageChanger.src = "./assets/products/schoen.png";
    Button1.style.border = '0.4rem solid black';
    Button2.style.border = "0";
    Button3.style.border = "0";
    Button4.style.border = '0';
    Button5.style.border = "0";


    console.log(imageChanger);
}

Button2.onclick = function () {
    imageChanger.src = "./assets/products/schoen-zilver.png";
    Button1.style.border = '0';
    Button2.style.border = "0.4rem solid black";
    Button3.style.border = "0";
    Button4.style.border = '0';
    Button5.style.border = "0";


    console.log(imageChanger);
}

Button3.onclick = function () {
    imageChanger.src = "./assets/products/schoen-rood.png";
    Button1.style.border = '0';
    Button2.style.border = "0";
    Button3.style.border = "0.4rem solid black";
    Button4.style.border = '0';
    Button5.style.border = "0";


    console.log(imageChanger);
}

Button4.onclick = function () {
    imageChanger.src = "./assets/products/schoen-goud.png";
    Button1.style.border = '0';
    Button2.style.border = "0";
    Button3.style.border = "0";
    Button4.style.border = '0.4rem solid black';
    Button5.style.border = "0";


    console.log(imageChanger);
}

Button5.onclick = function () {
    imageChanger.src = "./assets/products/schoen-blauw.png";
    Button1.style.border = '0';
    Button2.style.border = "0";
    Button3.style.border = "0";
    Button4.style.border = '0';
    Button5.style.border = "0.4rem solid black";


    console.log(imageChanger);
}


