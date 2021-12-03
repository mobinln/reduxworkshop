import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, loginInterface } from "../../api/auth";

export const sendLoginAction = createAsyncThunk("session/sendLoginAction", async (payload: loginInterface) => {
    return await login(payload);
});

const sessionSlice = createSlice({
    name: "session",
    initialState: { status: "unauthorized", token: null, error: null },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(sendLoginAction.pending, (state) => {
                state.status = "pending";
            })
            .addCase(sendLoginAction.fulfilled, (state, action) => {
                state.status = "authorized";
                state.token = action.payload.token;
            })
            .addCase(sendLoginAction.rejected, (state, action) => {
                state.status = "error";
                console.log(action);
            });
    },
});

export default sessionSlice.reducer;
