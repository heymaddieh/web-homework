import gql from 'graphql-tag'

export const GET_TRANSACTIONS = gql`
  {
    transactions {
      id
      amount
      credit
      debit
      description
    }
  }
`
