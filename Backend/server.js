const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const mongoURI = ("mongodb+srv://Daniel:codesmith@cluster0.mm1df.mongodb.net/Cluster0?retryWrites=true&w=majority")
mongoose.connect(mongoURI)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});







app.listen(PORT);