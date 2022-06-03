const express = require('express');

const app = express();
port = 3000;

app.use(express.static(__dirname + '/public/')); //telling express all the static files will be stored in the public folder

app.get('/', (req,res) => res.sendFile('/public/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))