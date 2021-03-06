// @flow

import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import type { ChangePasswordDispatchProps, ChangePasswordOwnProps, ChangePasswordStateProps } from '../../components/scenes/ChangePasswordScene'
import ChangePasswordComponent from '../../components/scenes/ChangePasswordScene'
import { type RootState } from '../../types/reduxTypes.js'

const mapStateToProps = (state: RootState, ownProps: ChangePasswordOwnProps): ChangePasswordStateProps => ({
  context: state.core.context,
  account: state.core.account,
  showHeader: false
})

const mapDispatchToProps = (dispatch: Dispatch): ChangePasswordDispatchProps => ({
  onComplete: Actions.pop
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordComponent)
