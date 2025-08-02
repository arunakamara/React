import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/ShoppingCartContext.jsx";

function App() {
  

  return (
    <>
      {/* In Older React versions (< 19) we use CartContext.Provider instead of just CartContext */}
      <CartContextProvider >
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </CartContextProvider>
    </>
  );
}

export default App;
