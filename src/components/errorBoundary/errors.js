import React from 'react'

function errors({hero}) {
    if(hero==='joker') throw new Error('not a hero ')
  return (
    <div>
      {hero}
    </div>
  )
}

export default errors
