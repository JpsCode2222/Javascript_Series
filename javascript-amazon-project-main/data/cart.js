export const cart = []

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