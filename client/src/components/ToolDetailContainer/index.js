import {connect} from 'react-redux'

import {fetchTools} from '../ToolsContainer/actions'

import ToolDetailContainer from './ToolDetailContainer'

const mapStateToProps = (state) => {
  return {
    tools: state.tools.tools
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolDetailContainer)
