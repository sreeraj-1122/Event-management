const Event = require("../models/eventModel")

const getEvents=async(req,res)=>{
   try {
    const getevent=await Event.find()
    res.json(getevent).status(200)
   } catch (error) {
    console.log(error);
   }
}
module.exports=getEvents