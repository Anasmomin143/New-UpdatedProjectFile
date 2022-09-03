import { configureStore } from '@reduxjs/toolkit'
const INITIAL_STATE = {
    ProductsinStore: [],
    cart: []
}

const Store = configureStore({
    reducer: (State, action) => {
        const { type, payload } = action
        switch (type) {
            case "FetchedData":
                return {
                    ...State,
                    ProductsinStore: payload.productsFromApi
                }
            case 'AddToCart':
                const { newProduuctItem } = payload
                return {
                    ...State,
                    cart: [...State.cart, newProduuctItem]
                }
            case'updatequantity':
            return{
                ...State,
                cart:payload.updateCartQuantitty
            }

        }

        return INITIAL_STATE;

    }
})

export default Store;