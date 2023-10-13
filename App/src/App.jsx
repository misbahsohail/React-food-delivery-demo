import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [uiState, setUiState] = useState({
    cartVisible: false,
  });

  return (
    <div>
      <Header
        onCartClicked={() => setUiState({ ...uiState, cartVisible: true })}
      />
      {uiState.cartVisible && (
        <Cart onClose={() => setUiState({ ...uiState, cartVisible: false })} />
      )}
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
