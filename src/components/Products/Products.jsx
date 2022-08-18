import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
const Products = () => {
    const [Products, setProduts] = useState([])
    const [Price,setPrice]=useState(0)
    const [filteredproducts,setFilteredproducts]=useState([])
    const FETCH_DATA_FROM_API = () => {
        axios.get('https://fakestoreapi.com/products/').then((res) => {
            const produts = res.data
            setProduts(produts)
        })
    }
    console.log(Products)
    useEffect(() => {
        FETCH_DATA_FROM_API()
    }, []);

    useEffect(()=>{
            const filteredpro=Products.filter((item)=>{
                if(item.price<Price)return false;
                return true
            })
            setFilteredproducts(filteredpro)
    },[Price,Products])
    console.log(Price)
    return (
        <>
        <div>
            <input type="text"  className="from-control" value={Price} onChange={(event)=>setPrice(event.target.value)}/>
            <button className="btn-btn-primary" onClick={()=>{setPrice(Price)}}>Submit</button>
        </div>
            <div className="menu-item container-fluid mt-5 my-5 d-flex-">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            {
                                filteredproducts.map((Pro) => {
                                    const { id, category, description, image, price, title,rating } = Pro
                                    const{count,rate}=rating

                                    return (
                                        <>

                                            <div className="card" style={{width: "18rem" }}key={id}>
                                                <img className="card-img-top" src={image} style={{
                                                    height:"250px"
                                                }} alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p className="card-text"><strong>{category}</strong></p>
                                                    <h6 className="card-text">{rate}</h6>
                                                    <h5 className="card-text">Price : {price}</h5>
                                                    <a href="#" className="btn btn-danger">Add To cart</a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products
