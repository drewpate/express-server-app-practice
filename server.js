const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {

    res.send('Hello from route /')
});

app.post('/', (req, res) => {
    res.send('POST request to route /')
});



app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})