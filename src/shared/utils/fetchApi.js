import axios from "axios";

export async function fetchApi({ url, method, body, propertyName }) {
//   const user = JSON.parse(localStorage.getItem("user"));

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1NzM2MjMxNi0xZjNhLTRlY2QtYjA4Ni0xMzlmNWNmNjdhZjkiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.UQaoxva7UtUeVo47ndik81df4Gd_FfDSXVhNY9ehSq4"

  try {
    const { data, status} = await axios({
      method,
      url,
      data: body,
      headers:{authorization:token}
      //This for future  reference when I will add authentication for now I am sending token directly 
    //   headers: { authorization: user!== null ?user.token:"" },
    });
 
    if (status === 200 || status === 201) {
      return {
        data: data,
        success: true,
        message: `${propertyName} fetched successfully!!`,
      };
    } 
    
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




