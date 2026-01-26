"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Users, School, Download } from "lucide-react";

const IconMap: Record<string, any> = {
    School: School,
    Users: Users
};

interface StatItem {
    label: string;
    value: string | number;
    icon: string; // Changed from any to string key
    color?: string;
}

interface LeaderboardItem {
    name: string;
    rank: number;
    initial: string;
}

interface TDPSectionProps {
    title: string;
    stats: StatItem[];
    // We have 4 blocks of lists
    topKaun: LeaderboardItem[];
    topKasek: LeaderboardItem[];
    topKadep: LeaderboardItem[];
    onboardingList: LeaderboardItem[];
}

export function TDPSection({ title, stats, topKaun, topKasek, topKadep, onboardingList }: TDPSectionProps) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    const slides = [
        {
            id: 0,
            items: [
                { title: "TDP-KAUN", data: topKaun },
                { title: "TDP-KASEK", data: topKasek }
            ]
        },
        {
            id: 1,
            items: [
                { title: "TDP-KADEP", data: topKadep },
                { title: "ONBOARDING", data: onboardingList }
            ]
        }
    ];

    React.useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [isPaused, slides.length]);

    return (
        <Card
            className="bg-white border-none shadow-sm h-full flex flex-col col-span-1 lg:col-span-2 xl:col-span-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-base font-bold text-gray-900">{title}</CardTitle>
                <button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors" title="Export Data">
                    Export
                </button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
                {/* Stats Row - 5 Columns */}
                <div className="grid grid-cols-5 gap-2">
                    {stats.map((stat, idx) => {
                        const IconComponent = IconMap[stat.icon] || Users;
                        return (
                            <div key={idx} className="flex flex-col items-center text-center p-1 hover:bg-gray-50 transition-colors rounded-lg">
                                <div className={cn("mb-1 p-1.5 rounded-lg", stat.color || "bg-indigo-50 text-indigo-600")}>
                                    <IconComponent className="h-3.5 w-3.5" />
                                </div>
                                <span className="text-sm font-bold text-gray-900">{stat.value}</span>
                                <span className="text-[7px] uppercase font-bold text-gray-400 tracking-wider truncate w-full">{stat.label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Slider Content */}
                <div className="flex-1 bg-gray-50/30 rounded-xl p-2 border border-dashed border-gray-100 relative overflow-hidden flex flex-col justify-between">
                    {/* Animation Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 animate-in fade-in slide-in-from-right-4 duration-300 key={currentSlide}">
                        {slides[currentSlide].items.map((list, idx) => (
                            <SimpleList key={idx} title={list.title} items={list.data} />
                        ))}
                    </div>

                    {/* Dots Navigation - Bottom Center */}
                    <div className="flex justify-center mt-4">
                        <div className="flex gap-1.5 bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-sm">
                            {slides.map((slide, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={cn(
                                        "h-2 w-2 rounded-full transition-all duration-300",
                                        currentSlide === idx ? "bg-blue-600 w-4" : "bg-gray-300 hover:bg-gray-400"
                                    )}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function SimpleList({ title, items }: { title: string, items: LeaderboardItem[] }) {
    return (
        <div className="space-y-2">
            <h4 className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">{title}</h4>
            <div className="space-y-2">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 border border-gray-100 rounded-lg p-2 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer">
                        <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500 shrink-0">
                            {item.initial}
                        </div>
                        <span className="text-[10px] font-semibold text-gray-700 truncate">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
