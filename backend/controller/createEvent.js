const Event = require("../models/eventModel")

const createEvent=async(req,res)=>{
    try {
        const {ename,place,edate}=req.body
        if (!ename,!place,!edate) {
            res.json('filll all fields').status(400)
        }else{
            const createEvents=await Event.create({
                ename,
                place,
                edate
            })
            res.json(createEvents).status(200)
            console.log(createEvents);
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports=createEvent