"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChartData {
    title: string;
    percentage: number;
    color: string;
    label: string;
}

interface CombinedDonutChartProps {
    chart1: ChartData; // Inner
    chart2: ChartData; // Outer
}

export function CombinedDonutChart({ chart1, chart2 }: CombinedDonutChartProps) {
    // Center point
    const cx = 80;
    const cy = 80;

    // Resize Logic: 
    // We keep the internal SVG coordinates 160x160 (cx 80), but we scale the container up. 
    // AND we increase the radii slightly relative to that box to fill it more.

    // Outer Ring
    const r1 = 58; // Increased from 45
    const c1 = 2 * Math.PI * r1;
    const o1 = c1 - (chart2.percentage / 100) * c1;

    // Inner Ring
    const r2 = 42; // Increased from 32
    const c2 = 2 * Math.PI * r2;
    const o2 = c2 - (chart1.percentage / 100) * c2;

    return (
        <Card className="bg-white border border-blue-500 shadow-sm h-full rounded-3xl">
            <CardHeader className="pb-2">
                <CardTitle className="text-xs font-bold text-gray-900">Overall Monitoring Status</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex flex-col md:flex-row items-start justify-center gap-8 h-full pb-6">

                {/* Concentric Chart */}
                {/* Reduced container size h-48 w-48 (was h-56 w-56) */}
                <div className="relative h-48 w-48 flex items-center justify-center shrink-0">
                    <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 160 160">
                        {/* Outer Background */}
                        <circle cx={cx} cy={cy} r={r1} stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                        {/* Outer Progress (Chart 2) */}
                        <circle
                            cx={cx} cy={cy} r={r1}
                            stroke="currentColor" strokeWidth="10" fill="transparent"
                            strokeDasharray={c1} strokeDashoffset={o1}
                            className={chart2.color} strokeLinecap="round"
                        />

                        {/* Inner Background */}
                        <circle cx={cx} cy={cy} r={r2} stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                        {/* Inner Progress (Chart 1) */}
                        <circle
                            cx={cx} cy={cy} r={r2}
                            stroke="currentColor" strokeWidth="10" fill="transparent"
                            strokeDasharray={c2} strokeDashoffset={o2}
                            className={chart1.color} strokeLinecap="round"
                        />
                    </svg>
                    {/* Center Text */}
                    <div className="absolute flex flex-col items-center">
                        <span className="text-sm font-bold text-gray-400">Total</span>
                    </div>
                </div>

                {/* Legends */}
                <div className="flex flex-col gap-3 justify-center mt-6">
                    {/* Legend 1 (Inner) */}
                    <div className="flex items-center gap-2">
                        <div className={cn("h-2 w-2 rounded-full", chart1.color.replace("text-", "bg-"))} />
                        <div>
                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{chart1.label}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-gray-900">{chart1.percentage}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Legend 2 (Outer) */}
                    <div className="flex items-center gap-2">
                        <div className={cn("h-2 w-2 rounded-full", chart2.color.replace("text-", "bg-"))} />
                        <div>
                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{chart2.label}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-gray-900">{chart2.percentage}%</span>
                            </div>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
