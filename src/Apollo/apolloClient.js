import {ApolloClient,HttpLink , InMemoryCache, gql} from '@apollo/client'

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'https://beta.pokeapi.co/graphql/v1beta'
  })
})


export default client
