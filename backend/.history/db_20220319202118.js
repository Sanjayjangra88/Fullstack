const mongoose = require("mongoose");
const mongooURI= "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const connectToMongo = ()=>{
    mongoose.connect(mongooURI,()=>{
        console.log("connect to mongo successfull");
    })
}
module.exports =connectToMongo;