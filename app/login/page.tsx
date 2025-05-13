"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const idToken = await signIn(email, password)
      const displayName = email // Fallback to email if no display name

      // Redirect to the dashboard with token and name
      window.location.href = `https://dashboard.thecheerlab.com?token=${encodeURIComponent(idToken)}&name=${encodeURIComponent(displayName)}`
    } catch (error: any) {
      let errorMessage = "An error occurred. Please try again."

      if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address."
      } else if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Invalid email or password."
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many failed login attempts. Please try again later."
      }

      setError(errorMessage)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <header className="border-b border-brand-card/50 bg-brand-darkest">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-brand-pink rounded-md">
                  <span className="text-white font-bold text-xs">AD</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white">AdLabs</span>
              <span className="text-xs text-gray-400">by Labs CX</span>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Sign in to your account</h1>
            <p className="mt-2 text-sm text-gray-400">Enter your credentials to access your dashboard</p>
          </div>

          {error && (
            <Alert variant="destructive" className="bg-red-900/20 border-red-800">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-brand-card border-brand-card/50 text-white"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Link href="#" className="text-sm text-brand-pink hover:text-brand-lightPink">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-brand-card border-brand-card/50 text-white"
              />
            </div>

            <Button type="submit" className="w-full bg-brand-pink hover:bg-brand-darkPink" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="text-center text-sm text-gray-400">
            <p>
              Don't have an account?{" "}
              <Link href="/signup" className="text-brand-pink hover:text-brand-lightPink">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t border-brand-card/50">
        <div className="container text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AdLabs by Labs CX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
