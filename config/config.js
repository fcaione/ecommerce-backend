require("dotenv").config()
module.exports = {
    development: {
      database: "ecommerce_development",
      host: "127.0.0.1",
      dialect: "postgres"
    },
    test: {
      database: "ecommerce_test",
      host: "127.0.0.1",
      dialect: "postgres"
    },
    production: {
      use_env_variable: "DATABASE_URL",
      host: "127.0.0.1",
      dialect: "postgres",
      dialectOptions: {
        rejectUnauthorized: false,
        require: true
      }
    }
}
