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

export const CREATE_TRANSACTION = gql`
  mutation AddTransaction(
    $description: String!
    $amount: Float!
    $credit: Boolean!
    $debit: Boolean!
  ) {
    addTransaction (
      description: $description
      amount: $amount
      credit: $credit
      debit: $debit
    ){
      description
      amount
      credit
      debit
    }
  }
`

export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction(
    $id: String!
    $description: String!
    $amount: Float!
    $credit: Boolean!
    $debit: Boolean!
  ) {
    updateTransaction(
      id: $id
      description: $description
      amount: $amount
      credit: $credit
      debit: $debit
    ) {
        id      
        description
        amount
        credit
        debit
      }
  }
`

export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction(
    $id: String!
  ) {
    deleteTransaction(
      id: $id
    ) {
        id      
      }
  }
`
