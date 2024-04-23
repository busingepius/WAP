const {CustomAPIError} = require("../errors/customAPIError")
function errorHandler(err,req,res,next){
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({"msg":err.message});
    }
    res.status(500).json({"msg":"error occurred"});
}
module.exports = errorHandler;