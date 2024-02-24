const Event = require("../models/eventModel")

const editEvent=async(req,res)=>{
    try {
        const id=req.params.id
        const {ename,place,edate}=req.body
        const eventExist=Event.findById(id)
        if (eventExist) {
            
            const data=Event.findByIdAndUpdate(id,req.body)
            res.json(data).status(200)
        }else{
            res.json('Event does not exist')
        }
    } catch (error) {
    
    console.log(error);
}
        
}