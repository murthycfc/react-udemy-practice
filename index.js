
import { name, version } from "./utils.js";
import api from "./utils.js";

import * as util from "./utils.js";

console.log(api, name, version);

console.log(util.default);
console.log(util.name);
console.log(util.version);

document.getElementById("url").textContent=util.default;
document.getElementById("name").textContent =  util.name;
document.getElementById("version").textContent = util.version;

document.getElementById("greet").addEventListener("click", ()=> alert("Hii"))

const user = {
    name: "Murthy",
    course : "Javascript",
    greet() {
        alert("You enrolled in ", this.course);
    }
}

const showUserDetails = (userr) =>{
    document.getElementById("username").textContent = userr.name;
    document.getElementById("course").textContent = userr.course;
    console.log("Hii")
}

document.getElementById("showDetails").addEventListener("click", () => showUserDetails(user));

const arr = [1,2,3];
const [one, two, three ] = arr;
console.log(one, two, three);

const {name: username, course } = user;
console.log(username, course);

let product = {
    name: "Samsung mobile",
    price : 30000,
    category : "Electronics"
}

function showProduct({name, ...others}){
    console.log(name);
    console.log(others.price);
    console.log(others.category);
}

showProduct(product)

for(const detail in product){
    console.log(detail);
}


const handleTimeout = () =>{
    console.log("Time out.....")
}
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout(), 2000);


function greet(greetFunc){
    greetFunc();
}
greet(()=> console.log("Hii"));


function outer(){
    function inner(){
        console.log("Inner")
    }
    inner();
}
outer();


