'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import SalesList from '@/components/SalesList'
import { Transaction } from '@/types/Transaction'

async function fetchSalesData(): Promise<Transaction[]> {
  const response = await fetch('/api/sales')
  if (!response.ok) {
    throw new Error('Failed to fetch sales data')
  }
  return response.json()
}

export default function Sales() {
  const [search, setSearch] = useState('')
  const { data: sales = [], isLoading, error } = useQuery<Transaction[], Error>({
    queryKey: ['salesData'],
    queryFn: fetchSalesData,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {(error as Error).message}</div>
  if (!sales || sales.length === 0) return <div>No sales data available</div>

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Sales</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sales Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="search"
            placeholder="Search sales..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />
          <SalesList sales={sales} search={search} />
        </CardContent>
      </Card>
    </div>
  )
}