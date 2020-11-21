const mongoose = require("mongoose");


const SlaveToSirensSchema = new mongoose.Schema({
    test1 : {
        type : String , 
        required : true
    },
    test2 : {
        type : Number,
        required : true
    },
});


//"SlaveToSirens" is for SlaveToSirens Collection in the db"
const SlaveToSirens = mongoose.model("SlaveToSirens" , SlaveToSirensSchema);
module.exports = SlaveToSirens;
