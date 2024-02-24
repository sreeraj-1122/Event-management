const Event = require("../models/eventModel")

const deleteEvent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await Event.findByIdAndDelete({_id:id})
        if (data) {
            res.json("deleted successfully").status(200)
        }else{
            res.send("event not found").status(400)
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
}
module.exports=deleteEvent