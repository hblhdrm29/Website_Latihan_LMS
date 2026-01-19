"use client"

import { StatsCards } from "@/components/dashboard/stats-cards"
import { TopPerformers } from "@/components/dashboard/top-performers"
import { CourseStats } from "@/components/dashboard/course-stats"
import { SystemAlert } from "@/components/dashboard/system-alert"
import { Briefcase, CheckCircle, Clock, XCircle, Award, Trophy, ScrollText, CalendarRange, Bell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"



function KaryawanStats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Card 1: Class */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                        <Briefcase className="h-5 w-5 text-indigo-600" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">1</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Class</p>
                </div>
            </div>

            {/* Card 2: Completed */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <div className="bg-emerald-50 p-2 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">1</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Completed</p>
                </div>
            </div>

            {/* Card 3: On Progress */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <div className="bg-amber-50 p-2 rounded-lg">
                        <div className="h-5 w-5 flex items-center justify-center gap-0.5">
                            <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                            <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                            <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">0</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">On Progress</p>
                </div>
            </div>

            {/* Card 4: Unpassed */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <div className="bg-red-50 p-2 rounded-lg">
                        <XCircle className="h-5 w-5 text-red-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">0</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Unpassed</p>
                </div>
            </div>

            {/* Card 5: Passed */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-2">
                    <div className="bg-cyan-50 p-2 rounded-lg">
                        <Trophy className="h-5 w-5 text-cyan-500" />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900">1</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Passed</p>
                </div>
            </div>
        </div>
    )
}

export default function DashboardPage() {
    return (
        <div className="p-6 space-y-8 select-none">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Employee Dashboard</h1>
                    <p className="text-sm text-gray-500">Welcome back, Santika! Here is your progress overview.</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                    <div className="w-full md:w-auto min-w-[320px]">
                        <SystemAlert />
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <StatsCards />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                    <CourseStats />
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 space-y-6">
                    <TopPerformers />
                </div>
            </div>

            {/* Second Row Grid: IAKA, Sertifikasi, Pemberitahuan */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* IAKA 2025 */}
                <Card className="border-none shadow-sm overflow-hidden">
                    <div className="bg-blue-50/50 p-4 border-b border-blue-100 flex items-center justify-between">
                        <h3 className="font-semibold text-base text-gray-900">IAKA 2025</h3>
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-sm">Rank #3</span>
                    </div>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-white ring-4 ring-yellow-50">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">3</p>
                                    <p className="text-[10px] font-bold text-yellow-500 uppercase">Gold</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white ring-4 ring-gray-100">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">0</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Silver</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-orange-400 flex items-center justify-center text-white ring-4 ring-orange-100">
                                    <Award className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">0</p>
                                    <p className="text-[10px] font-bold text-orange-500 uppercase">Bronze</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Sertifikasi */}
                <Card className="border-none shadow-sm">
                    <div className="bg-blue-50/50 p-4 border-b border-blue-100">
                        <h3 className="font-semibold text-base text-gray-900">Sertifikasi</h3>
                    </div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-50 pointer-events-none"></div>
                    <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-5xl font-bold text-blue-600">2</span>
                            <p className="text-sm font-medium text-gray-500 leading-tight">Active<br />Certifications</p>
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mb-2 overflow-hidden">
                            <div className="bg-blue-600 h-full w-3/4 rounded-full"></div>
                        </div>
                        <div className="flex justify-end">
                            <p className="text-[9px] text-gray-400">Validity Check: OK</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Pemberitahuan List */}
                <Card className="border-none shadow-sm overflow-hidden">
                    <div className="bg-blue-50/50 p-4 border-b border-blue-100">
                        <h3 className="font-semibold text-base text-gray-900 flex items-center gap-2">
                            <Bell className="h-4 w-4 text-red-500" />
                            Pemberitahuan
                        </h3>
                    </div>
                    <CardContent className="p-6">
                        <div className="space-y-3">
                            <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                                <p className="text-[11px] font-bold text-gray-800">Belum mengisi Evaluasi Level 1:</p>
                                <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                                    <div className="h-1.5 w-1.5 bg-red-500 rounded-full"></div>
                                    Iso 27001
                                </div>
                            </div>
                            <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg">
                                <p className="text-[11px] font-bold text-gray-800">Belum mengisi Evaluasi Level 3:</p>
                                <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                                    <div className="h-1.5 w-1.5 bg-orange-500 rounded-full"></div>
                                    High Team Performance
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">Recommendation Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all">
                            <div className="h-32 bg-amber-50 relative overflow-hidden flex items-center justify-center">
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="absolute bottom-0 w-full h-12 bg-amber-100/50 blur-xl transform scale-150 translate-y-4"></div>
                                <ScrollText className="h-12 w-12 text-amber-300 opacity-80" />
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-sm text-gray-900 mb-1">TEKNOLOGI PRODUKSI XXXXXX</h4>
                                <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2">
                                    <Briefcase className="h-3 w-3" />
                                    <span>Pelatihan Produksi</span>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                    <CalendarRange className="h-3 w-3" />
                                    <span>13 - 14 September 2025</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
