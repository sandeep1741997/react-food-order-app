import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    { id: 'm1', name: 'Sushi', description: 'Finest fish and non veggies', price: '12.99' },
    { id: 'm2', name: 'Burger', description: 'Fast food veg and non veggies', price: '37.99' },
    { id: 'm3', name: 'Noodles', description: 'Finest chinese food', price: '34.99' },
    { id: 'm4', name: 'Banana Shake', description: 'Good for health', price: '52.99' }
]

const AvailableMeals = () => {

    let mealsList = DUMMY_MEALS.map(meal =>
        <MealItem key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;