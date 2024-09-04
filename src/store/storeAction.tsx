import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface storeState {
  //   isLoading: boolean;
  //   data: null | string[] | number[] | any[];
}

// tao store => store : call api
// tao store => store : call luu data

const initialState: storeState = {
  //   isLoading: true,
  //   data: null,
};

export const storeSlice = createSlice({
  name: 'storeAction',
  initialState,
  reducers: {
    // increment: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // decrement: (state, action: PayloadAction<number>) => {
    //   state.value -= action.payload;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {} = storeSlice.actions;

export default storeSlice.reducer;
