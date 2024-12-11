import { createSlice, isPending } from "@reduxjs/toolkit";


const userSlice = createSlice({
name: 'user',
initialState:{
    user: null,
    error:null,
    isPending: false,
},
reducers: {},
extraReducers: ()=>{}
})

export default userSlice.reducer;
