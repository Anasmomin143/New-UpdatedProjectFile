import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const Fetchedproducts = () => {
    const dispatch = useDispatch()
    const [productsFromApi, setProductsFromApi] = useState([])

    const FETCH_DATA_FROM_API = () => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            // console.log("Response",res.data)
            const produts = res.data
            setProductsFromApi(produts)
        })
    }

    useEffect(() => {
        FETCH_DATA_FROM_API()
    }, []);


    useEffect(() => {
        console.log("Dispath UseEffect")
        dispatch({
            type: 'FetchedData',
            payload: { productsFromApi }
        })
    },)
}

export default Fetchedproducts
