import React from 'react'

export default function Tag({tag}) {
  console.log(tag)
  return (
        <div key={tag} className='rental__tag'>
            <p className='rental__tagText'>{tag}</p>
        </div>
  )
}
