const dotenv = require('dotenv')
dotenv.config()
const mongodb = require("mongodb");


mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    module.exports = client
    const app = require('./app')
    const port = process.env.PORT
    app.listen(port, () => {
        console.log(`Server started on port 3000 and connected to database...`);
    });
  }
);
