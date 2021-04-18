import axios from "axios";

const BASE_URL = "https://corebiz-test.herokuapp.com/api/v1/";

export const getData = async () => {
  try {
    const response = await axios.get(BASE_URL + "products");
    return response.data;
  } catch (error) {
    return error.response;
  }
};
