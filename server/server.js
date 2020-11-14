const { User } = require('./models/user.models');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const port = 8000


app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./config/mongoose.config');
require('./routes/pirates.routes')(app);
app.listen(port, () => console.log("Now listening on port" + port));
