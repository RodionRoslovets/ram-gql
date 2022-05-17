module.exports = {
  client: {
    addTypename: true,
    includes: ['./queries/**/*.tsx'],
    service: {
      name: 'ram-gql',
      url: 'https://rickandmortyapi.com/graphql',
    },
  },
}
