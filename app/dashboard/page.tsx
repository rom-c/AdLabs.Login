"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { BarChart3, Tv, Globe, Smartphone } from "lucide-react"

export default function Dashboard() {
  const { user, loading, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-pink border-t-transparent"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-brand-pink rounded-md">
                  <span className="text-white font-bold text-xs">AD</span>
                </div>
              </div>
              <span className="text-xl font-bold">AdLabs Dashboard</span>
            </div>
          </div>
          <Button variant="outline" onClick={logout}>
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>
        <p className="text-muted-foreground mb-8">You are signed in as {user.email}</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-brand-pink" />
            </div>
            <h2 className="text-xl font-bold mb-2">DOOH Campaigns</h2>
            <p className="text-muted-foreground mb-4">Manage your digital out-of-home advertising campaigns.</p>
            <Button className="w-full bg-brand-pink hover:bg-brand-darkPink">View Campaigns</Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
              <Tv className="h-6 w-6 text-brand-pink" />
            </div>
            <h2 className="text-xl font-bold mb-2">CTV Campaigns</h2>
            <p className="text-muted-foreground mb-4">Manage your connected TV advertising campaigns.</p>
            <Button className="w-full bg-brand-pink hover:bg-brand-darkPink">View Campaigns</Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-brand-pink" />
            </div>
            <h2 className="text-xl font-bold mb-2">Digital Campaigns</h2>
            <p className="text-muted-foreground mb-4">Manage your digital media advertising campaigns.</p>
            <Button className="w-full bg-brand-pink hover:bg-brand-darkPink">View Campaigns</Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-brand-pink" />
            </div>
            <h2 className="text-xl font-bold mb-2">App Campaigns</h2>
            <p className="text-muted-foreground mb-4">Manage your mobile app advertising campaigns.</p>
            <Button className="w-full bg-brand-pink hover:bg-brand-darkPink">View Campaigns</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
