const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

/* app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/about.html'))
})
 
app.get('/help', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/help.html'))
}) */

app.get('/weather', (req, res) => {
    res.send('Check the weather')
});

app.listen(3000, () => {
    console.log('Sever starting on port 3000')
});