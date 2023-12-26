import { createSlice } from "@reduxjs/toolkit"



export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: []
    },
    reducers: {
        addOrder: (state, action) => {
            state.order.push(action.payload)
        },
        removeOrder: (state, action) => {
            const idToRemove = action.payload;
            state.order = state.order.filter(item => item.id !== idToRemove);
        },
        clearOrder: (state, action) => {
            state.order = action.payload
        }
    },
})

export const { addOrder, removeOrder, clearOrder } = orderSlice.actions

export default orderSlice.reducer