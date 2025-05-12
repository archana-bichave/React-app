import { createSlice } from "@reduxjs/toolkit";

const restautaurantsStore = createSlice({
    name: "restaurants",
    initialState: {
        items: []
    },
    reducers: {
        getRestaurantsLists: async (state, action) => {
            const data = await fetch(
                "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
              );
              items.push(await data.json());
              console.log('*****items', items);
        }
    }
});

export const { getRestaurantsLists } =
restautaurantsStore.actions;
export default restautaurantsStore.reducer;