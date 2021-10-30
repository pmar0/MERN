const express = require('express')
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
    
const jokeRoutes = require("./routes/jokes.routes");
jokeRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );