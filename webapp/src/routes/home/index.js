import React from 'react'
// import { Link } from 'react-router-dom'
import Transactions from '../../components/transactions'
import Button from '../../components/Button'
import { css } from '@emotion/core'
import CreateTransactionModal from '../../components/CreateTransactionModal'
import Subheader from '../../components/Subheader'

class Home extends React.Component {
  state = {
    modalOpen: false,
    activeTransaction: null
  }

  openEditTransaction = (activeTransaction) => this.setState({ activeTransaction, modalOpen: true });

  render () {
    const { modalOpen, activeTransaction } = this.state
    return (
      <div>
        <Subheader heading={'Transactions'} />
        <div css={styles.content}>
          <Button css={styles.test} onClick={() => this.setState({ modalOpen: true })}>Create Transaction</Button>
          <Transactions openEditTransaction={this.openEditTransaction} />
        </div>
        {modalOpen && <CreateTransactionModal activeTransaction={activeTransaction} closeModal={() => this.setState({ modalOpen: false, activeTransaction: null })} open />}
      </div>
    )
  }
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
