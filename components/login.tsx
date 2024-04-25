'use client'

import React, { useState, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  // Accessing environment variables
  const USER_EMAIL = process.env.NEXT_PUBLIC_USER_EMAIL
  const USER_PASSWORD = process.env.NEXT_PUBLIC_USER_PASSWORD

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email === USER_EMAIL && password === USER_PASSWORD) {
      document.cookie = 'isLoggedIn=true; path=/'
      router.push('/chat')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-full min-h-screen lg:grid lg:grid-cols-2"
    >
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••••"
                required
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/medscrape-login.png"
          alt="Image"
          width="2702"
          height="1632"
          className="h-full w-full object-cover"
        />
      </div>
    </form>
  )
}
