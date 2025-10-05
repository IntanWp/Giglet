import type { Metadata } from "next"
import NewPaymentMethodClient from "./client"

export const metadata: Metadata = {
  title: "New Payment Method",
}

export default function NewPaymentMethodPage() {
  return <NewPaymentMethodClient />
}
