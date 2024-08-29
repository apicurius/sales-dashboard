'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Profile() {
  const { data: session } = useSession()

  if (!session) {
    return <div>Please sign in to view your profile.</div>
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
            <AvatarFallback>{session.user?.name?.[0] || 'U'}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xl font-semibold">{session.user?.name}</p>
            <p className="text-muted-foreground">{session.user?.email}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}