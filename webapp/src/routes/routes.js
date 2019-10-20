import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { css, Global } from '@emotion/core'

import Home from './home/index'
import { colors } from '../global'

const AppRouter = (props) => {
  return (
    <Router>
      <Global
        styles={css`
          div {
            box-sizing: border-box;
          }
      `}
      />
      <div css={styles.appContainer}>
        <nav css={styles.headerContainer}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/metrics'>Metrics</Link>
            </li>
          </ul>
        </nav>
        <div css={styles.mainContent}>
          <Route component={Home} exact path='/' />
        </div>
      </div>
    </Router>
  )
}

const styles = {
  appContainer: css({
    display: 'flex'
  }),
  headerContainer: css({
    height: '100vh',
    width: '150px',
    backgroundColor: colors.darkBlue,
    padding: '20px 10px',
    'li': {
      color: 'white',
      marginBottom: '10px',
      'a': { color: 'inherit' }
    }
  }),
  mainContent: css({
    width: '100%',
    height: '100vh',
    overflow: 'scroll'
  })
}

export default AppRouter
