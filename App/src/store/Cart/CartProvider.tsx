import CartContext from "./CartContext";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };
// const cartReducer = (state, action) => {
//   if (action.type === "Add") {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotal = state.totalAmount + action.item.price;
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotal,
//     };
//   }
// };

const CartProvider = (props) => {
  const addItemToCart = (item) => {
    //dispatchCartAction({ type: "Add", item });
  };
  const removeItemFromCart = (item) => {};

  // const cartContext = {
  //   items: cartState.items,
  //   totalAmount: cartState.totalAmount,
  //   addItem: addItemToCart,
  //   removeItem: removeItemFromCart,
  // };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState
  // );

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
