"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bell } from "lucide-react"

export function Notifications() {
    return (
        <Card className="border-none shadow-sm">
            <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Bell className="h-4 w-4 text-blue-600" />
                    <h3 className="font-semibold text-sm text-blue-600">Pemberitahuan</h3>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-md p-4 mb-4">
                    <div className="flex items-start gap-2">
                        <div className="mt-0.5 text-red-500 text-xs">⚠️</div>
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-red-700">Belum mengisi Evaluasi Level 1:</p>
                            <ul className="list-disc list-inside text-[10px] text-red-600 space-y-0.5">
                                <li>PKWT Batch V</li>
                                <li>MT Batch II (Public Speaking)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="text-xs text-blue-500 hover:text-blue-700">Lihat semua notifikasi</button>
                </div>
            </CardContent>
        </Card>
    )
}
