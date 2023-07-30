import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authSliceState = {
  user: {
    uid: string|null
    email: string|null;
    displayName: string|null;
    photoURL?: string|null;
  } | null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null } as authSliceState,
  reducers: {
    login(state, action: PayloadAction<authSliceState['user']>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    }
  }
});

export const authActions = authSlice.actions;

export const selectUser = (state: any) => state.auth.user;

export default authSlice;
