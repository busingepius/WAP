function notFound(req,res,next){
    res.status(404).json({"data":"not found"});
}
module.exports = notFound;