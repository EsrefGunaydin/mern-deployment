const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/piratesdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connection is established successfully"))
    .catch(err => console.log("There is an error: ", err))