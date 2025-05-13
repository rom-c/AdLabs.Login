"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BarChart3, Tv, Globe, Smartphone, ArrowRight, BarChart, PieChart, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalMode, setAuthModalMode] = useState<"signin" | "signup">("signup")

  const openSignUpModal = () => {
    window.location.href = "/signup"
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient -z-10"></div>
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  AI-Powered Ad Optimization for <span className="gradient-text">DOOH, CTV, and Digital Platforms</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Maximize your advertising ROI with our intelligent platform that optimizes campaigns across all
                  channels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-brand-pink hover:bg-brand-darkPink" onClick={openSignUpModal}>
                    Create Account
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-brand-pink/20 to-brand-dark/20 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-md">
                    <div className="bg-white dark:bg-brand-dark rounded-lg p-4 shadow-lg">
                      <BarChart className="h-8 w-8 text-brand-pink mb-2" />
                      <h3 className="font-medium">Campaign Analytics</h3>
                    </div>
                    <div className="bg-white dark:bg-brand-dark rounded-lg p-4 shadow-lg">
                      <PieChart className="h-8 w-8 text-brand-pink mb-2" />
                      <h3 className="font-medium">Audience Insights</h3>
                    </div>
                    <div className="bg-white dark:bg-brand-dark rounded-lg p-4 shadow-lg">
                      <TrendingUp className="h-8 w-8 text-brand-pink mb-2" />
                      <h3 className="font-medium">Performance Metrics</h3>
                    </div>
                    <div className="bg-white dark:bg-brand-dark rounded-lg p-4 shadow-lg">
                      <BarChart3 className="h-8 w-8 text-brand-pink mb-2" />
                      <h3 className="font-medium">ROI Tracking</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-muted/50 dark:bg-brand-dark/30">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-8">Run Ads on Premium Publisher Sites</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="h-12 w-24 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Publisher {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24" id="features">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why AdLabs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform provides comprehensive solutions for all your advertising needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* DOOH Feature */}
              <div className="feature-card bg-card rounded-lg p-6 shadow-sm border border-border" id="dooh">
                <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">DOOH Advertising</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize digital out-of-home campaigns with AI-powered targeting and real-time analytics.
                </p>
                <Link href="#" className="group inline-flex items-center text-brand-pink font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* CTV Feature */}
              <div className="feature-card bg-card rounded-lg p-6 shadow-sm border border-border" id="ctv">
                <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-6">
                  <Tv className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">CTV Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Reach cord-cutters with precision targeting on Connected TV platforms and streaming services.
                </p>
                <Link href="#" className="group inline-flex items-center text-brand-pink font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Digital Media Feature */}
              <div className="feature-card bg-card rounded-lg p-6 shadow-sm border border-border" id="digital">
                <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Media</h3>
                <p className="text-muted-foreground mb-4">
                  Maximize performance across web platforms with our intelligent bidding and creative optimization.
                </p>
                <Link href="#" className="group inline-flex items-center text-brand-pink font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* App Campaigns Feature */}
              <div className="feature-card bg-card rounded-lg p-6 shadow-sm border border-border" id="app">
                <div className="h-12 w-12 rounded-full bg-brand-pink/10 flex items-center justify-center mb-6">
                  <Smartphone className="h-6 w-6 text-brand-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">App Campaigns</h3>
                <p className="text-muted-foreground mb-4">
                  Drive installs and in-app actions with targeted mobile advertising solutions.
                </p>
                <Link href="#" className="group inline-flex items-center text-brand-pink font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-muted/50 dark:bg-brand-dark/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Start Advertising in Just a Few Clicks
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined process makes it easy to launch and optimize your campaigns
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Create Your Ads</h3>
                <p className="text-muted-foreground">
                  Sign up, set your goals, and launch your first campaign in minutes - no experience needed.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Run Your Ad on Premium Websites</h3>
                <p className="text-muted-foreground">
                  Discover and qualify high intent audiences based on their interactions with your ads or site.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border relative">
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-2">Watch Your Results Grow</h3>
                <p className="text-muted-foreground">
                  Track performance in real-time and let our smart bidding technology optimize your campaign for the
                  best results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Advertisers Winning with AdLabs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See the real results our clients are achieving
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
                <p className="text-4xl font-bold text-brand-pink mb-2">↓ 50%</p>
                <h3 className="text-lg font-medium mb-4">Cost Per Action</h3>
                <div className="h-12 flex items-center justify-center">
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Client Logo</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
                <p className="text-4xl font-bold text-brand-pink mb-2">↑ 30%</p>
                <h3 className="text-lg font-medium mb-4">Increase in Leads</h3>
                <div className="h-12 flex items-center justify-center">
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Client Logo</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
                <p className="text-4xl font-bold text-brand-pink mb-2">↑ 100%</p>
                <h3 className="text-lg font-medium mb-4">Content Viewability</h3>
                <div className="h-12 flex items-center justify-center">
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Client Logo</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
                <p className="text-4xl font-bold text-brand-pink mb-2">↑ 700%</p>
                <h3 className="text-lg font-medium mb-4">Return on Ad Spend</h3>
                <div className="h-12 flex items-center justify-center">
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Client Logo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-dark text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Advertising?</h2>
              <p className="text-xl opacity-90">
                Join thousands of advertisers who are seeing better results with AdLabs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-brand-pink hover:bg-brand-darkPink text-white"
                  onClick={openSignUpModal}
                >
                  Create Account
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* No longer using the modal */}
    </div>
  )
}
