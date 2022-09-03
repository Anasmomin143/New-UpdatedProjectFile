import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const Products = () => {

    const [Price, setPrice] = useState(0)
    const [filteredproducts, setFilteredproducts] = useState([])
    const dispatch = useDispatch()

    const { ProductsinStore } = useSelector((State) => {
        return { ProductsinStore: State.ProductsinStore }
    })
    // console.log("store meka", ProductsinStore)
    useEffect(() => {
        const filteredpro = ProductsinStore.filter((item) => {
            if (item.price < Price) return false;
            return true
        })
        setFilteredproducts(filteredpro)
    }, [Price, ProductsinStore])

    const ADDTO_CART = (ProductItem) => {
        const newProduuctItem = JSON.parse(JSON.stringify(ProductItem))
        newProduuctItem.quantity=1
        // console.log("to see", newProduuctItem)
        dispatch({
            type: 'AddToCart',
            payload: { newProduuctItem }
        })
    }


    // console.log(Price)
    return (
        <div className='bg'>
            <div className="container col-5 justify-content-around m-t-40">
                <label htmlFor="Filter" className="form-label md-11 "><strong>Search Best Products</strong></label>
                <input type="Filter" placeholder='Search' name='Filter' className="form-control" id="Filter" aria-describedby="Filter" value={Price} onChange={(event) => setPrice(event.target.value)} />
                <button className="btn btn-secondary m-2 align-item-center" onClick={() => { setPrice(Price) }}>Submit</button>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row m-3 mt-5">
                            {
                                filteredproducts.map((ProductItem) => {
                                    const { id, category, image, price, title, rating } = ProductItem
                                    const { rate } = rating

                                    return (
                                        <div className="card justify-content-space-evenly" style={{ width: "18rem" }} key={id}  >
                                            <img className="card-top" src={image} style={{ height: "250px" }} alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{title}</h5>
                                                <p className="card-text"><strong>{category}</strong></p>
                                                <h6 className="card-text">{rate}</h6>
                                                <h5 className="card-text align-self-end">Price : {price}</h5>
                                                <button className="btn btn-danger" onClick={() => ADDTO_CART(ProductItem)}>Add To cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
