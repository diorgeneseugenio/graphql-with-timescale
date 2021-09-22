import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/postgres',
    {
        dialect: 'postgres',
        protocol: 'postgres'
    })

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err: any) => {
    console.error('Unable to connect to the database:', err);
});    