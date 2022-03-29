import { fetchApi } from "../shared/utils/fetchApi";

export const fetchDataApi = async () => {
  try {
    const { data ,success:success1} = await fetchApi({
      url: "/api/videos",
      method: "get",
      propertyName: "videos",
    });

   const{data:data2,success:success2} = await fetchApi({
      url: "/api/categories",
      method: "get",
      propertyName: "categories",
    });
    if(success1 && success2){
        return{
            data:{
                videos:data.videos,
                categories:data2.categories
            },success:true,
            message:"Data fetched successfully"
        }
    }

  } catch (e) {
      console.error(e);
      return{
        data :null,
        suceess:false,
        message:"Data failed to fetch"
      }
  }
 

};
