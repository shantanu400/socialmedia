import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
  userInfo: false,
  changeId:false,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
});

export const userSlice = createSlice({
  name: "user",
  
  
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers:{
    setuserInfo:(state,action)=>{
      state.userInfo=action.payload;
    },
    setchangeId:(state,action)=>{
      state.changeId=action.payload;
    }
  }
});
export const {setuserInfo,setchangeId}=userSlice.actions;
export default userSlice.reducer;
