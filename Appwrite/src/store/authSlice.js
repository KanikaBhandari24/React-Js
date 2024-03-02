import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    useData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.state=true;
            state.useData = action.payload.useData;
        },
        logout: (state) => {
            state.status=false;
            state.userData=null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;