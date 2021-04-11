import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    //amazon // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GwBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    //amazon// src="https://i.gadgets360cdn.com/large/amazon_best_hindi_movies_1594103807584.jpg"
                    src="https://littlecoffeefox.com/wp-content/uploads/2018/11/Books-on-a-table-next-to-plant.jpg"
                    // src="https://images-cdn.brightedge.com/f00000000036389/videos.brightedge.com/Images/marketing-books-hero.jpg"
                    // vegitable // src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg?crop=1.00xw:0.751xh;0,0.212xh&resize=1200:*"
                    alt="asdf"
                    /> 
                <div className="home__row">
                    <Product
                        id="2345"
                        title="The lern startup"
                        price={29.99}
                        image="https://booksummaryclub.com/wp-content/uploads/2018/12/Learn-startup-cover.jpg"
                        rating={5}
                    ></Product>
                    <Product
                        id="87654"
                        title="The lern startup"
                        price={29.99}
                        image="https://booksummaryclub.com/wp-content/uploads/2018/12/Learn-startup-cover.jpg"
                        rating={5}
                    ></Product>
                    

                </div>  
                <div className="home__row">
                <Product
                        id="9876"
                        title="The lern startup"
                        price={29.99}
                        image="https://booksummaryclub.com/wp-content/uploads/2018/12/Learn-startup-cover.jpg"
                        rating={5}
                    ></Product>
                    <Product
                        id="3456"
                        title="The lern startup"
                        price={29.99}
                        image="https://booksummaryclub.com/wp-content/uploads/2018/12/Learn-startup-cover.jpg"
                        rating={5}
                    ></Product>
                    <Product
                        id="56984"
                        title="The lern startup"
                        price={29.99}
                        image="https://booksummaryclub.com/wp-content/uploads/2018/12/Learn-startup-cover.jpg"
                        rating={5}
                    ></Product>
                </div>
                <div className="home__row">
                    <Product
                        id="8976"
                        title="The lern startup"
                        price={29.99}
                        image="https://booksummaryclub.com/wp-content/uploads/2018/12/Learn-startup-cover.jpg"
                        rating={5}
                    ></Product>
                </div> 

            </div>

        </div>
    )
}

export default Home
