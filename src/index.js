"use strict";
const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    const helloAnyone = 'Hello anyone!!!!';
    res.send(helloAnyone);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
