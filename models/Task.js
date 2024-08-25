const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema ({
    //this is title key to enter the title
    title : {
        type : String,
        require : true,
        
    },
    //this is description of todo task
    description : {
        type : String,
    },
    //status to check weather the task is completed or not
    status : {
        type: String,
        enum : ["pending", "completed", "in-progress"],
        default : "pending"
    }, 
    //this is to add the current date when task was created
    created_at :{
        type : Date,
        default : Date.now()
    },
    //this is to update the  date when task was updated
    updated_at :{
        type : Date,
        default : Date.now()
    }
})
//exports the module
module.exports = mongoose.model("Task", taskSchema)