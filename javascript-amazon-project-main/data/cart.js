export let cart = JSON.parse(localStorage.getItem('cart')); 

if(!cart){
  cart = [
    {
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity : 2
    },
    {
      productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity : 1
    }
  ]
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

// function addtocart
export function addToCart(productId){
    let isMatching;
      
    // check product already in cart or not
    cart.forEach((cartItem)=>{
      if(cartItem.productId === productId){
        isMatching = cartItem;
      } 
    })
  
    // if match found then increament qnt else add new product
    if(isMatching){
      isMatching.quantity += 1;
    }else{
      cart.push({
        productId,
        quantity:1,
      })
    }
    saveToStorage();
    // console.log(cart);
  }

export  function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })
    cart = newCart;
    saveToStorage();
    console.log('cart : ',cart)
  }
