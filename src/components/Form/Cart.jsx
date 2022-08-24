import React from 'react'
import '../css/Profile.css'
import { useSelector } from 'react-redux/es/exports'

const Cart = () => {
    const { ProductsCart } = useSelector((State) => {
        return {
            ProductsCart: State.ProductsCart
        }
    })
    // console.log(ProductsCart)
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
                            {
                                ProductsCart.map((item_in_cart) => {
                                    const { id, image, price, title, rating } = item_in_cart
                                    const { rate } = rating
                                    return (<>
                                        <div className="card rounded-3 mb-4" key={id}>
                                            <div className="card-body p-4">
                                                <div className="row d-flex justify-content-between align-items-center">
                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                        <img src={image} alt="s" style={{
                                                            height: "180px",
                                                            width:'160px'
                                                        }}/>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                        <p className="lead fw-normal mb-2">{title}</p>
                                                        <p><span className="text-muted">Rating :- {rate} </span> <span className="text-muted"></span></p>
                                                    </div>
                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button className="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            <i className="fas fa-minus"></i>
                                                        </button>

                                                        <input id="form1" min="0" name="quantity" value="1" type="number"
                                                            className="form-control form-control-sm" />

                                                        <button className="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h5 className="mb-0">Price: {price}</h5>
                                                    </div>
                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <button className="btn btn btn-danger">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>)
                                })
                            }



                            <div className="card">
                                <div className="card-body">
                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div />
        </div>
    )
}
export default Cart
