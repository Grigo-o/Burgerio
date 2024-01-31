const chalk = require('chalk');
const express = require('express');
const connectMongoDatabase = require('./database/connect-mongo.database');
const cors = require('cors');

const application = express();

application.use(express.json());

application.use(cors());


application.use('/messages', require('./routers/messages.router'));
application.use('/auth', require('./routers/auth.router'));

application.use('*', (request, response) => {
    response.render('notFound', {
        pageTitle: 'Burgerio Application | 404 NOT FOUND',
        isNotFound: true,
    });
});

application.listen(5009, () => {
    console.log(chalk.bold.yellow('Server started on port 5009'));

    connectMongoDatabase();
});