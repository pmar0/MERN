const express = require('express')
const app = express();
const port = 8000;

require("./config/mongoose.config");
require("./routes/jokes.routes")(app);

app.use(express.json(), express.urlencoded({ extended: true }));

app.listen( port, () => console.log(`Listening on port: ${port}`) );