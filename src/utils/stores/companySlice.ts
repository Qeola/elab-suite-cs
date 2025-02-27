import { getRequest } from "@/utils/api/apiRequestsMethod";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  name: string;
  email: string;
};

type InitialState = {
  loading: boolean;
  users: any;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [
    {
      name: "Qeola",
      address: "Ogbomoso",
      phone: "9028838484",
    },
  ],
  error: "",
};

export const getUser = createAsyncThunk("users/getUser", async () => {
  const response = await getRequest(`users/current-user`);
  return response.data.data;
});
const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default companySlice.reducer;
