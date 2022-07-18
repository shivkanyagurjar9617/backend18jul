const mw1 = (req,res,next)=>{
    req.query.name = req.query.name.toUpperCase();
    next()
}
module.exports = {mw1}