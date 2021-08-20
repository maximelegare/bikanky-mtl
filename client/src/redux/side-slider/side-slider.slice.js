import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sliderVisibility:false
}

const sliderSlice = createSlice({
    name:'slider',
    initialState,
    reducers:{
        toggleSliderVisibility(state){
            state.sliderVisibility = !state.sliderVisibility
        }
    }
})

export const { toggleSliderVisibility } = sliderSlice.actions
export default sliderSlice.reducer