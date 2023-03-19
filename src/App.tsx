import { Cart } from "./components/Cart";
import { CartTotal } from "./components/CartTotal";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

import { Aside } from "./UI/Aside";
import { Main } from "./UI/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <ProductList />
        <Aside>
          <Cart />
        </Aside>
      </Main>
    </>
  );
}

export default App;
