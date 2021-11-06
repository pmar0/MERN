const mongoose = require('mongoose');
const dbName = 'projectmanager'

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database: ${dbName}`))
    .catch(err => console.log(`Something went wrong when connecting to the database: ${dbName} --`, err));