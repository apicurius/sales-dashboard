import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to Sales Dashboard</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Track your sales, analyze trends, and boost your business performance with our powerful dashboard.
      </p>
      <div className="space-x-4">
        <Link href="/dashboard">
          <Button size="lg">Go to Dashboard</Button>
        </Link>
        <Link href="/sales">
          <Button size="lg" variant="outline">View Sales</Button>
        </Link>
      </div>
    </div>
  )
}