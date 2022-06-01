const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    console.log('Hello E-va');
    return res.status(200).send({
        data: 'EVA desktop project',
    });
});

app.get('/newLine', (req, res) => {
    console.log('Sneha');
    return res.status(201).send('Eva is working')
})
app.listen(port, () => {
    console.log(`connected on port ${port}`);
});


module.exports = app;
