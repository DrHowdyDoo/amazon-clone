import React from 'react'
import './Product.css';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';

function Product({ title, info, image, price, rating }) {
    return (
        <div className="product">
            <img src={image}
                alt=""
            />
            <div className="product__info">

                <p>{title} <FavoriteBorderRoundedIcon className="wishlist__icon" /> </p>

                <br></br>

                <p className="product__desc">{info}</p>

                </div>

                <p className='product__price'>
                    <large>$</large>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p> <StarRoundedIcon className="Star__icon" /> </p>
                        ))}
                </div>

            <div className="button__container">
                <button className="product__button">
                    BUY NOW
                </button>

                <button className="product__button">
                    <AddShoppingCartRoundedIcon />
                </button>
            </div>
        </div>

    )
}

export default Product
