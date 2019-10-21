import gql from 'graphql-tag'

export const GET_TRANSACTIONS = gql`
  {
    transactions {
      id
      amount
      credit
      debit
      description
      category
    }
  }
`

export const CREATE_TRANSACTION = gql`
  mutation AddTransaction(
    $description: String!
    $amount: Float!
    $credit: Boolean!
    $debit: Boolean!
    $category: String!
  ) {
    addTransaction (
      description: $description
      amount: $amount
      credit: $credit
      debit: $debit
      category: $category
    ){
      description
      amount
      credit
      debit
      category
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
    $category: String!
  ) {
    updateTransaction(
      id: $id
      description: $description
      amount: $amount
      credit: $credit
      debit: $debit
      category: $category
    ) {
        id      
        description
        amount
        credit
        debit
        category
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
