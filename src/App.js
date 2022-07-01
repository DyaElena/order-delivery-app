import React, { useState } from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const showCartHandler = () => {
    setOpenModal(true);
  };

  const hideCartHandler = () => {
    setOpenModal(false);
  };

  return (
    <CartProvider>
      {openModal && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
