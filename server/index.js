const express = require('express');
const app = express();

const path = require('path');

app.get('/', function(req, res) {
    
    res.sendFile( path.join(__dirname, '../index.html') );
})

const port = process.env.PORT || 5050;

app.listen(port, () => {console.log(`Server rocking out on ${port}`)});