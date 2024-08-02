import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../store";

const initialState = {
  data: getStore("Shop") || [],
};
const shopSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {
    getData(state, { payload }) {
      state.data = [
        ...state.data,
        { ...payload, count: 1, userPrice: payload.price },
      ];
      setStore("Shop", state.data);
    },
    deleteProduct(state, { payload }) {
      state.data = state.data.filter((value) => value.id != payload);
      setStore("Shop", state.data);
    },
    increment(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload
          ? {
              ...value,
              count: value.count + 1,
              userPrice: (value.count + 1) * value.discountPrice,
            }
          : value
      );
      setStore("Shop", state.data);
    },
    decrement(state, { payload }) {
      state.data = state.data.map((value) =>
        value.id === payload
          ? {
              ...value,
              count: value.count <= 1 ? 1 : value.count - 1,
              userPrice: (value.count <= 1 ? 1 : value.count - 1) * value.discountPrice,
            }
          : value
      );
      setStore("Shop", state.data);
    },
  },
});

export const { getData, deleteProduct, increment, decrement } =
  shopSlice.actions;
export default shopSlice.reducer;
