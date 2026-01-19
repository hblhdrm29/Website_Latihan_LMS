"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bell } from "lucide-react"

export function Notifications() {
    return (
        <Card className="border-none shadow-sm overflow-hidden">
            <div className="bg-blue-50/50 p-4 border-b border-blue-100">
                <h3 className="font-semibold text-base text-gray-900 flex items-center gap-2">
                    <Bell className="h-4 w-4 text-red-500" />
                    Pemberitahuan
                </h3>
            </div>
            <CardContent className="p-6">
                <div className="space-y-3">
                    <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                        <p className="text-[11px] font-bold text-gray-800">Belum mengisi Evaluasi Level 1:</p>
                        <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                            <div className="h-1.5 w-1.5 bg-red-500 rounded-full"></div>
                            Iso 27001
                        </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
                        <p className="text-[11px] font-bold text-gray-800">Belum mengisi Evaluasi Level 3:</p>
                        <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                            <div className="h-1.5 w-1.5 bg-orange-500 rounded-full"></div>
                            High Team Performance
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
