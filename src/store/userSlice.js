import { createSlice, isPending, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../api";

export const loginUserAuth = createAsyncThunk(
    'user/loginUserAuth',
     async(userData, thunkAPI)=>{
try {
    const response = await loginUser(userData);
    return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error?.message || 'Login failed.')
}
     })

const userSlice = createSlice({
name: 'user',
initialState:{
    user: null,
    error:null,
    isPending: false,
},
reducers: {
    clearError : (state) =>{
        state.error = null;
    },
    clearUser : (state)=>{
state.user = null;
    },
},
extraReducers: (builder)=>{
    builder.addCase(loginUserAuth.pending, (state, action)=>{
        state.isPending = true;
    });
    builder.addCase(loginUserAuth.fulfilled, (state, action)=>{
        state.isPending = false;
        state.user = action.payload;
    });
    builder.addCase(loginUserAuth.rejected, (state, action)=>{
        state.isPending = false;
        state.error = action.payload;
    });
}
})

export default userSlice.reducer;
export const {clearError, clearUser} = userSlice.actions;
