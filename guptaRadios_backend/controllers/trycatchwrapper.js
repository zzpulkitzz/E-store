function wrapper(func){
    return async (req,res)=>{
        try{
            func(req,res)
        }catch(err){
            res.status(505).json(err)
        }
    }
}
module.exports=wrapper