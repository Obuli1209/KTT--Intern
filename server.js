const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express Team!');
});
app.listen(3000,()=>{
    console.log("Server running on 3000");
    
});
