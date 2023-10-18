// filtersSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  gender: string[];
  brand: string[];
  size: {
    totalWidth: number[];
    bridgeWidth: number[];
    lensWidth: number[];
    lensHeight: number[];
    armWidth: number[];
  };
  color: string[];
}

const initialState: FiltersState = {
  gender: [],
  brand: [],
  size: {
    totalWidth: [],
    bridgeWidth: [],
    lensWidth: [],
    lensHeight: [],
    armWidth: [],
  },
  color: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Gender filter actions
    addGenderFilter: (state, action: PayloadAction<string>) => {
      state.gender.push(action.payload);
    },
    removeGenderFilter: (state, action: PayloadAction<string>) => {
      state.gender = state.gender.filter((gender) => gender !== action.payload);
    },
    clearGenderFilter: (state) => {
      state.gender = [];
    },

    // Brand filter actions
    addBrandFilter: (state, action: PayloadAction<string>) => {
      state.brand.push(action.payload);
    },
    removeBrandFilter: (state, action: PayloadAction<string>) => {
      state.brand = state.brand.filter((brand) => brand !== action.payload);
    },
    clearBrandFilter: (state) => {
      state.brand = [];
    },
    // Size filter actions
    addSizeFilter: (
      state,
      action: PayloadAction<{ attribute: string; value: [number, number] }>
    ) => {
      state.size[action.payload.attribute] = action.payload.value;
    },
    removeSizeFilter: (
      state,
      action: PayloadAction<{ attribute: string; value: number }>
    ) => {
      state.size[action.payload.attribute] = state.size[
        action.payload.attribute
      ].filter((value) => value !== action.payload.value);
    },
    clearSizeFilter: (state) => {
      state.size = initialState.size;
    },

    // Color filter actions
    addColorFilter: (state, action: PayloadAction<string>) => {
      state.color.push(action.payload);
    },
    removeColorFilter: (state, action: PayloadAction<string>) => {
      state.color = state.color.filter((color) => color !== action.payload);
    },
    clearColorFilter: (state) => {
      state.color = [];
    },
  },
});

export const {
  addGenderFilter,
  removeGenderFilter,
  clearGenderFilter,
  addBrandFilter,
  removeBrandFilter,
  clearBrandFilter,
  addSizeFilter,
  removeSizeFilter,
  clearSizeFilter,
  addColorFilter,
  removeColorFilter,
  clearColorFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
