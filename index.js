const { app } = require('./dist/server.js');

const port = process.env.PORT || 3000;

const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'my-db-name',
    password: 'newPassword',
    port: 5432,
});

client.connect();

client
    .query('SELECT NOW()')
    .then((res) => {
        console.log(res.rows);
        client.end();
    })
    .catch((error) => {
        console.log(`Postgres error: ${error}`);
    });

app.listen(port, () => {
    console.log('Application is started on localhost: ', port);
});
