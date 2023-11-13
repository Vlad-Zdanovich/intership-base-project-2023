export type PaymentOperatorResponse = {
    service_id: number,
    cashback_percentage: number,
    recipient_mask: string,
    comment_mask?: string
}

export type PaymentOperationRequest = {
    card_id: number,
    service_id: string,
    size: number,
    size_cashback?: number,
    comment?: string,
    period_from: string,
    period_to?: string
  }
  
  export type PaymentOperationStatus = {
      success: boolean
  }