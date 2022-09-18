import React from 'react'
import Col from './column'
function fragment() {
  return (
        //the fragment is used so that we don't add a new 
        // to the dom tree and we can define it by empty
        //open and closing tag but that does'nt match in map key
      <React.Fragment>
        <table>
            <tbody>
                <tr>
                    <Col />
                </tr>
            </tbody>
        </table>
      </React.Fragment>
  )
}

export default fragment
