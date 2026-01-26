"use strict";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User, Trophy, Medal, Download } from "lucide-react";

interface StatItem {
    label: string;
    value: string | number;
    icon: any;
    color?: string; // e.g. "text-blue-600", "bg-blue-100"
}

interface LeaderboardItem {
    name: string;
    role?: string;
    rank: number;
    avatar?: string; // initials if no image
    colorClass?: string; // for the avatar bg
}

interface StatSectionProps {
    title: string;
    stats: StatItem[];
    leaderboardTitle?: string;
    leaderboard: LeaderboardItem[];
}

export function StatSection({ title, stats, leaderboardTitle = "LEADERBOARD", leaderboard }: StatSectionProps) {
    return (
        <Card className="bg-white border-none shadow-sm h-full flex flex-col">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-base font-bold text-gray-900">{title}</CardTitle>
                <button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors" title="Export Data">
                    Export
                </button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-3 p-3">
                {/* Stats Row */}
                <div className={cn(
                    "grid gap-2",
                    stats.length === 3 ? "grid-cols-3" : "grid-cols-4"
                )}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center p-1.5 rounded-xl bg-gray-50/50 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all cursor-default group">
                            <div className={cn(
                                "mb-1 p-1 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300",
                                stat.color || "bg-blue-100 text-blue-600"
                            )}>
                                <stat.icon className="h-3 w-3" />
                            </div>
                            <span className={cn(
                                "text-base font-bold leading-none mb-0.5",
                                stat.color ? stat.color.replace("bg-", "text-").replace("-50", "-600") : "text-blue-600"
                            )}>{stat.value}</span>
                            <span className="text-[8px] uppercase font-bold text-gray-400 tracking-wider text-center">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Leaderboard - 2 Columns (Zig-zag: 1 Left, 2 Right...) */}
                <div className="flex-1">
                    <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                        <Trophy className="h-3 w-3" />
                        {leaderboardTitle}
                    </h4>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                        {leaderboard.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                                <div className={cn(
                                    "h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 relative shadow-sm",
                                    item.colorClass || "bg-gray-100 text-gray-600"
                                )}>
                                    {item.avatar || item.name.substring(0, 2).toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">{item.name}</p>
                                    <p className="text-[8px] text-gray-500 truncate">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
