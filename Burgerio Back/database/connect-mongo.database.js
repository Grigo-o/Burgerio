const mongoose = require('mongoose');
const chalk = require('chalk');

const connectMongoDatabase = async () => {
    mongoose.set('strictQuery', true);

    const connected = await mongoose.connect(
        'mongodb+srv://Grigo:saba2006@main-cluster.srglavv.mongodb.net/burgerio_api', { useNewUrlParser: true }, { useUnifiedTopology: true }
    );

    console.log(chalk.bold.cyan(`Mongo Connected: ${connected.connection.host}`));
};


module.exports = connectMongoDatabase;