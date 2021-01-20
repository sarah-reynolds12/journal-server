require("dotenv").config();
let express = require('express');
let app = express();
const sequelize = require("./db");
let user = require("./controllers/usercontroller");
let journal = require('./controllers/journalcontroller');
let calc = require("./controllers/calculatorcontroller")

sequelize.sync();

//app.use("/test", function(req, res){
    //res.send("This is a message from the test endpoint on the server!")
//});
app.use(express.json());
app.use('/user', user);
app.use('/journal', journal);
app.use("/calculator", calc)


app.listen(3000, function(){
    console.log("App is listening on port 3000")
});

//localhost:3000 
//location of our server

//localhost:3000/test
