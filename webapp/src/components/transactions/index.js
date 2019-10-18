import React from 'react'
import PropTypes from 'prop-types'
import {useQuery} from '@apollo/react-hooks';
import {GET_TRANSACTIONS} from '../../utils/graphqlQueries';
import styles from './index.styles'

const Transactions = (props) => {
  const {loading, error, data} = useQuery(GET_TRANSACTIONS)

  if (loading) return (<div>Loading</div>)
  if (error) return (<div>There has been an error</div>)

  console.log({loading, error, data})

  return (
    <div css={styles.container}>
      {
        data && data.transactions.length ? data.transactions.map((txn) => (
          <button>
            test
          </button>
        )) : (
          <div>No transactions have been found. </div>
        )
      }
    </div>
  )
}

Transactions.propTypes = {}
Transactions.defaultProps = {}

export default Transactions
