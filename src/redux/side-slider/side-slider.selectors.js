import { createSelector } from "reselect";

const selectSliderInitialState = (state) => state.slider

export const selectSliderVisibility = createSelector([selectSliderInitialState], (slider) => slider.sliderVisibility)