import { FETCH_PAGE } from "../types";
import axios from "configs/axios";

export const fetchPage = (url, page) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
    return response.data; // Return data for further handling if needed
  } catch (error) {
    console.error("Error fetching page data:", error.message || error);
    // Optionally, you can dispatch an error action here:
    // dispatch({ type: FETCH_PAGE_ERROR, payload: error.message });
    throw error; // Re-throw to propagate the error
  }
};
