// //To Call the express Server
const express  =require('express');

const bodyParser = require('body-parser');



const cors = require("cors");

// //To import the package of mongoose
const mongoose  = require('mongoose');

// //Variable called App to initialise our express server
const app = express();

const jsonParser = bodyParser.json();

// //To be able to use SlaveToSIrens.js we should import it so :
const SlavesToSirensModel = require("../models/SlaveToSirens");

// // create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// //To receive information from the front-end as json file format
app.use(express.json());

app.use(cors());

app.get('/' , (req , res) => {
    //In case bedak tjib specific element hel tari2a : {test1 : "mario"} or check this link https://docs.mongodb.com/manual/reference/method/db.collection.find/
    //And  { } bte3ne kel el information li bel database

        res.send("ok");
});


// //Connecting to mongoose 
mongoose.connect('mongodb+srv://SlavesToSirens:codestellars123@slavetosirens.tvhne.mongodb.net/SlaveToSirens?retryWrites=true&w=majority',{
    useNewUrlParser : true,
});

// //Creat a / Route
// //async to make each step individual
// app.post('/news' ,urlencodedParser , async (req , res) => {
//     //Decelartion of variable w koun 3emelon acces menel front-en d lal backend 
//     const Test1var = req.body.test1;
//     const Test2var = req.body.test2;
    
//     //Automaticly created in the database
//     const slavetosirens = new SlavesToSirensModel({test1 : Test1var , test2 : Test2var});

//     try{
//         await slavetosirens.save();
//         res.send(slavetosirens);
//     }catch(err){
//         console.log(err);
//     }
// });

// //This step fina nchoufa when i write : http://localhost:3001/news
// app.get('/news' , async (req , res) => {
//     //In case bedak tjib specific element hel tari2a : {test1 : "mario"} or check this link https://docs.mongodb.com/manual/reference/method/db.collection.find/
//     //And  { } bte3ne kel el information li bel database
//     SlavesToSirensModel.find({}, (err , result) => {
//         if(err){
//             res.send(err);
//         }
//         res.send(result);
//     })
// });


//Our Backend will be on port 3001
app.listen(3001 , () => {
    console.log("Server is running on port 3001....")
});







