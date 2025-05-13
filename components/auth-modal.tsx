"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: "signin" | "signup"
}

export function AuthModal({ isOpen, onClose, defaultMode = "signin" }: AuthModalProps) {
  const [isSignIn, setIsSignIn] = useState(defaultMode === "signin")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signIn, signUp } = useAuth()

  const toggleMode = () => {
    setIsSignIn(!isSignIn)
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (isSignIn) {
        await signIn(email, password)
      } else {
        await signUp(email, password)
      }
      onClose()
    } catch (error: any) {
      let errorMessage = "An error occurred. Please try again."

      if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address."
      } else if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Invalid email or password."
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters."
      } else if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already in use."
      }

      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {isSignIn ? "Sign In" : "Create Account"}
          </DialogTitle>
        </DialogHeader>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <Button type="submit" className="w-full bg-brand-pink hover:bg-brand-darkPink" disabled={isLoading}>
            {isLoading ? "Processing..." : isSignIn ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <button onClick={toggleMode} className="ml-1 text-brand-pink hover:underline focus:outline-none">
            {isSignIn ? "Create one" : "Sign in"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
