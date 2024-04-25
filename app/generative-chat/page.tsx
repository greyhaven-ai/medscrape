import { Chat } from '@/components/chat'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Page() {
  const isLoggedIn = cookies().get('isLoggedIn')?.value

  if (!isLoggedIn) {
    redirect('/login')
  }

  return <Chat />
}
