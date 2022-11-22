import { Fragment } from 'react';
import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>ReactMeals</h2>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table full of delicious food" />
            </div>
        </Fragment>
    );
};

export default Header;