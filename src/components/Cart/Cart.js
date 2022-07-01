import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  const orderHandler = () => {
    console.log('Prepearing...');
  };

  // const cartPrices = cartItems.filter((item) => item.price + totalPrice);
  return (
    <Modal onClose={props.onClose}>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
