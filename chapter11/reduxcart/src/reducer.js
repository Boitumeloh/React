function cartReducer(state, action) {
  if (state === undefined) {
    //initial state is set 
    return {
      totalCost: 0,
      productCart: [],
    };
  }
  //defines our actions (add and delete)
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        //payload values (cost and products)
        //updates total cost
        totalCost: state.totalCost + parseInt(action.productData.productPrice),
        //adds product to cart
        productCart: state.productCart.concat({
          productName: action.productData.productName,
          productPrice: action.productData.productPrice,
        }),
      };
    case "deleteProduct":
        //identify product by name and remove it from the cart
      const updatedArray = state.productCart.filter(
        (product) => product.productName !== action.productData.productName
      );
      return {
        ...state,
         //payload values (cost and products)
        //updates total cost 
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
       
        productCart: updatedArray,
      };
    default:
      return state;
  }
}

export default cartReducer;
