import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/async_Handler";


const isvalidurl=(url)=>{
    //logic to validate url
    try {
        const parsedUrl=new URL(url);
        if(parsedUrl.hostname==="github.com" && parsedUrl.pathname.split("/").filter(Boolean).length===2){
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }

}

let repoUrl;
const analyser=asyncHandler((req,res)=>{
 
    //logic to analyse repo will go here
    repoUrl= new URL(req.body.repoUrl);  //same as const {repoUrl}=req.body

    if(!repoUrl){
        throw new ApiError(400,"Repo URL is required")
    }
    
    if(!isvalidurl(repoUrl)){
        throw new ApiError(400,"Invalid Repo URL")
    }


    res.status(200).json(new Apiresponse(200,repoUrl,"Repo analysis started successfully"))
})



export {analyser} 