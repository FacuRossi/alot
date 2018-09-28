import React from 'react'
import {Button, Divider, Icon, Item, Label, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const ConfirmationTool = (props) => (
  <div className='confirmation'>
  <h1>Confirm Your Tool Rental</h1>
  <Divider/>
  <Image src={props.selectedTool.image}/>
    <h2>{props.selectedTool.name}</h2>
    <p>{props.selectedTool.description}</p>
      <br/>
      <p>Are you sure you would like to rent this tool?</p>
      <br/>
      <p>It will be available for collection from 9am Monday - Friday</p>
      <Button.Group>
        <Link to='#'>
          <Button>Cancel</Button>
        </Link>
        <Button.Or />
        <Link to='#'>
          <Button positive>Confirm</Button>
        </Link>
      </Button.Group>
  </div>
)

export default ConfirmationTool
