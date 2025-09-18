import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItems: (item) => {},
  removeItems: (id) => {},
});

export function CartContextProvider({ children }) {
  return <CartContext>{children}</CartContext>;
}

export default CartContext;
