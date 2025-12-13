// Paymob types
export interface PaymobPaymentRequest {
  amount: number
  email: string
  phone: string
  name: string
}

export interface PaymobPaymentResponse {
  paymentUrl: string
  orderId: number
}
