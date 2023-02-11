export type ToastModel = {
  type: 'success' | 'danger'
  message: string
}

export function Toast({ type, message }: ToastModel) {
  return <div />
}
