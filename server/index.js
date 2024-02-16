const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://teamxerinium:teamx1234@cluster0.rw7nyz9.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on('connected', () => {
    console.log("Server Connected To MongoDB");
})
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.listen(PORT, ()=> {
    console.log(`Server is Connected On Port ${PORT}`);
});
