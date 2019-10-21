import React, { useState } from 'react'
import Transactions from '../../components/transactions'
import Button from '../../components/Button'
import { css } from '@emotion/core'
import CreateTransactionModal from '../../components/CreateTransactionModal'
import Subheader from '../../components/Subheader'
import Checkbox from '../../components/Checkbox'
import { useQuery } from '@apollo/react-hooks'
import { GET_TRANSACTIONS } from '../../utils/graphqlQueries'

const Home = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTransaction, setActiveTransaction] = useState(null)
  const [useRomanNumerals, setUseRomanNumerals] = useState(false)

  const openEditTransaction = (activeTransaction) => {
    setActiveTransaction(activeTransaction)
    setModalOpen(true)
  }

  if (loading) return (<div>Loading</div>)
  if (error) return (<div>There has been an error</div>)

  return (
    <div>
      <Subheader
        heading={'Transactions'}
        right={(
          <Checkbox
            label='Roman Numerals'
            onClick={() => setUseRomanNumerals(!useRomanNumerals)}
            value={useRomanNumerals}
          />
        )}
      />
      <div css={styles.content}>
        <Button css={styles.test} onClick={() => setModalOpen(true)}>Create Transaction</Button>
        <Transactions openEditTransaction={openEditTransaction} transactions={data && data.transactions} useRomanNumerals={useRomanNumerals} />
      </div>
      {modalOpen && (
        <CreateTransactionModal
          activeTransaction={activeTransaction}
          closeModal={() => {
            setModalOpen(false)
            setActiveTransaction(null)
          }}
          open
        />
      )}
    </div>
  )
}

const styles = {
  test: css({
    marginBottom: '20px',
    alignSelf: 'flex-end'
  }),
  content: css({
    padding: '0 15px 15px',
    display: 'flex',
    flexDirection: 'column'
  })
}

export default Home
