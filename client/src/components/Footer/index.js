import React from 'react'
import { Icon } from 'semantic-ui-react'

import styles from './styles.css'

export default function Footer () {
  return (
    <div className='footer'>
      <h4><Icon name='warehouse' /> Auckland Library of Tools</h4>
      <p><Icon name='location arrow' />Grey Lynn, Auckland</p>
      <a href="https://www.facebook.com/AucklandLibraryofTools/"><Icon name='facebook' />AucklandLibraryofTools</a><br />
      <a href="mailto:aucklandtoollibrary@gmail.com"><Icon name='mail' />aucklandtoollibrary@gmail.com</a>
    </div>
  )
}
