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

export const postForm = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(BASE_URL + "newsletter");
    return response.data;
  } catch (error) {
    return error.response;
  }
};
