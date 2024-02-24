const Event = require("../models/eventModel")

const singleEvent=async(req,res)=>{
    try {
        const id=req.params.id
        const singleEvent=Event.findById({id})
        res.status(200).json(singleEvent)
    } catch (error) {
        console.log(error);
    }
}
module.exports=singleEvent