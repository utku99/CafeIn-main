import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        clicked: false,
        notification: 0
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setClicked: (state, action) => {
            state.clicked = action.payload
        },
        setNotification: (state, action) => {
            state.notification = action.payload
        },
    },
})

export const { setUser, setClicked, setNotification } = userSlice.actions

export default userSlice.reducer