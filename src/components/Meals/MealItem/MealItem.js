import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }; // we get all this object data through props from MealItem (except amount which we get from  MealItemForm)
  // we're using useContext to establish connection with CartContext which is connected with CartPropvider,
  // where in object const cartContext = {addItem: addItemToCartHandler} lives (that's why we do cartCtx.addItem({}) ) and finally item is ADDED TO addItemToCartHandler

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCard={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
