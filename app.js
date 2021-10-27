const express = require('express');
const app = express();


app.get('/', (req, res)=> {
    res.status(200).send("Welcome to the server")
})

const PORT = 5000;
app.listen(PORT, console.log(`You are listening on port ${PORT}`))