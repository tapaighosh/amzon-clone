import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket,user},dispatch]= useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className='checkout__ad'
                    // src="https://images-na.ssl-images-amazon.com/images/G/02?UK_CCMP/TM/OCC_Amazon1.CB423492668_.jpg"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Prime/XCM_Manual_1500x350_1210306_1210306_IN_Prime_Deals_7a028a6d_aba0_4767_9510_e5e013c3a81f_jpg_LOWER_QL85_.jpg"
                    alt=""
                    />
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title">
                            Your Shoping Basket
                        </h2>
                        
                        {basket.map(item =>(
                            

                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
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
