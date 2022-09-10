const express = require('express')
const cors = require('cors');
const userRoute = require('./routes/v1/user.route');
const app = express()
const port = process.env.PORT || 5000;

// middleWare
app.use(cors())
app.use(express.json())

// Routes with EndPoints
app.use('/api/v1/users', userRoute)

app.get('/', (req, res)=>{
    res.send('Server is running')
})

app.listen(port , ()=>{
    console.log(`listening from  port ${port}`);
})