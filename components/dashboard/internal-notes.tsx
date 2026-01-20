"use client"

import { useState } from "react"
import { Lock, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function InternalNotes() {
    const [showNotes, setShowNotes] = useState(false)

    return (
        <div className="mt-6 border border-yellow-100 rounded-lg overflow-hidden transition-all duration-300">
            <button
                onClick={() => setShowNotes(!showNotes)}
                className="w-full flex items-center justify-between p-3 bg-yellow-50 hover:bg-yellow-100/80 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 border border-yellow-200">
                        <Lock className="h-2.5 w-2.5" />
                    </div>
                    <h5 className="text-xs font-bold text-yellow-800 uppercase tracking-wide">Internal Notes (Private)</h5>
                </div>
                <ChevronDown className={cn("h-4 w-4 text-yellow-600 transition-transform duration-200", showNotes ? "rotate-180" : "")} />
            </button>

            {showNotes && (
                <div className="p-4 bg-yellow-50/30 animate-in slide-in-from-top-1">
                    <div className="space-y-3 mb-4">
                        <div className="bg-white border border-yellow-100 p-3 rounded-md shadow-sm">
                            <p className="text-xs text-gray-600 italic">"Perlu bimbingan ekstra di assessment 3, konsep dasarnya masih agak kurang kuat."</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-4 w-4 rounded-full bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-500">CM</div>
                                <span className="text-[10px] text-gray-400">Co-Mentor • 2 days ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Add a private note..."
                            className="flex-1 text-xs border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400 bg-white"
                        />
                        <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 text-xs font-bold px-3 py-2 rounded-md transition-colors">
                            Add
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
