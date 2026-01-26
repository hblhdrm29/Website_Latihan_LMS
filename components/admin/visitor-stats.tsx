"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";

export function VisitorStats() {
    const stats = [
        { label: "Hari Ini", value: 42, color: "bg-blue-600" },
        { label: "Bulan Ini", value: 185, color: "bg-blue-600" },
        { label: "Tahun Ini", value: 2146, color: "bg-blue-600" },
        { label: "Total Akun", value: 1026, color: "bg-blue-600" },
    ];

    return (
        <Card className="bg-white border border-blue-500 shadow-sm h-full rounded-3xl">
            <CardHeader className="pb-3">
                <CardTitle className="text-xs font-bold text-gray-900">Statistik Pengunjung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {stats.map((stat, idx) => (
                    <div key={idx} className="space-y-0.5">
                        <div className="flex items-center justify-between text-[10px] text-gray-500 mb-0.5">
                            <div className="flex items-center gap-1.5">
                                {stat.label === "Total Akun" ? <Users className="h-2.5 w-2.5" /> : <Calendar className="h-2.5 w-2.5" />}
                                <span>{stat.label}</span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="flex items-center justify-between border border-blue-600 rounded-full py-0.5 px-2.5 bg-white text-blue-600">
                                <span className="text-[10px] font-medium">{stat.label}</span>
                                <span className="text-[10px] font-bold bg-blue-600 text-white px-1.5 py-0 rounded-full leading-relaxed">{stat.value}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
