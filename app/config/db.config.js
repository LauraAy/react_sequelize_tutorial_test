module.exports = {
HOST: "localhost",
USER: "root",
PASSWORD: "SQL4pen4e",
DB: "testdb",
dialect: "mysql",
pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 1000
 }
};
