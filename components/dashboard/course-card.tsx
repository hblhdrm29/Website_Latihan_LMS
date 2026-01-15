"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { FileText, Calendar, Trophy, Share2, MessageSquare, Lightbulb } from "lucide-react"

interface CourseCardProps {
    image?: string
    title: string
    type: string
    date: string
    rank: string
    score?: string
    status: "Passed" | "OnProgress" | "Unpassed"
    progress: number
    icon?: any
    footerLabel?: string
    footerValue?: string
}

export function CourseCard({
    image,
    title,
    type,
    date,
    rank,
    score,
    status,
    progress,
    icon: Icon = FileText,
    footerLabel,
    footerValue
}: CourseCardProps) {
    return (
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full bg-white">
            {/* Image Cover */}
            {/* Image Cover */}
            <div className="relative h-48 bg-gray-100 flex items-center justify-center shrink-0">
                {/* Placeholder for actual image or dynamic generation if needed */}
                {image ? (
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                ) : (
                    <div className="text-center p-8">
                        <h3 className="text-xl font-serif text-gray-400 tracking-widest">CASSS</h3>
                        <p className="text-[10px] text-gray-300 uppercase tracking-[0.2em] mt-1">NINIMAMTA10</p>
                    </div>
                )}

                {/* Status Badge on Image */}
                <div className="absolute top-4 left-4">
                    <Badge
                        variant="secondary"
                        className={cn(
                            "text-[10px] font-bold px-2 py-0.5 pointer-events-none rounded-sm bg-white/90 backdrop-blur-sm shadow-sm",
                            status === "Passed" ? "text-emerald-600" :
                                status === "Unpassed" ? "text-red-600" : "text-blue-600"
                        )}
                    >
                        {status === "Passed" ? "COMPLETED" : status === "Unpassed" ? "FAILED" : "IN PROGRESS"}
                    </Badge>
                </div>
            </div>

            <CardContent className="p-4 space-y-4 flex flex-col flex-1">
                {/* Title */}
                <div>
                    <h3 className="font-bold text-gray-900 line-clamp-1 text-base">{title}</h3>
                </div>

                {/* Metadata */}
                <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Icon className="h-3.5 w-3.5" />
                        <span>{type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Trophy className="h-3.5 w-3.5 text-yellow-500" />
                        <span className="font-medium text-gray-700">Rank: {rank}</span>
                    </div>
                </div>

                <div className="flex-1"></div>

                {/* Footer / Progress */}
                <div className="pt-2 mt-auto">
                    {/* Top Label (e.g. Score Post Test) */}
                    <div className="flex items-center justify-between text-xs mb-1.5 font-bold text-gray-700">
                        <span>{footerLabel || (status === "Passed" ? "Final Score" : status === "Unpassed" ? "Final Score" : "Current Rank")}</span>
                        <span className="text-gray-900">{footerValue || score || "12/30"}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={cn(
                                "h-full rounded-full transition-all duration-300 ease-out",
                                status === "Passed" ? "bg-emerald-500" :
                                    status === "Unpassed" ? "bg-red-500" : "bg-blue-500"
                            )}
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Bottom Label (PROGRESS %) */}
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 mt-1.5 uppercase tracking-wide">
                        <span>Progress</span>
                        <span className={cn(
                            status === "Passed" ? "text-emerald-500" :
                                status === "Unpassed" ? "text-red-500" : "text-blue-500"
                        )}>
                            {progress}%
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
