import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const STIPE_PUBLIC_KEY = "pk_test_51LwLEaIoP2MwfIyQTfzbwbWOhbeU2jcI0YpCQTNSQJtlBEvam0TqPy2nsFMGheb1OueYmUfZ958JSj49Cgyn3dmY00hQtAbPhL"
const stripeTestPromise = loadStripe(STIPE_PUBLIC_KEY)



export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>
  )
}
