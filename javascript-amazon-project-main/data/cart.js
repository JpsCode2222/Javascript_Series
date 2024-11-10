export let cart = [
  {
    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity : 2
  },
  {
    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity : 2
  }
]

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
    console.log(cart);
  }

  // updateCartQuantity
export function updateCartQuantity(){
    let cartQuantity = 0;
  
    cart.forEach((cartItem)=>{
      cartQuantity += cartItem.quantity;
    });
  
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  }

export  function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    })
    cart = newCart;
  }