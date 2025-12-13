export type AnalyticsEvent =
  | 'page_view'
  | 'form_start'
  | 'form_complete'
  | 'payment_start'
  | 'payment_complete'
  | 'button_click'

export interface AnalyticsEventData {
  event: AnalyticsEvent
  properties?: Record<string, any>
}
