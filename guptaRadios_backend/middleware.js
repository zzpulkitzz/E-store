const auth = (req,res,next)=>{
    if(!req.headers.authentication){
        throw new Error()
    }
}
const test=async (req,res,next)=>{
    throw new Error("pookie error")
    
}
module.exports={auth,test}