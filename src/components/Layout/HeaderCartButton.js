import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => { return (curNumber + item.amount) }, 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {

        if (items.length === 0)
            return
        setBtnIsHighlighted(true);

        let timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])


    return (
        <button className={btnClasses} onClick={props.onShowCart}>
            <span>
                <i className="fa fa-shopping-cart" style={{ fontSize: '25px', marginRight: '10px' }}></i> My shopping cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    );
};

export default HeaderCartButton;