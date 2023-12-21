import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState:{
        data:{}
    },
    reducers:{
        setUser: (state, action) =>{
            state.data = action.payload;
        },
    },
});

export const {setUser} = UserSlice.actions;
//export const userObj = (state)=> state.user.data;
export default UserSlice.reducer;