module.exports = {
  client: {
    service: {
      name: "hirosaa",
      url: "http://localhost:8080/v1/graphql",
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
    includes: ["src/graphql/**/*.{gql,graphql}"],
  },
};
