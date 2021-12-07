const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolver");
const conectarDB = require("./config/db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "variables.env" });

conectarDB();

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers["authorization"] || "";
    if (token) {
      try {
        const usuario = jwt.verify(
          token.replace("Bearer ", ""),
          process.env.SECRET
        );
        return {
          usuario,
        };
      } catch (error) {
        console.log(error);
      }
    }
  },
});

const port = process.env.PORT || 4000;

// Arrancar el servidor
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
