import classes from './AvailableMeals.module.css';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import { useState, useEffect } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      setError(null);
      try {
        const response = await fetch(
          'https://react-http-cf6d5-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
        );
        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();

        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });

          setMeals(loadedMeals);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        setError(err.message || 'Something went wrong!');
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.loadingMeals}>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p className={classes.errorMeals}>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>{<ul>{mealsList}</ul>}</Card>
    </section>
  );
};
export default AvailableMeals;
