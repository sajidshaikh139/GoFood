const express= require ('express')
const app = express()
const cors = require('cors');
const port = 5000
const mongoDB=require('./db');
 mongoDB()

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello Sajid Welcome')
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));




app.listen(port,()=>{
    console.log(`Server Started on port ${port}`)
});