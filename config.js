const baseIp = "192.168.42.229";
var knex = require("knex");
const port = 5000;

const database = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "nkumba",
  },
});

module.exports = {
  baseIp,
  port,
  database,
};
