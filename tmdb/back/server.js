const express = require("express")
const app = express()
const db = require('../back/db')
const models = require('./models')
const routes = require("./routes/index")

// app.get('/', (req, res) => {
//   res.send("llegando a server")
// })

app.use(express.json());

app.use("/api", routes); 

const PORT = process.env.PORT || 3001;


db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});