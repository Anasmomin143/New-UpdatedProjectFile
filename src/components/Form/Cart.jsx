import React from 'react'
import '../css/Profile.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useState } from 'react'
import { useEffect } from 'react'
const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalprice, setTotalprice] = useState(0)
    const [totalItem, setTotalItem] = useState()
    const dispatch = useDispatch()
    const { cart } = useSelector((State) => {
        return {
            cart: State.cart
        }
    })

    useEffect(() => {
        setCartProducts(cart)
    }, [cart])

    useEffect(() => {
        let price = 0
        let item = 0
        cart.forEach(element => {
            price += element.price * element.quantity
            item += element.quantity
        });
        setTotalItem(item)
        setTotalprice(price)
    }, [totalprice, cart, totalItem])
    return (

        <div>
            <section className="h-100" >
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                                        className="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                            </div>

                            {cartProducts.length === 0 ? <div>No items in cart</div> :
                                cartProducts.map((item_in_cart) => {
                                    const { id, image, price, title, quantity } = item_in_cart
                                    return (<>
                                        <div className="card rounded-3 mb-4" key={id}>
                                            <div className="card-body p-4">
                                                <div className="row d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src={image} alt="s" style={{
                                                            height: "180px",
                                                            width: '160px'
                                                        }} />
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <p className="lead fw-normal mb-2">{title}</p>
                                                        <p><span className="text-muted"> </span> <span className="text-muted"></span></p>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-secondary" onClick={(event) => {
                                                            event.preventDefault();
                                                            const newCart = JSON.parse(JSON.stringify(cartProducts))
                                                            const updateCartQuantitty = newCart.map((product) => {
                                                                if (product.id === item_in_cart.id) {
                                                                    product.quantity = product.quantity - 1
                                                                    if (product.quantity === 0) product.quantity = 1
                                                                }
                                                                return product
                                                            })
                                                            dispatch({
                                                                type: 'updatequantity',
                                                                payload: { updateCartQuantitty }
                                                            })

                                                        }}>-</button>
                                                        <input id="form1" min="0" name="quantity" value={quantity} type="text"
                                                            readOnly
                                                            className="form-control form-control-sm" />
                                                        <button className="btn btn-secondary"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                const newCart = JSON.parse(JSON.stringify(cartProducts))
                                                                const updateCartQuantitty = newCart.map((product) => {
                                                                    if (product.id === item_in_cart.id) {
                                                                        product.quantity = product.quantity + 1
                                                                    }
                                                                    return product
                                                                })
                                                                dispatch({
                                                                    type: 'updatequantity',
                                                                    payload: { updateCartQuantitty }
                                                                })
                                                            }}
                                                        >+</button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h5 className="mb-0">Price: {price * quantity}</h5>
                                                    </div>
                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <button className="btn btn btn-danger">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>)
                                })
                            }
                            {
                                cartProducts.length === 0 ? <div></div> :
                                    <center>
                                        <div className="card">
                                            <div className="totalprice"><h1>Total Price : {totalprice}</h1></div>
                                            <div className="totalitem"><h1>Total item : {totalItem}</h1></div>
                                            <div className="card-body">

                                                <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                            </div>
                                        </div>
                                    </center>

                            }

                        </div>
                    </div>
                </div>
            </section>
            <div />
        </div>
    )
}
export default Cart
