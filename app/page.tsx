"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, User, Handshake } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  const router = useRouter()
  const [loginType, setLoginType] = React.useState<"onboarding" | "karyawan">("karyawan")
  const [showPassword, setShowPassword] = React.useState(false)
  const [captchaInput, setCaptchaInput] = React.useState("")

  const captchaValue = "7E9890"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { loginType, captchaInput })
    if (loginType === "karyawan") {
      router.push("/select-role")
    } else if (loginType === "onboarding") {
      router.push("/dashboard")
    }
  }

  return (
    <div className="flex h-screen w-full flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Image */}
      <div className="relative hidden w-full lg:block lg:w-1/2 bg-neutral-100 h-full">
        <Image
          src="/assets/p1_wide.png"
          alt="Peruri Building"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full h-full flex-col items-center justify-center p-4 lg:w-1/2"
        style={{
          background: "linear-gradient(135deg, #4481EB 0%, #04BEFE 0%, #3B82F6 0%, #7C3AED 100%)",
        }}
      >
        <div className="w-full max-w-[340px]"> {/* Further reduced max-width to 340px */}
          <Card className="w-full shadow-xl border-none">
            <CardHeader className="space-y-1 text-center py-3"> {/* Reduced vertical padding */}
              <CardTitle className="text-lg font-bold tracking-tight">LOGIN</CardTitle>  {/* Reduced font size */}
              <CardDescription className="text-[11px]"> {/* Reduced font size */}
                Please enter your details to sign in
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2.5 p-4 pt-0"> {/* Reduced gap */}

              {/* Login As Tabs */}
              <div className="space-y-1">
                <Label className="text-[11px]">Masuk sebagai (Login as)</Label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setLoginType("onboarding")}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1 rounded-md border p-2 text-[11px] font-medium transition-all",
                      // Hover state fix: explicitly blue on hover
                      "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200",
                      loginType === "onboarding"
                        ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500" // matched blue theme for active
                        : "border-input bg-background text-muted-foreground"
                    )}
                  >
                    <Handshake className="h-4 w-4" />
                    Onboarding
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginType("karyawan")}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1 rounded-md border p-2 text-[11px] font-medium transition-all",
                      // Hover state fix: explicitly blue on hover
                      "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200",
                      loginType === "karyawan"
                        ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500"
                        : "border-input bg-background text-muted-foreground"
                    )}
                  >
                    <User className="h-4 w-4" />
                    Karyawan
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2.5"> {/* Tighter spacing */}
                {/* Username Input */}
                <div className="space-y-1">
                  <Label htmlFor="username" className="text-[11px]">Nomor Pokok/Username</Label>
                  <Input
                    id="username"
                    placeholder="Masukan Nomor Pokok/Username"
                    required
                    className="h-9 text-xs" // Smaller text
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                  <Label htmlFor="password" className="text-[11px]">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukan Password"
                      required
                      className="h-9 pr-8 text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-3.5 w-3.5" /> // Smaller icon
                      ) : (
                        <Eye className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="text-[10px] text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Lupa kata sandi?
                    </Link>
                  </div>
                </div>

                {/* Captcha Section */}
                <div className="space-y-1">
                  <Label className="text-[11px]">Kode Captcha</Label>
                  <div className="rounded-md border border-dashed border-gray-300 p-1 flex items-center justify-center bg-gray-50 h-9">
                    <span
                      className="text-base font-handwriting text-blue-600 select-none font-bold italic tracking-widest"
                      style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
                    >
                      {captchaValue}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="captcha" className="text-[11px]">Captcha</Label>
                  <Input
                    id="captcha"
                    placeholder="Masukan kode captcha"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    required
                    className="h-9 text-xs"
                  />
                </div>

                <Button type="submit" className="w-full h-9 text-xs bg-[#3B82F6] hover:bg-[#2563EB] mt-1.5">
                  Login
                </Button>
              </form>

            </CardContent>
            <CardFooter className="flex justify-center pb-3 pt-0">
              <p className="text-[10px] text-muted-foreground text-center">
                &copy; 2026 Peruri Light. All rights reserved.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
