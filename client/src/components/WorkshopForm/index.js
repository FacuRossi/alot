import React, {Component} from 'react'
import {Button, Form, Dropdown} from 'semantic-ui-react'

import styles from './styles.css'

export default class WorkshopForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      workshopId: 0,
      name: '',
      categoryId: null,
      selectedCategory: 'Select',
      instructor: '',
      description: '',
      body: '',
      image: 'https://www.fillmurray.com/200/300'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // to modify later on completion of edit workshop
  componentDidMount() {
    if(this.props.parent === 'edit') {
      let {name, categoryId, id, description, image, body, instructor} = this.props.editing
      this.setState({
        workshopId: id,
        name: name,
        categoryId: categoryId,
        selectedCategory: this.props.categoryName,
        instructor: instructor,
        description: description,
        body: body,
        image: image
      })
    }
  }

  render () {
    const { name, description, body, instructor } = this.state
    let {selectedCategory, error, workshopId, ...rest} = this.state
    return (
      <div className={styles.workshopForm}>
      {
      this.props.parent === 'edit'
      ? <h2>Edit this workshop:</h2>
      : <h2>Add a workshop:</h2>
      }
      <Form>
        <Form.Field className={styles.field} required>
          <label>Name</label>
          <Form.Input
            transparent
            className={styles.input}
            name='name'
            placeholder='Workshop Name'
            value={name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <p className={styles.label}>Category</p>
          <Dropdown className={styles.dropdown} text={this.state.selectedCategory}>
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
        <Form.Field className={styles.field} required>
          <p className={styles.label}>Instructor</p>
          <Form.Input
            transparent
            className={styles.input}
            name='instructor'
            placeholder='Instructor Name'
            value={instructor}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <p className={styles.label}>Description</p>
          <Form.Input
            transparent
            className={styles.input}
            name='description'
            placeholder='Workshop Description'
            value={description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <p className={styles.label}>Details</p>
          <Form.Input
            transparent
            className={styles.input}
            name='body'
            placeholder='Workshop Details'
            value={body}
            onChange={this.handleChange}
          />
        </Form.Field>
        <div className={styles.buttonContainer}>
        <Button className={styles.submit} onClick={() => this.props.handleSubmit(rest, workshopId)}>Submit</Button>
        <Button className={styles.back} onClick={() => this.props.goBack()}>Go Back</Button>
        </div>
      </Form>
      </div>
    )
  }
}
