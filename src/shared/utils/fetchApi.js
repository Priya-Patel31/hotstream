import axios from "axios";

export async function fetchApi({ url, method, body, propertyName }) {
  const user = JSON.parse(localStorage.getItem("user"));

  try {
    const { data, status} = await axios({
      method,
      url,
      data: body,
      headers: { authorization: user!== null ?user.token:"" },
    });
 
    if (status === 200 || status === 201) {
      return {
        data: data,
        success: true,
        message: `${propertyName} fetched successfully!!`,
      };
    } 
    console.log(data);
    throw Error("API request failed");
  } catch (e) {
    console.log(e);
    return {
      data: null,
      success: false,
      message: `${propertyName} failed to fetch`,
    };
  }
}




