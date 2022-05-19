import gql from 'graphql-tag'

export const MAIN_PAGE = gql`
  query main_page($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`
