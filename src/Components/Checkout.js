import React from 'react'

const Checkout = () => {
  return (
    <div>
       <div className="h-96  text-center space-y-4 p-4 shadow-lg">
        <h2 className="font-bold text-xl">Checkout</h2>
        <div className="max-h-80 overflow-y-auto  ">
          {/* checkout items */}
          <ItemList items = {cartItems} />
        </div>
      </div>
    </div>
  )
}

export default Checkout
