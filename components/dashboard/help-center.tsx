"use client"

import * as React from "react"
import { useState } from "react"

export function HelpCenter() {
    const [showHelp, setShowHelp] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {showHelp && (
                <div className="mb-4 w-56 bg-[#27272A] rounded-xl overflow-hidden shadow-2xl text-white animate-in fade-in zoom-in-95 duration-200 origin-bottom-right border border-white/10">
                    <div className="p-2 pb-0">
                        <button className="w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors">Help Center</button>
                    </div>
                    <div className="p-2 space-y-1">
                        <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors">FAQ</button>
                    </div>
                    <div className="border-t border-dashed border-white/20 mx-2 my-1"></div>
                    <div className="p-2 pt-0">
                        <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors">Change Language...</button>
                    </div>
                </div>
            )}
            <button
                onClick={() => setShowHelp(!showHelp)}
                className="h-10 w-10 bg-[#3B82F6] rounded-full text-white shadow-lg hover:bg-[#2563EB] transition-all hover:scale-110 flex items-center justify-center shrink-0"
            >
                <span className="font-bold text-2xl">?</span>
            </button>
        </div>
    )
}
