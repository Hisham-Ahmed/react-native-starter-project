import Home from './home'
import * as actions from './action'
import {connect} from 'react-redux'
import {getNav, getHome} from '../../reducers'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getHome(state),
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
