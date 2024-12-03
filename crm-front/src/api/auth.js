import axios from "axios";

export async function signIn(data) {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/signin/",
      data
    );
    return { success: response.status === 200, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}

export async function signUp(data) {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/signup/",
      data
    );
    return { success: response.status === 200, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred",
    };
  }
}
