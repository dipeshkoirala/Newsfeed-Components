/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
// function menuComponent() {
const myMenu = document.createElement("div");
myMenu.style.width = "100px";
myMenu.style.height = "100px";
myMenu.style.backgroundColor = "#C0C0C0";
myMenu.classList.add("menu");
let myUl = document.createElement("ul");
menuItems.forEach((element) => {
  let li = document.createElement("li");
  li.textContent = element;
  myUl.appendChild(li);
});
myMenu.appendChild(myUl);
let menu = document.querySelector(".articles");
menu.classList.add("menu--open", "menu");
menu.appendChild(myMenu);

menu.addEventListener("click", (event) => {
  menu.classList.toggle("menu--open");
});

//menuButton.addEventListener("click",(event)=>);
//   return menu;
// }

//menu.addEventListener("click", menuComponent);
//console.log(menu);
// function liComponentCreater() {

//  let listItem=document.querySelectorAll()
//   // const myLi = [];
//   // for (let i = 0; i < menuItems.length; i++)
//   //   ;
//   // myLi[i].textContent = menuItems[i];

//   // return myLi;
// }

// myUl.appendChild(myLi);

// const menu1 = document.querySelector(".menu-button");
// menu1.appendChild(myMenu);
// console.log(menu1);
// menuItems.forEach((element) => {
//   const articleComponent = liComponentCreater(element);
//   menu1.appendChild(articleComponent);
//   console.log(articleComponent);
// });

//for (let i = 0; i < menuItems.length; i++) {}
//console.log();
// let arr = document.querySelector("li");
// Array.from(arr);

// for (var i = 0; i < menuItems.length; i++) {
//   arr[i].textContent = menuItems[i];
// }
