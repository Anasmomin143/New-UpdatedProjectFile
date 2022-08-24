import { configureStore } from '@reduxjs/toolkit'
const INITIAL_STATE = {
    ProductsinStore: [],
    ProductsCart: []
}

const Store = configureStore({
    reducer: (State, action) => {
        const { type, payload } = action
        switch (type) {
            
            case "FetchedData":
                // console.log("payload meka Prod", payload.productsFromApi)
                return {
                    ...State,
                    ProductsinStore: payload.productsFromApi
                }
            case 'AddToCart':
                // console.log("add to card is clicked", payload.ProductItem)
                console.log("Cart Data in Store", State.ProductsCart)
                
                return {
                    ...State,
                    ProductsCart: [...State.ProductsCart,payload.ProductItem]
                }
        }
        return INITIAL_STATE;

    }
})

export default Store;