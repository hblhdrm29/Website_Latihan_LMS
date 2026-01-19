"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, Lock, Map, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function EnrollHTP() {
    return (
        <div className="p-6 space-y-6 pb-20 select-none">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span>Dashboard</span>
                <ChevronRight className="h-3 w-3" />
                <span>Course</span>
                <ChevronRight className="h-3 w-3" />
                <span className="font-semibold text-gray-900">HIGH TEAM PERFORMANCE</span>
            </div>

            {/* Header Card */}
            <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold text-gray-900">HIGH TEAM PERFORMANCE</h1>
                                <Badge variant="secondary" className="bg-gray-100 text-gray-500 hover:bg-gray-100 border-none px-2.5 py-0.5 text-[10px] font-bold">
                                    Not Started
                                </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span>19 Agustus 2024 - 21 Agustus 2024</span>
                            </div>
                        </div>

                        <div>
                            <Link href="/dashboard-karyawan/my-course/pelatihan">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6">
                                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: The Journey */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-none shadow-sm bg-white min-h-[500px]">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                                        <Map className="h-4 w-4" />
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900">The Journey</h2>
                                </div>
                                <Badge variant="secondary" className="bg-gray-50 text-gray-500 font-bold hover:bg-gray-50">
                                    0% Complete
                                </Badge>
                            </div>

                            {/* Journey List */}
                            <div className="space-y-4">
                                {[
                                    { title: "Announcement", type: "Locked" },
                                    { title: "Pretest", type: "Locked" },
                                    { title: "Materi", type: "Locked" },
                                    { title: "Tugas", type: "Locked" },
                                    { title: "Posttest", type: "Locked" },
                                    { title: "Kuesioner LMS", type: "Locked" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all cursor-not-allowed group">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
                                                <Lock className="h-4 w-4" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-700 text-sm group-hover:text-gray-900 transition-colors">{item.title}</h3>
                                                <p className="text-xs text-gray-400 mt-0.5 font-medium">Locked</p>
                                            </div>
                                        </div>
                                        <Lock className="h-4 w-4 text-gray-300 group-hover:text-gray-400 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Widgets */}
                <div className="space-y-6">
                    {/* Instructor Widget */}
                    <Card className="border-none shadow-sm bg-white">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-gray-900 mb-4 text-sm">Instructor</h3>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                    SW
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-gray-900">Dr. Sarah Wijaya</p>
                                    <p className="text-xs text-gray-500">Senior Production Expert</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-blue-600">24</p>
                                    <p className="text-xs text-gray-500">Modules</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-bold text-blue-600">45h</p>
                                    <p className="text-xs text-gray-500">Duration</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Participants Widget */}
                    <Card className="border-none shadow-sm bg-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-900 text-sm">Participants</h3>
                                <button className="text-xs text-blue-600 font-bold hover:underline">View All</button>
                            </div>

                            <div className="flex items-center -space-x-2 mb-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={cn(
                                        "h-8 w-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold",
                                        i === 1 ? "bg-gray-200" :
                                            i === 2 ? "bg-blue-100 text-blue-600" :
                                                i === 3 ? "bg-green-100 text-green-600" :
                                                    "bg-purple-100 text-purple-600"
                                    )}>
                                        {i === 1 ? "AB" : i === 2 ? "CD" : i === 3 ? "EF" : "GH"}
                                    </div>
                                ))}
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                    +42
                                </div>
                            </div>

                            <p className="text-xs text-gray-500">
                                Join 46 other colleagues in this batch to enhance your team performance skills together.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
