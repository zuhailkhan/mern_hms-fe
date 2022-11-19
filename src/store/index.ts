import { createSlice, configureStore } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'rootStore',
    initialState: {
        user: null,
        randomValues: Math.random()
    },
    reducers: {
        login: (state) => {
            console.log('redux begins login', state)
        },
        setRandomValues: (state) => {
            console.log(state.randomValues)
        }
    }

})

export const { login, setRandomValues } = slice.actions

const store = configureStore({
    reducer: slice.reducer
})

export default store