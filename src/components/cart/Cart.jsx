import { useState } from 'react';
import style from './Cart.module.css';
import { CartItem } from './CartItem';

export function Cart(){
    function telefonas(diff) {
        console.log('Ring ring... 📞📞📞');
        setCount(count + diff);
    }

    const [count, setCount] = useState(0);

    return (
        <div className={style.cart}>
            <h3>Viso: {count}</h3>
            <CartItem title="Pomidoras" skambutis={telefonas}></CartItem>
            <CartItem title="Agurkas" skambutis={telefonas}></CartItem>
            <CartItem title="Grietinė" skambutis={telefonas}></CartItem>
        </div>
    )
}