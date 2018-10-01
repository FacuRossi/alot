import {connect} from 'react-redux'

import {fetchTools} from './actions'
import {fetchCategories} from '../CategoryFilter/actions'

import ToolsContainer from './ToolsContainer'

import styles from './styles.css'

const mapStateToProps = (state) => {
  const allCategories = state.categories.categories.map((category) => category.id)
  return {
    tools: state.tools.tools,
    displayedCategory: allCategories,
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTools: () => dispatch(fetchTools()),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer)
