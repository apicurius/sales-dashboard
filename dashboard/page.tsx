import React from 'react'
import SalesDashboard from '@/components/SalesDashboard'

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold tracking-tight">Sales Dashboard</h1>
      <SalesDashboard />
    </div>
  )
}