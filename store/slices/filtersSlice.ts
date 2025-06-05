import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSubject: 'Physics',
  selectedClass: [],
  selectedUnits: [],
  statusFilter: '',
  weakChaptersOnly: false
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSubject(state, action) {
      state.selectedSubject = action.payload;
    },
    setClassFilter(state, action) {
      state.selectedClass = action.payload;
    },
    setUnitsFilter(state, action) {
      state.selectedUnits = action.payload;
    },
    setStatusFilter(state, action) {
      state.statusFilter = action.payload;
    },
    toggleWeakChapters(state) {
      state.weakChaptersOnly = !state.weakChaptersOnly;
    }
  }
});

export const {
  setSubject,
  setClassFilter,
  setUnitsFilter,
  setStatusFilter,
  toggleWeakChapters
} = filtersSlice.actions;

export default filtersSlice.reducer;