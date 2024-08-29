import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { Transaction } from '@/types/Transaction'

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), 'sales_data.json')
    const jsonData = await fs.readFile(filePath, 'utf8')
    const salesData: Transaction[] = JSON.parse(jsonData)

    return NextResponse.json(salesData)
  } catch (error) {
    console.error('Error reading sales data:', error)
    return NextResponse.json({ error: 'Failed to fetch sales data' }, { status: 500 })
  }
}