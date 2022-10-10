// EX7: Write a function to change the h1 text to something else
const h1 = document.querySelector("h1");
const changeHeader = () => {
  h1.innerText = "Here are Nix's goodies";
  h1.style.background = "wheat";
};
// changeHeader();

// EX8: Write a function to change the page background color
const tableTHs = document.querySelectorAll("#table th");
const changeBackground = () => {
  for (let i = 0; i < tableTHs.length; i++) {
    tableTHs[i].style.backgroundColor = "wheat";
  }
};
// changeBackground();

// EX9: Write a function to change the footer address with a fake one
const span = document.querySelector("footer span");
const changeFooterAddress = () => {
  span.innerText =
    "This is the real fake address of the store: Imaginary Road 221";
  span.style.backgroundColor = "wheat";
};
// changeFooterAddress();

// EX10: Write a function to add a CSS class to every Amazon link
const anchors = document.querySelectorAll("a");
const addClassToLinks = () => {
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].classList.add("anchors-class");
  }
};
// addClassToLinks();

// EX11: Write a function to toggle a CSS class for all the images in the table;
// that class should set the visibility of the image
const images = document.querySelectorAll("img");
const imagesClass = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("visible-images");
  }
};
imagesClass();
const toggleImgVisibility = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].hidden = !images[i].hidden;
    images[i].classList.toggle("hidden");
  }
};
// toggleImgVisibility();

// EX12: Write a function to color the price of the products in a different one every time it’s invoked
const generateRandomColors = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // const a = Math.random();
  let color = `rgba(${r}, ${g}, ${b})`; // removed the opacity because it was not that clear
  return color;
};
// console.log(generateRandomColors());

const prices = document.querySelectorAll(".price");
const changePriceColor = () => {
  let sameColor = generateRandomColors();
  for (let i = 0; i < prices.length; i++) {
    prices[i].style.color = sameColor;
  }
};
// changePriceColor();
