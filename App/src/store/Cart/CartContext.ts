import {createContext} from "react";

type Item = any;
type CartContextType = {
  items: Item[],
  totalAmount: number,
  addItem: (item:Item ) => void,
  removeItem: (item: Item) => void,
};

const cartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default cartContext;
