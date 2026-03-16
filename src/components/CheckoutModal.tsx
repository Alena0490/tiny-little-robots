import { useState } from 'react'
import shopItems from '../data/shopItems'
import './CheckoutModal.css'

type CartItem = {
    product: typeof shopItems[0]
    quantity: number
}

interface CheckoutModalProps {
    onClose: () => void
    shoppingCart: CartItem[]
    totalAmountCalculationFunction: () => number
}

const CheckoutModal = ({ onClose, shoppingCart, totalAmountCalculationFunction }: CheckoutModalProps) => {
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, 400)
    }

  return (
    <div className="modal-backdrop" onClick={handleClose}>
        <div
            className={`squircle-xl checkout-modal ${isClosing ? 'is-closing' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
            onClick={(e) => e.stopPropagation()}
        >
            <button 
                className='modal-close' 
                onClick={handleClose}
                aria-label="Close checkout modal"
            >✕</button>
            <section className='pay-section'>
                <h3 id="checkout-title">Order Summary</h3>
                <div className='order-check'>
                    <ul>
                        {shoppingCart.map(item => (
                            <li key={item.product.id}>
                                <img src={item.product.img} alt={item.product.alt} />
                                <span>{item.product.name}</span>
                                <span>x{item.quantity}</span>
                                <span>{item.product.price * item.quantity} USD</span>
                            </li>
                        ))}
                    </ul>
                    <p>Total: {totalAmountCalculationFunction()} USD</p>
                </div>
            </section>
            <section className='pay-section'>
                <h3>Contact</h3>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' className='squircle-xl' />
                    <label htmlFor='surname'>Surname</label>
                    <input type='text' id='surname' className='squircle-xl' />
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' className='squircle-xl' />
                    <label htmlFor='phone'>Phone</label>
                    <input type='tel' id='phone' className='squircle-xl' />
                </div>
            </section>
            <section className='pay-section'>
                <h3>Delivery</h3>
                <div>
                    <label htmlFor="street">Street and number</label>
                    <input type="text" id='street' className='squircle-xl' />
                    <label htmlFor="city">City</label>
                    <input type="text" id='city' className='squircle-xl' />
                    <label htmlFor="zipcode">Zip-Code</label>
                    <input type="text" id='zipcode' className='squircle-xl' />
                </div>
            </section>
            <section className='pay-section'>
                <h3>Payment</h3>
            </section>
        </div>
    </div>
  )
}

export default CheckoutModal
