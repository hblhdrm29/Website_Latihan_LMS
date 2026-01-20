"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BookOpen, CheckCircle, Clock, XCircle, Trophy } from "lucide-react"

export function StatsCards() {
    const stats = [
        {
            label: "CLASS",
            value: "1",
            icon: BookOpen,
            color: "bg-blue-100 text-blue-600",
            bg: "bg-blue-50",
        },
        {
            label: "COMPLETED",
            value: "1",
            icon: CheckCircle,
            color: "bg-green-100 text-green-600",
            bg: "bg-green-50",
        },
        {
            label: "ON PROGRESS",
            value: "0",
            icon: Clock,
            color: "bg-yellow-100 text-yellow-600",
            bg: "bg-yellow-50",
        },
        {
            label: "PASSED",
            value: "1",
            icon: Trophy,
            color: "bg-cyan-100 text-cyan-600",
            bg: "bg-cyan-50",
        },
        {
            label: "UNPASSED",
            value: "0",
            icon: XCircle,
            color: "bg-red-100 text-red-600",
            bg: "bg-red-50",
        },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
                <Card key={i} className={cn("border-none shadow-sm", stat.bg)}>
                    <CardContent className="p-4 flex flex-col items-start gap-3">
                        <div className={cn("p-2 rounded-lg", stat.color)}>
                            <stat.icon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
