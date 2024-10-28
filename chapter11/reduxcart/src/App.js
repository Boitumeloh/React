import { connect } from "react-redux";
import Cart from "./Cart";

//keeps track of the application state
function mapStateToProps(state) {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart,
  };
}

//calls action methods (updates application state)
function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: (productName, productPrice) =>
      dispatch({
        type: "addProduct",
        productData: {
          productName: productName,
          productPrice: productPrice,
        },
      }),
    onDeleteProduct: (productData) =>
      dispatch({
        type: "deleteProduct",
        productData: productData,
      }),
  };
}

//connects dispatch to the cart
//allows us to add and delete products
let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default connectedComponent;
