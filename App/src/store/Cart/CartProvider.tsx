import { useReducer } from "react";
import CartContext, { Item } from "./CartContext";

const defaultCartState: CartState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

type CartAction = {
  type: "Add" | "Remove";
  item: Item;
};

type CartState = {
  items: { [key: string]: Item };
  totalPrice: any;
  itemsCount: number;
};

function findItemInState(id: string, state: CartState) {
  return state.items[id];
}

function computeNewPriceAndCount(
  state: CartState,
  { id, amount, price }: Item
) {
  const prevTotalCount = state.itemsCount - state.items[id]?.amount || 0;

  const prevPrice = (state.items[id]?.amount || 0) * price;
  const itemPrice = amount * price;
  const newPriceTotal = state.totalPrice - prevPrice + itemPrice;

  const totalCount = prevTotalCount + amount;

  return { totalCount, newPriceTotal };
}

const cartReducerNew = (state: CartState, action: CartAction): CartState => {
  const { items } = state;
  const itemInState = findItemInState(action.item.id, state);
  switch (action.type) {
    case "Add": {
      const updatedItems = {
        ...items,
        [action.item.id]: itemInState
          ? { ...itemInState, amount: action.item.amount }
          : { ...action.item },
      };

      const { totalCount, newPriceTotal } = computeNewPriceAndCount(
        state,
        action.item
      );

      return {
        itemsCount: totalCount,
        totalPrice: newPriceTotal,
        items: updatedItems,
      };
    }
    case "Remove": {
      return { ...defaultCartState };
    }

    default:
      return {
        ...defaultCartState,
      };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducerNew,
    defaultCartState
  );
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "Add", item });
  };
  const removeItemFromCart = (item) => {
    dispatchCartAction({ type: "Remove", item });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    numberCartItems: cartState.itemsCount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
