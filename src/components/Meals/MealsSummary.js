import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious food, Delivered to you</h2>
            <p>Choose favrate meals from our board section of available meals
                and enjoy da delicious lunch or dinner at home
            </p>
            <p>All our meals cooked with high-quality ingridients, just in time and
                of course experienced chefs!
            </p>
        </section>
    );
};

export default MealsSummary;