"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Medal } from "lucide-react"

export function TopPerformers() {
    const performers = [
        { name: "ABCDEF GHIJK", dept: "Sumber Daya Manusia", score: "98/100", rank: 1, avatarColor: "bg-emerald-500" },
        { name: "EFGHI JKLMN", dept: "Teknologi Informasi", score: "95/100", rank: 2, avatarColor: "bg-cyan-500" },
        { name: "JKLMN OP QRST", dept: "SBU Currency", score: "92/100", rank: 3, avatarColor: "bg-indigo-500" },
    ]

    return (
        <Card className="border-none shadow-sm h-fit">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="font-semibold text-lg">Top Performers</h3>
                        <p className="text-xs text-muted-foreground">Top Employees Ranking</p>
                    </div>
                    <button className="text-xs text-blue-600 font-medium hover:underline">View All</button>
                </div>

                <div className="space-y-4">
                    {performers.map((p, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                {/* Avatar with Rank Badge */}
                                <div className="relative">
                                    <div className={cn("h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm ring-1 ring-white overflow-hidden", p.avatarColor)}>
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`}
                                            alt={p.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className={cn(
                                        "absolute -bottom-1 -right-1 h-4 w-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white ring-2 ring-white shadow-sm",
                                        p.rank === 1 ? "bg-yellow-400" :
                                            p.rank === 2 ? "bg-gray-400" :
                                                "bg-amber-700"
                                    )}>
                                        {p.rank}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 leading-tight">{p.name}</p>
                                    <p className="text-[10px] text-gray-500 mt-0.5">{p.dept}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Score: {p.score}</span>
                                {p.rank === 1 && <Medal className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-md" />}
                                {p.rank === 2 && <Medal className="h-5 w-5 text-gray-400 fill-gray-400 drop-shadow-md" />}
                                {p.rank === 3 && <Medal className="h-5 w-5 text-amber-700 fill-amber-700 drop-shadow-md" />}
                            </div>
                        </div>
                    ))}

                    {/* User Rank Card - Blue Style */}
                    <div className="mt-4 relative overflow-hidden rounded-xl bg-blue-50 border border-blue-100 p-0">
                        {/* Blue Left Border Accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>

                        <div className="flex items-center justify-between p-3 pl-5">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="h-10 w-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold text-xs ring-2 ring-white shadow-sm">
                                        ST
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white ring-2 ring-white shadow-sm">
                                        7
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Santika Tri Hapsari S <span className="text-gray-400 font-normal text-xs">(You)</span></p>
                                    <p className="text-[10px] text-gray-500">Onboarding User</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold text-blue-600">Score: 89/100</span>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}
