"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user } = useAuth()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-card/50 bg-brand-darkest">
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

          <nav className="hidden md:flex gap-6">
            <Link href="#dooh" className="text-sm font-medium text-white hover:text-brand-pink">
              DOOH
            </Link>
            <Link href="#ctv" className="text-sm font-medium text-white hover:text-brand-pink">
              CTV
            </Link>
            <Link href="#digital" className="text-sm font-medium text-white hover:text-brand-pink">
              Digital
            </Link>
            <Link href="#app" className="text-sm font-medium text-white hover:text-brand-pink">
              App
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {user ? (
            <Button asChild className="bg-brand-pink hover:bg-brand-darkPink">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                asChild
                className="hidden md:inline-flex text-white hover:text-brand-pink hover:bg-brand-card/50"
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-brand-pink hover:bg-brand-darkPink">
                <Link href="/signup">Create Account</Link>
              </Button>
            </>
          )}

          <button className="md:hidden text-white" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-brand-card/50 p-4 animate-fade-in bg-brand-darkest">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#dooh"
              className="text-sm font-medium text-white hover:text-brand-pink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DOOH
            </Link>
            <Link
              href="#ctv"
              className="text-sm font-medium text-white hover:text-brand-pink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CTV
            </Link>
            <Link
              href="#digital"
              className="text-sm font-medium text-white hover:text-brand-pink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Digital
            </Link>
            <Link
              href="#app"
              className="text-sm font-medium text-white hover:text-brand-pink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              App
            </Link>
            {!user && (
              <Link
                href="/login"
                className="text-sm font-medium text-white hover:text-brand-pink"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
