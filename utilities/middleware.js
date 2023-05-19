const unKnownEndPoint = (req,res) => res.status(404).json({error:"unknown end point"});



module.exports = {unKnownEndPoint};