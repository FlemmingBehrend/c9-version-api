const express = require("express");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const graphqlSchema = require("./schema/index");

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  expressGraphQL({
    schema: graphqlSchema,
    graphiql: true
  })
);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
