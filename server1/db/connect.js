const mongoose = require("mongoose")


var ConnectDB = (urlmongo) => {
    return mongoose.connect(urlmongo);

}

module.exports = { ConnectDB };