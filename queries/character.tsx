import gql from 'graphql-tag'
import { LOCATION } from './fragments/location'

export const CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      created
      location {
        ...location
      }
      origin {
        ...location
      }
    }
  }
  ${LOCATION}
`
