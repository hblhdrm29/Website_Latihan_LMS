"use client"

import { Card, CardContent } from "@/components/ui/card"

export function CourseStats() {
    return (
        <Card className="border-none shadow-sm overflow-hidden">
            <div className="bg-blue-50/50 p-4 border-b border-blue-100">
                <h3 className="font-semibold text-lg text-gray-900">Course Stats</h3>
                <p className="text-xs text-muted-foreground">Completion Status</p>
            </div>
            <CardContent className="p-6">

                <div className="flex flex-col items-center justify-center">
                    {/* CSS-only Donut Chart Mockup */}
                    <div className="relative h-32 w-32">
                        <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
                            {/* Background Ring */}
                            <path
                                className="text-gray-100"
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.8"
                            />
                            {/* Progress Ring (100% Blue) */}
                            <path
                                className="text-blue-500"
                                strokeDasharray="100, 100"
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.8"
                            />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-[10px] text-gray-400 block uppercase">Total</span>
                            <span className="text-xl font-bold text-gray-800">100%</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-6 text-xs">
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Completed
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-gray-200"></span> Remaining
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
