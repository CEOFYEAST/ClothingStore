//values containing clothing information
var expandedElement = null;
var currentColor = null;
var size = null;
var price = null;
var imgSRC = null;

/**
toggles clothing on any click outside the clothing
*/
function shrinkOnClick(){
  if(expandedElement != null){
    toggleExpand(expandedElement);
  }
}

/**
toggles clothing on clothing click only if no clothing is expanded
*/
function onClothingClick(toToggle){
  if(expandedElement == null){
    toggleExpand(toToggle);
  } else if(toToggle != expandedElement){
    toggleExpand(expandedElement);
    toggleExpand(toToggle);
  }
  //prevents overlapping onClicks from running
  event.stopPropagation();
}

/**
toggles the expansion of a particular clothing element, expanding the element if it is shrunk, and shrinking the element if it is expanded 
*/
function toggleExpand(toToggle) {
  //toggles expanded class for toToggle
  toToggle.classList.toggle("expanded");
  //gets row of toToggle
  row = toToggle.parentElement;
  //gets all items in row of toToggle, including toToggle
  toHide = row.children;

  //toggles hidden on all children that aren't toToggle
  for (let i = 0; i < toHide.length; i++) {
    // checks if current element is toToggle
    if(toHide[i] == toToggle){
      //updates expandedElement if toToggle is expanded
      if(toHide[i].classList.contains("expanded")){
        expandedElement = toHide[i];
        price = toHide[i].querySelector(".price").innerHTML;
        imgSRC = toHide[i].querySelector(".clothing-image").querySelector("img").src;
      } else {
        resetClothing(toHide[i]);
        expandedElement = null;
      }
      //continues if current element is to toggle
      continue;
    } 
    //toggles element hide if element isn't to toggle
    toHide[i].classList.toggle("hidden");
  }
  
  //toggles options and checkout for toToggle
  var options = toToggle.querySelector(".options");
  var checkout = toToggle.querySelector(".checkout");
  options.classList.toggle("hidden");
  checkout.classList.toggle("hidden");
  
  //prevents overlapping onClicks from running
  event.stopPropagation();
}

/**
changes color of clothing item
*/
function changeColor(colorButton, color){
  //gets the clothing ancestor of the button
  var clothing = colorButton.parentElement.parentElement.parentElement.parentElement;
  //gets image to change color of
  var imageToChange = clothing.querySelector('img');

  //toggles appropriate color for img
  if(currentColor != null){
    imageToChange.classList.toggle(currentColor + "-filter");
  }
  imageToChange.classList.toggle(color + "-filter");
  currentColor = color;
}

/**
updates size of selection
*/
function chooseSize(clicked){
  if(size != null){
    if(size != clicked.innerHTML){
      allSizes = clicked.parentElement.children;
      for (let i = 0; i < allSizes.length; i++) {
        if(allSizes[i].classList.contains("blue-text")){
          allSizes[i].classList.toggle("blue-text");
        }
      }
    }
  }
  
  size = clicked.innerHTML;
  changeTextColor(clicked);
  event.stopPropagation();
}

/**
toggles blue text color for an element (used to show an element has been selected)
*/
function changeTextColor(toChange){
  toChange.classList.toggle("blue-text");
  event.stopPropagation();
}

/**
resets clothing item on shrink
*/
function resetClothing(toReset){
  //toggles colors
  //gets image to change color of
  var imageToChange = toReset.querySelector('img');
  //toggles any colors and their respective filters off
  var colors = ["green", "yellow", "red", "blue", "black"];
  for(let i = 0; i < colors.length; i++){
    if(imageToChange.classList.contains(colors[i] + "-filter")){
      imageToChange.classList.toggle(colors[i] + "-filter");
    }
  }
  //resets currentColor
  currentColor = null

  //toggles text colors
  //gets size options
  var options = toReset.querySelector(".size-options").children;
  //loops through size options, resetting any blue text
  for(let i = 0; i < options.length; i++){
    if(options[i].classList.contains("blue-text")){
      options[i].classList.toggle("blue-text");
    }
  }
  //resets size
  size = null;
  
  //resets price
  price = null;

  //resets img src
  imgSRC = null;
}

var srcs = [];
var colors = [];
var prices = [];
var sizes = [];

/**
every time an item is added to the cart, all the item's information is saved in four sperate arrays to be used during checkout
*/
function addToCart(){
  //pushes current values to their respective arrays
  srcs.push(imgSRC);
  colors.push(currentColor);
  prices.push(price);
  sizes.push(size);

  //adds values to local storage
  sessionStorage.setItem('srcs', JSON.stringify(srcs));
  sessionStorage.setItem('colors', JSON.stringify(colors));
  sessionStorage.setItem('prices', JSON.stringify(prices));
  sessionStorage.setItem('sizes', JSON.stringify(sizes));

  //resets values and shrinks expanded clothing item
  toggleExpand(expandedElement);
}