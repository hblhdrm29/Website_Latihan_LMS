"use client"

import { Bell, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SystemAlert() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 flex items-center justify-between animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Bell className="h-4 w-4 text-[#FF453A]" />
                </div>
                <div>
                    <h3 className="text-[#FF453A] font-bold text-sm leading-tight">System Alert !</h3>
                    <p className="text-gray-500 font-medium text-xs leading-tight">
                        New message: <span className="text-gray-500">"Belum Mengisi Evaluasi 1"</span>
                    </p>
                </div>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
                <X className="h-3.5 w-3.5" />
            </button>
        </div>
    )
}
