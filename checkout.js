function populateCheckout(){
  try {
    var srcs = JSON.parse(sessionStorage.getItem('srcs'));
    var colors = JSON.parse(sessionStorage.getItem('colors'));
    var sizes = JSON.parse(sessionStorage.getItem('sizes'));
    var prices = JSON.parse(sessionStorage.getItem('prices'));
  } catch (error) {
    console.log(error);
  }
	
  //grabs element that checkout item will be appended to
  const appendTo = document.getElementById("checkout-main");
  let totalPrice = 0;
	try{
  	 
	  for(let i = 0; i < srcs.length; i++){
		
	    //creates div to contain checkout item and total price counter
	    const itemContainer = document.createElement("div");
	    itemContainer.className = "flex";
	    
	    //creates div to contain checkout item
	    const item = document.createElement("div");
	    item.className = "x3 flex middle center checkout-item";
	
	    //creates img of checkout item
	    let itemImg = document.createElement("img");
	    itemImg.className = "x1 checkout-img";
	    let filter = colors[i] + "-filter";
	    itemImg.classList.toggle(filter);
	    itemImg.src = srcs[i];
	    item.appendChild(itemImg);
	
	    //creates size indicator of checkout item
		if(sizes[i] === null){
			const itemSize = document.createElement("div");
	    	itemSize.className = "x1 flex middle center item-size";
		    itemSize.textContent = "No Size was Selected";
		    item.appendChild(itemSize);
		}
		else{
	    	const itemSize = document.createElement("div");
		    itemSize.className = "x1 flex middle center item-size";
		    itemSize.textContent = "Size: " + sizes[i];
		    item.appendChild(itemSize);
		}
	
	    //creates price indicator of checkout item
	    const itemPrice = document.createElement("div");
	    itemPrice.className = "x1 flex middle center item-price";
	    itemPrice.textContent = "Price: " + prices[i];
	    item.appendChild(itemPrice);
	
	    //increments total price
	    totalPrice += parseInt(prices[i]);
	    //creates incremented total price counter 
	    totalPriceIncrement = document.createElement("div");
	    totalPriceIncrement.className = "x1 flex middle center total-price-increment";
	    totalPriceIncrement.textContent = "+ " + totalPrice;
	    itemContainer.appendChild(totalPriceIncrement);
	    
	    //appends finished item to appendTo
	    itemContainer.appendChild(item);
	
	    //appends itemContainer to appendTo
	    appendTo.appendChild(itemContainer);
	  }
	  
	  //creates div to contain final price
	  const finalContainer = document.createElement("div");
	  finalContainer.className = "flex middle center padding-bottom final-container";
	
	  //total price div
	  const tpContainer = document.createElement("span");
	  tpContainer.className = "total-price";
	  tpContainer.textContent = "Total Price: $" + totalPrice + " + ";
	  finalContainer.appendChild(tpContainer);
	  
	  //tax div
	  var tax = totalPrice * .05;
	  const taxContainer = document.createElement("span");
	  taxContainer.className = "tax ";
	  taxContainer.textContent = "Tax: $" + tax + " + ";
	  finalContainer.appendChild(taxContainer);
	
	  //shipping div
	  var shipping = 5;
	  const shipContainer = document.createElement("span");
	  shipContainer.className = "shipping";
	  shipContainer.textContent = "Shipping: $" + shipping + " = ";
	  finalContainer.appendChild(shipContainer);
	
	  //final price
	  const finalPrice = document.createElement("span");
	  finalPrice.className = "final-price";
	  finalPrice.textContent = "$" + (totalPrice + tax + shipping);
	  finalContainer.appendChild(finalPrice);
	
	  //appends final container
	  appendTo.appendChild(finalContainer);
	}catch (error){
		const noCart = document.createElement("div");
		noCart.className = "emptyCart flex center";
		noCart.textContent = "Your Cart is Empty!";
		appendTo.appendChild(noCart);
	}
}

/**
function calcBill(){
	let html = ""
	let sum = 0;
	for(let i = 0; i < shoppingCart.length; i++){
			sum += findPrice(i);
	}
	
	html = '<div class="bill flex right"> Subtotal -- $' + sum +'</div>'; 
	document.getElementById('subtotal').innerHTML = html;

	
	let tax =sum*0.065;
	html = '<div class="bill flex right"> Tax -- $' + tax.toFixed(2) +'</div>'
	document.getElementById('tax').innerHTML = html;

	
	let total =sum+tax+5;
	html = '<div class="bill flex right"> Total -- $' + total.toFixed(2) +'</div>';
	document.getElementById('total').innerHTML = html;
}
*/