import React, {Component} from 'react'
import {Button, Form, Dropdown} from 'semantic-ui-react'

export default class ToolForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCategory: 'select a category',
      name: '',
      categoryId: null,
      description: '',
      image: 'https://www.fillmurray.com/200/300',
      active: true
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { name, description } = this.state
    let {selectedCategory, error, ...rest} = this.state
    return (
      <Form>
        <Form.Field required>
          <label>Name:</label>
          <input
            name='name'
            placeholder='Tool Name'
            value={name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <label>Category:</label>
          <Dropdown className='categories' text={this.state.selectedCategory}>
            <Dropdown.Menu>
              {this.props.categories.map(category => (
                <Dropdown.Item
                  key={category.id}
                  text={category.name}
                  name='category'
                  onClick={() => this.setState({
                    categoryId: category.id,
                    selectedCategory: category.name
                  })}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field required>
          <label>Description:</label>
          <input
            name='description'
            placeholder='Tool Description'
            value={description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button onClick={() => this.props.handleSubmit(rest)}>Submit</Button>
      </Form>
    )
  }
}