import React from 'react';

const CartItem = (props) =>  {
const { price, title, qty } = props.product;
const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
       
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} alt="cart" />

                </div>
                <div className="right-block">
                    <div style={ {fontSize:25}}>{title}</div>
                    <div style={ {color:'green'}}>Rs{price}</div>
                    <div style={ {fontSize:25}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                        onClick={() =>onIncreaseQuantity(product)}/>
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/929/929430.png"
                        onClick={() =>onDecreaseQuantity(product)}/>
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                        onClick={() =>onDeleteProduct(product.id)}/>
                    </div>

                </div>

            </div>
        );
    }

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'purple'
    }
}
export default CartItem;