const { Sequelize } = require("sequelize");

const sequelize: any = new Sequelize(
    "postgres://postgres:admin@localhost:5432/postgres",
    {
      dialect: "postgres",
      protocol: "postgres",
    }
  );
  
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err: any) => {
      console.error("Unable to connect to the database:", err);
    });

    let PageLoads = sequelize.define('page_loads', {
        userAgent: Sequelize.STRING,
        time: Sequelize.DATE
    });

module.exports = {
    sequelize,
    PageLoads
}