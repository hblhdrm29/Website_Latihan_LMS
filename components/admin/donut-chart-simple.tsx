"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SimpleDonutChartProps {
    title: string;
    percentage: number;
    color: string;
    label: string;
}

export function SimpleDonutChart({ title, percentage, color, label }: SimpleDonutChartProps) {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <Card className="bg-white border border-blue-500 shadow-sm h-full rounded-3xl">
            <CardHeader>
                <CardTitle className="text-xs font-bold text-gray-900">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-4">
                <div className="relative h-28 w-28 flex items-center justify-center">
                    {/* Background Circle */}
                    <svg className="transform -rotate-90 w-full h-full">
                        <circle
                            cx="56"
                            cy="56"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            className="text-gray-100"
                        />
                        {/* Foreground Circle */}
                        <circle
                            cx="56"
                            cy="56"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray={((2 * Math.PI * 28))}
                            strokeDashoffset={((2 * Math.PI * 28) - (percentage / 100) * (2 * Math.PI * 28))}
                            className={color}
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute text-lg font-bold text-gray-900">{percentage}%</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <div className={`h-1.5 w-1.5 rounded-full bg-current ${color.replace('text-', 'bg-').replace('-600', '-500')}`}></div>
                    <span className="text-[10px] text-gray-500 font-medium">{label}</span>
                </div>
            </CardContent>
        </Card>
    );
}
