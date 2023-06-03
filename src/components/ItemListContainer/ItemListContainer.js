import React from 'react'

const ItemListContainer = ({greeting, fontSize}) => {
  return (
    <div className='row my-3'>
        <p className={fontSize}>
            {greeting}
        </p>
    </div>
  )
}

export default ItemListContainer