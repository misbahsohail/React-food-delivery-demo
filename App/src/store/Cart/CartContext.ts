import { createContext } from "react";

export type Item = {
  name: string;
  id: string;
  amount: number;
  price: number;
  description?:string
};
type CartContextType = {
  items: {};
  totalPrice: number;
  numberCartItems: number;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

const cartContext = createContext<CartContextType>({
  items: {},
  totalPrice: 0,
  numberCartItems: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default cartContext;
