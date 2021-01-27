const mongoose = require("mongoose");

const connectionDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
    useUnifiedTopology : true})
    .then(() => console.log("mongodb connection success "))
    .catch(err => console.log(err))
}

module.exports = connectionDatabase;