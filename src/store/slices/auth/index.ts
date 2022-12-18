import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '../../../components/common/types/auth'

const initialState: IAuthState = {
    user: {
        id: null,
        firstname: '',
        username: '',
        email: '',
        createdAt: '',
        updatedAt: '',
        watchlist: {
            id: null,
            name: '',
            assetId: '',
            email: '',
            createdAt: '',
            updatedAt: '',
            userId: null
        }
    },
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isLogged = true
        }
    }
})

export const { login } = authSlice.actions
export default authSlice.reducer