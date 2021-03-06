import React, { useEffect } from 'react';
import { useStateValue } from '../Context/StateProvider';

import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';

function Checkout() {

    const [{ basket }] = useStateValue();

    useEffect(() => {
        document.title = "Amazon Checkout"
    }, [])

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket?.map(item => (
                        <CheckoutProduct
                            key={item.key}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
