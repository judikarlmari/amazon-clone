import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';

import './Subtotal.css';

function Subtotal() {
    const [{ basket }] = useStateValue();
    const [priceValue, setPriceValue] = useState(0);

    basket.map(item => {
        /* let total = parseFloat(priceValue) + parseFloat(item.price);
        setPriceValue(total); */
        console.log(item);
    });

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={priceValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Procceed to Checkout</button>
        </div>
    )
}

export default Subtotal
