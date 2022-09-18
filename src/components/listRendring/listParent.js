import React from 'react'

function listParent({person}) {
  return (
    <div>
      <h4>my name is {person.name} ,
      I am {person.age} , I know {person.skill}
    </h4>
    </div>
  )
}

export default listParent
