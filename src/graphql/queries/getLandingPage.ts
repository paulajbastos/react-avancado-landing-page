const GET_LANDING_PAGE = /* GraphQL */ `
  # Write your query or mutation here
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`

export default GET_LANDING_PAGE
