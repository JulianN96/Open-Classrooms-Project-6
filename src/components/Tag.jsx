import React from 'react'

export default function Tag(tags) {
  return (
    <div className='rental__tags'>
        {tags.tags.map((tag) => (
        <div key={tag} className='rental__tag'>
            <p className='rental__tagText'>{tag}</p>
        </div>
        ))}
    </div>
  )
}
