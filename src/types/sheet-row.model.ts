// Google Sheets row type
export interface SheetRow {
  timestamp: string
  name: string
  email: string
  phone: string
  storeUrl: string
  monthlyOrders: string
  status: 'pending' | 'paid' | 'contacted' | 'converted'
  locale: string
  paymentId?: string
}
