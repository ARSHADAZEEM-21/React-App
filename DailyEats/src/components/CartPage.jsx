const CartPage = () => {
    return (
        <section className="cart-page">
            <div className="cart-container">
                <div className="cart-header">
                    <p className="cart-tag">Your Cart</p>
                    <h1>Delicious items ready for checkout</h1>
                    <p>Review your selected meals and place your order in one step.</p>
                </div>

                <div className="cart-content">
                    <div className="cart-items">
                        <div className="cart-item">
                            <div>
                                <h3>Classic Burger</h3>
                                <p>Juicy beef burger with fries</p>
                            </div>
                            <span>$12.99</span>
                        </div>

                        <div className="cart-item">
                            <div>
                                <h3>Veggie Pizza</h3>
                                <p>Fresh vegetables and melted cheese</p>
                            </div>
                            <span>$14.50</span>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$27.49</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>$2.99</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>$30.48</span>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartPage;
