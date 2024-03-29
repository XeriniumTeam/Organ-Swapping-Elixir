const express = require("express");
const {engine} = require("express-handlebars")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");
const indexRoute = require("./routes/indexRoutes");
const apiRoute = require("./routes/apiRoutes");
const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://teamxerinium:teamx1234@cluster0.rw7nyz9.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on('connected', () => {
    console.log("Server Connected To MongoDB");
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.engine('handlebars', engine({defaultLayout: false}));
app.set('view engine', 'handlebars');

app.use('/user', userRoute);
app.use('/', indexRoute);
app.use('/api', apiRoute);

app.listen(PORT, ()=> {
    console.log(`Server is Connected On Port ${PORT}`);
});
