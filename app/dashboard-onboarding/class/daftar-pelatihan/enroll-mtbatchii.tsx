"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, CheckCircle2, PlayCircle, Lock, Download, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"

interface StepContent {
    title: string
    type?: "video" | "download" | "module" | "assessment"
    duration?: string
    subtitle?: string
    thumbnails?: string[]
    score?: number
    action?: { label: string; href?: string }
}

interface Step {
    title: string
    status: "completed" | "active" | "pending" | "locked"
    date?: string
    subtitle?: string
    content?: StepContent[] | null
}

export function EnrollMtBatchII() {
    const steps: Step[] = [
        {
            title: "Kick Off (19 Agustus 2024)",
            status: "completed",
            date: "Completed on Aug 19, 2024",
            content: [
                {
                    title: "Welcome Speech by CEO",
                    type: "video",
                    duration: "15 min",
                    thumbnails: [
                        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=300",
                        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300"
                    ]
                },
                {
                    title: "Program Overview Presentation",
                    duration: "Download Slides (PDF)",
                    type: "download",
                }
            ]
        },
        {
            title: "Training Phase 1",
            status: "completed",
            date: "Completed on Sep 2024",
            content: [
                {
                    title: "Module 1: Leadership Foundations",
                    type: "module",
                    subtitle: "Completed • Aug 22, 2024",
                    score: 95
                },
                {
                    title: "Module 2: Strategic Thinking",
                    type: "module",
                    subtitle: "Completed • Aug 25, 2024",
                    score: 88
                },
                {
                    title: "Phase 1 Final Assessment",
                    type: "assessment",
                    subtitle: "Submitted • Aug 30, 2024",
                    action: { label: "View Result" }
                }
            ]
        },
        {
            title: "Final Evaluation",
            status: "locked",
            subtitle: "Locked • Starts Sep 2024",
            content: null
        }
    ]

    const title = "MT- Batch II"
    const statusLabel = "On Progress"
    const statusColor = "bg-emerald-100 text-emerald-600 hover:bg-emerald-100"
    const progressLabel = "87.5% Complete"
    const progressColor = "bg-blue-50 text-blue-600"

    const [expandedSteps, setExpandedSteps] = useState<number[]>([0, 1])

    const toggleStep = (index: number) => {
        setExpandedSteps(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
    }

    return (
        <div className="p-6 space-y-6 pb-20">
            {/* Breadcrumb Mock */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span>Dashboard</span>
                <ChevronRight className="h-3 w-3" />
                <span>Class</span>
                <ChevronRight className="h-3 w-3" />
                <span className="font-semibold text-gray-900">{title}</span>
            </div>

            {/* Header Card */}
            <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                            <Badge className={cn("border-none px-2 py-0.5 text-[10px] font-bold", statusColor)}>
                                {statusLabel}
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>16 Agustus 2024 - 18 Agustus 2024</span>
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
                                    <div className="p-1.5 bg-blue-100 rounded-md">
                                        <div className="h-4 w-4 border-l-2 border-r-2 border-blue-600"></div>
                                        {/* Simple icon for "Map" / Journey */}
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900">The Journey</h2>
                                </div>
                                <Badge variant="secondary" className={cn("font-bold", progressColor)}>
                                    {progressLabel}
                                </Badge>
                            </div>

                            {/* Timeline */}
                            <div className="relative pl-4 space-y-8 before:absolute before:left-[27px] before:top-2 before:bottom-10 before:w-0.5 before:bg-gray-100">
                                {steps.map((step, index) => {
                                    const isExpanded = expandedSteps.includes(index);

                                    return (
                                        <div key={index} className="relative pl-8">
                                            {/* Timeline Node */}
                                            <div className="absolute left-0 top-1 bg-white">
                                                {step.status === "completed" && <CheckCircle2 className="h-6 w-6 text-emerald-500 fill-emerald-50" />}
                                                {step.status === "active" && <div className="h-6 w-6 rounded-full bg-gray-200 border-4 border-white ring-1 ring-gray-300"></div>}
                                                {step.status === "pending" && <PlayCircle className="h-6 w-6 text-blue-100 text-blue-500 fill-blue-50" />}
                                                {step.status === "locked" && <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center"><Lock className="h-3 w-3 text-gray-400" /></div>}
                                            </div>

                                            {/* Content */}
                                            <div className={cn(
                                                "pb-4",
                                                step.status !== "locked" ? "border-b border-gray-100 last:border-0" : ""
                                            )}>
                                                <div
                                                    className="flex items-start justify-between cursor-pointer group select-none"
                                                    onClick={() => toggleStep(index)}
                                                >
                                                    <div>
                                                        <h3 className={cn("font-bold text-sm", step.status === "locked" ? "text-gray-400" : "text-gray-900")}>
                                                            {step.title}
                                                        </h3>
                                                        {step.date && <p className="text-xs text-gray-500 mt-0.5">{step.date}</p>}
                                                        {step.subtitle && <p className="text-xs text-gray-400 mt-0.5">{step.subtitle}</p>}
                                                    </div>
                                                    <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform duration-200", isExpanded ? "rotate-180" : "")} />
                                                </div>

                                                {/* Expandable Content */}
                                                {isExpanded && step.content && Array.isArray(step.content) && (
                                                    <div className="mt-6 space-y-0 relative animate-in fade-in slide-in-from-top-2 duration-200">
                                                        <div className="absolute left-[5px] top-2 bottom-4 w-px bg-gray-200"></div>

                                                        {step.content.map((item: any, i: number) => (
                                                            <div key={i} className="relative pl-6 pb-6 last:pb-0">
                                                                <div className={cn(
                                                                    "absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 z-10",
                                                                    step.status === "completed" ? "border-emerald-500 bg-emerald-50" : "border-gray-300 bg-gray-50"
                                                                )}></div>

                                                                <h4 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h4>
                                                                {item.subtitle && <p className="text-xs text-gray-500 mb-2">{item.subtitle}</p>}

                                                                {(item.type === "video" || item.type === "download") && (
                                                                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                                                        {item.thumbnails && (
                                                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                                                {item.thumbnails.map((thumb: string, idx: number) => (
                                                                                    <div key={idx} className="aspect-video rounded-md overflow-hidden bg-gray-200 relative group cursor-pointer">
                                                                                        <img src={thumb} alt="" className="w-full h-full object-cover" />
                                                                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )}

                                                                        <div className="flex items-center justify-between">
                                                                            <div>
                                                                                {item.type === "video" && (
                                                                                    <div className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                                                                                        <PlayCircle className="h-3 w-3" />
                                                                                        <span>Video • {item.duration}</span>
                                                                                    </div>
                                                                                )}
                                                                                {!item.type && item.duration && <span className="text-xs text-gray-500">{item.duration}</span>}
                                                                            </div>

                                                                            {item.type === "download" && (
                                                                                <Button variant="link" className="p-0 h-auto text-blue-600 text-xs font-semibold gap-1">
                                                                                    <Download className="h-3 w-3" />
                                                                                    {item.duration}
                                                                                </Button>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {item.score && (
                                                                    <div className="absolute right-0 top-0">
                                                                        <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-100 font-bold">
                                                                            Score: {item.score}
                                                                        </Badge>
                                                                    </div>
                                                                )}

                                                                {item.action && (
                                                                    <div className="absolute right-0 top-0">
                                                                        <Button variant="link" className="p-0 h-auto text-blue-600 text-xs font-bold gap-1">
                                                                            {item.action.label}
                                                                            <ChevronRight className="h-3 w-3" />
                                                                        </Button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
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
