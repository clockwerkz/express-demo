const express = require("express");
const computer = require('./routes/computer');
const config = require('./connection/config');
const app = express();
const PORT = 3000;
var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://${config.user}:${config.pw}@cluster0.zenaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
    .connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(()=> console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.use(express.json());
app.get('/test', (req, res)=>{
    res.send("This message is from the backend");
});

app.use('/api/computer', computer);

app.listen(3000, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});