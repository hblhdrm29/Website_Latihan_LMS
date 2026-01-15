"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, Lock, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface Step {
    title: string
    status: "completed" | "active" | "pending" | "locked"
    date?: string
    subtitle?: string
    content?: any[] | null
}

export default function MtBatch3Page() {
    // Mock data for Locked view
    const steps: Step[] = [
        {
            title: "Kick Off (19 Agustus 2024)",
            status: "locked",
            subtitle: "Locked • Starts Aug 19, 2024",
            content: null
        },
        {
            title: "Training Phase 1",
            status: "locked",
            subtitle: "Locked • 5 Lessons",
            content: null
        },
        {
            title: "Final Evaluation",
            status: "locked",
            subtitle: "Locked • Starts Sep 2024",
            content: null
        }
    ]

    return (
        <div className="p-6 space-y-6 pb-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span>Dashboard</span>
                <ChevronRight className="h-3 w-3" />
                <span>Class</span>
                <ChevronRight className="h-3 w-3" />
                <span className="font-semibold text-gray-900">MT-Batch III</span>
            </div>

            {/* Header Card */}
            <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-gray-900">MT- Batch III</h1>
                            <Badge className="bg-red-100 text-red-600 hover:bg-red-100 border-none px-2 py-0.5 text-[10px] font-bold">
                                Locked
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>16 Agustus 2024 - 18 Agustus 2024</span>
                        </div>
                    </div>
                    <Button className="bg-[#4F46E5] hover:bg-[#4338ca] text-white font-semibold px-6">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: The Journey */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-none shadow-sm bg-white min-h-[500px]">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-blue-100 rounded-md">
                                        <div className="h-4 w-4 border-l-2 border-r-2 border-blue-600"></div>
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900">The Journey</h2>
                                </div>
                                <Badge variant="secondary" className="bg-blue-50 text-blue-600 font-bold hover:bg-blue-50">
                                    0% Complete
                                </Badge>
                            </div>

                            {/* Timeline */}
                            <div className="relative pl-4 space-y-8 before:absolute before:left-[27px] before:top-2 before:bottom-10 before:w-0.5 before:bg-gray-100">
                                {steps.map((step, index) => {
                                    return (
                                        <div key={index} className="relative pl-8">
                                            {/* Timeline Node */}
                                            <div className="absolute left-0 top-1 bg-white">
                                                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                                                    <Lock className="h-3 w-3 text-gray-400" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className={cn(
                                                "pb-4",
                                                index !== steps.length - 1 ? "border-b border-gray-100" : ""
                                            )}>
                                                <div className="flex items-start justify-between cursor-default select-none">
                                                    <div>
                                                        <h3 className="font-bold text-sm text-gray-900">
                                                            {step.title}
                                                        </h3>
                                                        {step.subtitle && <p className="text-xs text-gray-400 mt-0.5">{step.subtitle}</p>}
                                                    </div>
                                                    <ChevronDown className="h-4 w-4 text-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
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
                                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Instructor" className="h-full w-full object-cover" />
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
                                    <p className="text-xl font-bold text-gray-900">45h</p>
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
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="" className="h-full w-full object-cover" />
                                    </div>
                                ))}
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                    +42
                                </div>
                            </div>

                            <p className="text-xs text-gray-500">
                                Join 46 other colleagues in this batch.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
