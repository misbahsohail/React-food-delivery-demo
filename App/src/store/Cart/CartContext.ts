import { createContext } from "react";

export type Item = {
  name: string;
  id: string;
  amount?: number;
  price: number;
  description?:string
};

export type ItemAddedInCart = {
  id: string;
  amount: number;
}

type CartContextType = {
  items: {};
  totalPrice: number;
  numberCartItems: number;
  addItem: (item: ItemAddedInCart) => void;
  removeItem: (item: ItemAddedInCart) => void;
};

const cartContext = createContext<CartContextType>({
  items: {},
  totalPrice: 0,
  numberCartItems: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default cartContext;
