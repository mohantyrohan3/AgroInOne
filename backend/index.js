const express = require('express');

const port = 8000;
const app = express();


app.listen(port,function(err){
    if(err){
        console.log(`Error Occured while Making App : ${err}`);
    }
    console.log(`Express App started on Port Number : ${port}`);
})