import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartWidget = () => {
  return (
    <div className='d-flex align-items-center'>
        <ShoppingCartOutlinedIcon/>
        <p className='fw-semibold me-3'>3</p>
    </div>
  )
}

export default CartWidget