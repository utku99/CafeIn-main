import { configureStore } from '@reduxjs/toolkit'
import { userSlice, } from './slices/user'
import { orderSlice } from './slices/order'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        order: orderSlice.reducer
    },
})