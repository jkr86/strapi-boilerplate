module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "carexconnectdb.postgres.database.azure.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "carexconnect_cms"),
      user: env("DATABASE_USERNAME", "carexconnectdb@carexconnectdb"),
      password: env("DATABASE_PASSWORD", "XfYr2pFGR75eGUy"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    debug: false,
    useNullAsDefault: true,
  },
});
