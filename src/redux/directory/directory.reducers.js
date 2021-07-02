import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  sections: [
    {
      name: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "creations/hats",
    },
    {
      name: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "creations/jackets",
    },
    {
      name: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "creations/sneakers",
    },
    {
      name: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "creations/womens",
    }
  ],
};

const directoryRecucer = createReducer(
  {
    initialState
  },
  (builder) => {
    builder.addDefaultCase((state) => state.sections);
  }
);
export default directoryRecucer;
