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
                console.log("payload meka Prod", payload.productsFromApi)
                return {
                    ...State,
                    ProductsinStore: payload.productsFromApi
                }
            case 'AddToCart':
                return {
                    
                }
        }
        return INITIAL_STATE;

    }
})

export default Store;