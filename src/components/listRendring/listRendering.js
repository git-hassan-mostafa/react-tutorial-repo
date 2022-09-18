import React from 'react'
import ListP from './listParent'
function listRendering() {
  let persons = [
    {
      id:1,
      name: 'hassan',
      age: 20,
      skill: 'react'
    },
    {
      id:2,
      name: 'mohamad',
      age: 21,
      skill: 'c#'
    },
    {
      id:3,
      name: 'mostafa',
      age: 19,
      skill: 'adawat'
    }
  ]
  // list rendering with key keyword that give each child an identity 
  // if no id you can use the index in some cases not in all 
  const people = persons.map((person,i) =>
          <ListP key={i} person={person}/>
  )
  return (
    <div >
      {people}
    </div>
  )
}

export default listRendering
