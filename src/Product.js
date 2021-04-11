import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product({id,title, image,price,rating}) {
    const [{basket},dispatch]= useStateValue();

    console.log("this is basket >>> ",basket)

    const addToBusket = () =>{
        // dispatch all the item in the data layer
        dispatch({
            type:'ADD_TO_BUSKET',
            item:{
            id:id,
            title:title,
            image:image,
            rating:rating,
            price:price,
            },
            
        });
    };



    return (
        <div className="product">
            
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img 
            // src="https://booksummaryclub.com/wp-content/uploads/2018/12/Learn-startup-cover.jpg"
            
            src={image}
            alt=""
            />
            <button onClick={addToBusket}>Add to Busket</button>
        </div>
    )
}

export default Product
