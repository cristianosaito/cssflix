import { URL } from "../config/config";

const URL_CAT = `${URL}/categorias`


function getAllWithVideos() {
   return fetch(`${URL_CAT}?_embed=videos`).then(async (resp)=>{

    try {
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
        
    }   
   
   })
}

function getAll() {
    return fetch(URL_CAT).then(async (resp)=>{
 
     try {
         const data = await resp.json()
         return data
     } catch (error) {
         console.log(error);
         
     }   
    
    })
    
 }

export default{
    getAllWithVideos,
    getAll
}