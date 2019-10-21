import { css } from '@emotion/core'
import { colors } from '../../global'

export default {
  container: css({
    width: '100%',
    border: `1px solid ${colors.grey}`,
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column'
  }),
  transaction: css({
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${colors.lightGrey}`,
    padding: '10px',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    ':hover': {
      backgroundColor: 'rgba(156, 255, 250, 0.25)'
    },
    ':focus': {
      backgroundColor: 'rgba(156, 255, 250, 0.25)'
    }
  }),
  last: css({
    borderBottom: 'none',
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px'
  }),
  desc: css({
    fontSize: '14px',
    fontWeight: '500',
    margin: '0',
    marginBottom: '10px',
    textAlign: 'left'

  }),
  type: css({
    margin: 0,
    fontSize: '14px',
    textAlign: 'left'
  }),
  amount: css({
    color: colors.darkBlue,
    fontSize: '16px',
    fontWeight: '500',
    textAlign: 'right',
    marginRight: '20px'
  }),
  rightContainer: css({
    display: 'flex',
    alignItems: 'center'
  }),
  deleteButtonContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  deleteHeading: css({
    textAlign: 'center',
    marginBottom: '15px'
  }),
  deleteDesc: css({
    textAlign: 'center',
    margin: '0 0 15px'
  })
}
