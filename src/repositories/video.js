import { URL } from "../config/config";

const URL_VIDEOS = `${URL}/videos`

function create(video) {
   return fetch(`${URL_VIDEOS}?_embed=videos`,{
       method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body: JSON.stringify(video)
   })
   .then(async (resp)=>{

    try {
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }   
   
   })
   
}

export default{
    create
}