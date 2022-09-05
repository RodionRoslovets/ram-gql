import gql from 'graphql-tag'

export const LOCATION = gql`
  fragment location on Location {
    id
    name
    type
    dimension
  }
`
