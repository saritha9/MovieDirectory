const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config'); // This is new

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

require('./server/config/routes')(app);
app.listen(9011, () => {
    console.log("Listening at Port 9011")
})
