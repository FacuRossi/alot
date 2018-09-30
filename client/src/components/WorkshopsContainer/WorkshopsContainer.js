import React, {Component} from 'react'

import Workshops from '../Workshops'

export default class WorkshopsContainer extends Component {

  componentDidMount () {
    this.props.fetchWorkshops()
    this.props.fetchCategories()
  }

  render () {
    if (this.props.ready) {
      const {id} = this.props.categories.find((cat) => (
        cat.name.toLowerCase() === this.props.match.params.category))
      const filteredWorkshops = this.props.workshops.filter((workshop) => (
        workshop.categoryId === id))
      return (
        <div className='workshops-container' >
          {
            this.props.match.params.category
              ? <Workshops
                workshops={filteredWorkshops}
                category={this.props.categories}/>
              : <Workshops
                workshops={this.props.workshops}
                category={this.props.categories}/>
          }
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}
