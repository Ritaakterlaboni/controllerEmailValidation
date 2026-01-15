const mongoose = require ('mongoose')

function dbConnection(){
mongoose.connect(
    `${process.env.DB_URL}`
    )
  .then(() => console.log('DB Connected!'));
}
module.exports = dbConnection