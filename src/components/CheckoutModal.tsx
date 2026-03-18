import { useState, useEffect, useRef } from 'react'
import shopItems from '../data/shopItems'
import emailjs from "@emailjs/browser"
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
interface GooglePayWindow extends Window {
    google: {
        payments: {
            api: {
                PaymentsClient: new (config: { environment: string }) => {
                    loadPaymentData: (request: object) => Promise<object>
                }
            }
        }
    }
}

const CheckoutModal = ({ onClose, shoppingCart, totalAmountCalculationFunction }: CheckoutModalProps) => {
    const [isClosing, setIsClosing] = useState(false)
    const [agreed, setAgreed] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        zipcode: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        email: '',
        street: '',
        city: '',
        zipcode: '',
        agree: ''
    })

    /***   CLOSE TEMPLATE */
    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, 400)
    }

    /*** FORM HANDLING AND  VALIDATION */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    /** Scroll to error */
    const contactRef = useRef<HTMLElement>(null)
    const deliveryRef = useRef<HTMLElement>(null)
    const paymentRef = useRef<HTMLElement>(null)

    /** Vallidate form */
    const validate = () => {
        const newErrors = { name: '', surname: '', email: '', street: '', city: '', zipcode: '', agree: '' }
        let valid = true

        if (!formData.name) { newErrors.name = 'Name is required'; valid = false }
        if (!formData.email) { newErrors.email = 'Email is required'; valid = false }
        if (!formData.surname) { newErrors.surname = 'Surname is required'; valid = false }
        if (!formData.street) { newErrors.street = 'Street is required'; valid = false }
        if (!formData.city) { newErrors.city = 'City is required'; valid = false }
        if (!formData.zipcode) { newErrors.zipcode = 'Zip code is required'; valid = false }
        if (!agreed) { newErrors.agree = 'Please agree to the terms'; valid = false }

        /** Set errors */
        setErrors(newErrors)
        if (!formData.name || !formData.surname || !formData.email) {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        } else if (!formData.street || !formData.city || !formData.zipcode) {
            deliveryRef.current?.scrollIntoView({ behavior: 'smooth' })
        } else if (!agreed) {
            paymentRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        return valid
    }


    /*** ORDER CONFIRMATION */
    const sendOrderConfirmation = async (email: string) => {
        await emailjs.send(
            "service_k1i50up",
            "template_g6r6tll",
            {
                order_id: Math.random().toString(36).substr(2, 9).toUpperCase(),
                email: email,
                orders: shoppingCart.map(item => ({
                    name: item.product.name,
                    price: item.product.price,
                    units: item.quantity,
                    image_url: item.product.imgUrl
                })),
                cost: {
                    shipping: 0,
                    tax: 0,
                    total: totalAmountCalculationFunction()
                }
            },
            "Q5Ztx5pAS5z8gSFkK"
        )
    }

    /*** PAYMENT */
    /** GooglePay script preload */
        useEffect(() => {
            const script = document.createElement('script')
            script.src = 'https://pay.google.com/gp/p/js/pay.js'
            script.async = true
            document.body.appendChild(script)
            return () => {
                document.body.removeChild(script)
            }
        }, [])

    const handlePayment = async () => {
        if (!validate()) return

        const paymentsClient = new (window as unknown as GooglePayWindow).google.payments.api.PaymentsClient({
            environment: 'TEST'
        })

        const paymentRequest = {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [{
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['VISA', 'MASTERCARD']
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleMerchantId'
                    }
                }
            }],
            merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Tiny Little Robots'
            },
            transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPrice: String(totalAmountCalculationFunction()),
                currencyCode: 'USD',
                countryCode: 'US'
            }
        }

        try {
            const paymentData = await paymentsClient.loadPaymentData(paymentRequest)
            console.log(paymentData)
            await sendOrderConfirmation(formData.email)
            handleClose()
        } catch (err) {
            console.log(err)
        }
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
            <section className='pay-section' ref={contactRef}>
                <h3>Contact</h3>
                <div>
                    {errors.name && <p className="field-error">{errors.name}</p>}
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        className='squircle-xl' 
                        onChange={handleChange}
                    />

                    {errors.surname && <p className="field-error">{errors.surname}</p>}
                    <label htmlFor='surname'>Surname</label>
                    <input 
                        type='text' 
                        id='surname' 
                        className='squircle-xl' 
                        onChange={handleChange}
                    />

                    {errors.email && <p className="field-error">{errors.email}</p>}
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        className='squircle-xl' 
                        onChange={handleChange}
                    />
                   
                    <label htmlFor='phone'>Phone</label>
                    <input 
                        type='tel' 
                        id='phone' 
                        className='squircle-xl'
                        onChange={handleChange} 
                    />
                </div>
            </section>
            <section className='pay-section' ref={deliveryRef}>
                <h3>Delivery</h3>
                <div>
                    {errors.street && <p className="field-error">{errors.street}</p>}
                    <label htmlFor="street">Street and number</label>
                    <input 
                        type="text" 
                        id='street' 
                        className='squircle-xl'
                        onChange={handleChange}
                    />
                   
                    {errors.city && <p className="field-error">{errors.city}</p>}
                    <label htmlFor="city">City</label>
                    <input 
                        type="text" 
                        id='city' 
                        className='squircle-xl' 
                        onChange={handleChange}
                    />

                    {errors.zipcode && <p className="field-error">{errors.zipcode}</p>}
                    <label htmlFor="zipcode">Zip-Code</label>
                    <input 
                        type="text" 
                        id='zipcode' 
                        className='squircle-xl' 
                        onChange={handleChange}
                    />
                </div>
            </section>
            <section className='pay-section' ref={paymentRef}>
                <h3>Payment</h3>
                {errors.agree && <p className="field-error">{errors.agree}</p>}
                <div className='checkbox-row'>
                    <label htmlFor='agree'>
                        I agree to the e-shop's terms and conditions.
                    </label>
                    <input 
                        type="checkbox" 
                        id='agree' 
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                </div>
                <button 
                    className='payment-button squircle-xl'
                    onClick={handlePayment}
                >
                    Pay
                </button>
            </section>
        </div>
    </div>
  )
}

export default CheckoutModal
