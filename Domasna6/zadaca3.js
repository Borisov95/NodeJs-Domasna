const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 8000;


app.get("/names" ,async (req,res)=>{
    try {
        const response  = await axios.get('https://jsonplaceholder.typicode.com/users');
        const result = response.data.map(user => user.name);
        res.json(result);
    }
    catch (err){
        res.status(500).send("Server error");
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});