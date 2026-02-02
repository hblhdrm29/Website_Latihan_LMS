"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { LogOut, ChevronDown, Check, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const ROLES = [
    "User",
    "Mentor",
    "Co-Mentor",
    "Admin PSP",
    "Super Admin",
    "Instruktur",
]

export default function SelectRolePage() {
    const router = useRouter()
    const [selectedRole, setSelectedRole] = React.useState<string>("User")
    const [isOpen, setIsOpen] = React.useState(false)

    const handleContinue = () => {
        if (selectedRole === "User") {
            router.push("/dashboard-karyawan")
        } else if (selectedRole === "Mentor") {
            router.push("/dashboard-mentor")
        } else if (selectedRole === "Co-Mentor") {
            router.push("/dashboard-comentor")
        } else if (selectedRole === "Admin PSP") {
            router.push("/dashboard-admin")
        } else if (selectedRole === "Super Admin") {
            router.push("/dashboard-super-admin")
        } else {
            console.log("Selected Role:", selectedRole)
            alert(`Continuing as ${selectedRole}`)
        }
    }

    const handleLogout = () => {
        router.push("/")
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-4"
            style={{
                background: "linear-gradient(135deg, #4481EB 0%, #04BEFE 0%, #3B82F6 0%, #7C3AED 100%)",
            }}
        >
            <div className="w-full max-w-[400px]">
                <Card className="w-full shadow-2xl border-none bg-white/95 backdrop-blur-sm">
                    <CardHeader className="text-center space-y-1 pb-2 pt-8">
                        <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-2 text-blue-600">
                            {/* Icon placeholder or use a User icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>

                        {/* Back Button */}
                        <button
                            onClick={() => router.push("/")}
                            className="absolute left-6 top-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-all"
                            aria-label="Back to Login"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <CardTitle className="text-2xl font-bold tracking-tight text-gray-900">Welcome Back</CardTitle>
                        <CardDescription className="text-gray-500">
                            Light Peruri Administration System
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6 p-6">

                        <div className="space-y-2">
                            <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider">PILIH PERAN / CHOOSE ROLE</Label>

                            {/* Custom Select Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex h-12 w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50"
                                >
                                    <span className={cn("font-medium", !selectedRole && "text-muted-foreground")}>
                                        {selectedRole || "Select a role"}
                                    </span>
                                    <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", isOpen && "rotate-180")} />
                                </button>

                                {isOpen && (
                                    <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover bg-white p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
                                        {ROLES.map((role) => (
                                            <div
                                                key={role}
                                                className={cn(
                                                    "relative flex w-full cursor-default select-none items-center rounded-sm py-2.5 pl-8 pr-2 text-sm outline-none hover:bg-blue-50 hover:text-blue-600 cursor-pointer",
                                                    selectedRole === role && "bg-blue-50 text-blue-600 font-medium"
                                                )}
                                                onClick={() => {
                                                    setSelectedRole(role)
                                                    setIsOpen(false)
                                                }}
                                            >
                                                {selectedRole === role && (
                                                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                                        <Check className="h-4 w-4" />
                                                    </span>
                                                )}
                                                {role}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <Button
                            onClick={handleContinue}
                            className="w-full h-12 text-base font-semibold bg-[#4F46E5] hover:bg-[#4338ca] shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02]"
                            style={{ background: "linear-gradient(to right, #4f46e5, #7c3aed)" }} // Button gradient matching design feel
                        >
                            Continue to Dashboard &rarr;
                        </Button>

                        <div className="flex justify-center">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                <LogOut className="h-4 w-4" />
                                Cancel and Logout
                            </button>
                        </div>

                    </CardContent>
                    <CardFooter className="flex justify-center pb-8 pt-0">
                        <p className="text-[10px] text-gray-300 text-center">
                            &copy; 2026 Light Peruri System. All rights reserved.
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
