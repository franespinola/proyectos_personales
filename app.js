const express = require('express');
const path = require('path');
const app = express();

const publicFolderPath = path.resolve(__dirname +'/public/css/styles.css');
app.use('/public/css/styles.css',express.static(publicFolderPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
})

app.use('/public/img', express.static(__dirname +'/public/img'));
console.log(__dirname)  

app.listen(3000, () => {
    console.log("Servidor corriendo");
});
