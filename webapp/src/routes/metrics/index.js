import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { css } from '@emotion/core'
import PieChart from 'react-minimal-pie-chart'
import { GET_TRANSACTIONS } from '../../utils/graphqlQueries'
import Subheader from '../../components/Subheader'
import { colors } from '../../global'

const Metrics = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS)

  const categories = {
    'Fast Food': { name: 'Fast Food', color: colors.darkBlue, transactions: [] },
    'Groceries': { name: 'Groceries', color: colors.green, transactions: [] },
    'Rent': { name: 'Rent', color: colors.lightBlue, transactions: [] },
    'Utilities': { name: 'Utilities', color: colors.coral, transactions: [] },
    'Fun': { name: 'Fun', color: colors.purple, transactions: [] },
    'Other': { name: 'Other', color: colors.grey, transactions: [] }
  }

  if (data) {
    // Loop through transactions and add them to the corresponding category object
    data.transactions.forEach((txn) => categories[txn.category].transactions.push(txn))
  }

  return data && data.transactions.length ? (
    <div>
      <Subheader heading={'Metrics'} />
      <div css={styles.container}>
        <h3 css={styles.heading}>Categories</h3>
        <div css={styles.pieChartContainer}>
          <PieChart
            animate
            data={Object.values(categories).map(cat => (
              {
                title: cat.name,
                value:
                    cat.transactions.reduce((total, txn) => total + txn.amount, 0) / data.transactions.reduce((total, txn) => total + txn.amount, 0),
                color: cat.color
              }
            ))}
          />
          <div css={styles.detailsContainer}>
            {Object.values(categories).map((cat) => (
              <div css={styles.detail} key={cat.name}>
                <div css={styles.detailLeft}>
                  <div css={styles.detailColor} style={{ backgroundColor: cat.color }} />
                  <h4 css={styles.detailText}>{cat.name}</h4>
                </div>
                <h4 css={styles.detailText}>${cat.transactions.reduce((total, txn) => total + txn.amount, 0)}</h4>
              </div>
            ))}
          </div>
        </div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>There has been an error...</h1>}
      </div>
    </div>
  ) : (
    <div>
      <h3 style={{ marginLeft: '15px' }}>Create some transactions to see metrics.</h3>
    </div>
  )
}

const styles = {
  container: css({
    padding: '15px'
  }),
  pieChartContainer: css({
    display: 'flex',
    justifyContent: 'space-around'
  }),
  detailsContainer: css({
    width: '45%',
    border: `1px solid ${colors.grey}`,
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }),
  detail: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: `1px solid ${colors.lightGrey}`
  }),
  detailLeft: css({
    display: 'flex',
    alignItems: 'center'
  }),
  detailColor: css({
    height: '30px',
    width: '30px',
    borderRadius: '4px',
    marginRight: '20px'
  }),
  detailText: css({
    margin: 0
  })
}

Metrics.propTypes = {}
Metrics.defaultProps = {}

export default Metrics
