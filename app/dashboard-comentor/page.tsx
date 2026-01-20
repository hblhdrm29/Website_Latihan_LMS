"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, User, Users, BookOpen, Clock, AlertTriangle, CheckCircle2, ChevronDown, UserSquare2, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import * as React from "react"

// --- Components for this page ---

function StatCard({
    title,
    value,
    icon: Icon,
    className,
    iconClassName,
    titleClassName,
    valueClassName
}: {
    title: string,
    value: string | number,
    icon: any,
    className?: string,
    iconClassName?: string,
    titleClassName?: string,
    valueClassName?: string
}) {
    return (
        <div className={cn("p-4 rounded-xl shadow-sm border flex flex-col justify-between h-full", className)}>
            <div className="flex justify-between items-start mb-2">
                <div className={cn("p-2 rounded-lg", iconClassName)}>
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <div>
                <h3 className={cn("text-2xl font-bold", valueClassName)}>{value}</h3>
                <p className={cn("text-[10px] font-bold uppercase tracking-wider", titleClassName)}>{title}</p>
            </div>
        </div>
    )
}

function UpcomingClassCard() {
    return (
        <Card className="shadow-sm border-none bg-white overflow-hidden">
            <div className="bg-indigo-50/50 p-4 border-b border-indigo-100 flex items-center justify-between">
                <h3 className="font-semibold text-lg text-gray-900">Upcoming Class</h3>
                <Badge variant="outline" className="bg-white text-indigo-600 border-indigo-200">2 Sessions</Badge>
            </div>
            <CardContent className="space-y-3 p-4">
                {[
                    { topic: "React Fundamentals", date: "Fri, 24 Jan", time: "09:00 - 11:30", batch: "MT-Batch IV" },
                    { topic: "State Management", date: "Mon, 27 Jan", time: "13:00 - 15:00", batch: "TDP Kaun" },
                ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-2.5 border border-gray-100 rounded-lg hover:bg-indigo-50/30 transition-colors">
                        <div className="flex flex-col items-center justify-center h-10 w-10 bg-indigo-100 text-indigo-700 rounded-lg shrink-0">
                            <span className="text-[8px] font-bold uppercase">{item.date.split(" ")[0]}</span>
                            <span className="text-sm font-bold leading-none">{item.date.split(" ")[1]}</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.topic}</h4>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-[9px] px-1.5 py-0 border-gray-300 text-gray-500 font-normal">
                                    {item.batch}
                                </Badge>
                                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> {item.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                <Button variant="ghost" className="w-full text-xs text-indigo-600 hover:bg-indigo-50 h-8 mt-1">
                    View Full Schedule
                </Button>
            </CardContent>
        </Card>
    )
}

function MenteeListCard() {
    return (
        <Card className="shadow-sm border-none bg-white overflow-hidden">
            <div className="bg-indigo-50/50 p-4 border-b border-indigo-100 flex items-center justify-between">
                <h3 className="font-semibold text-lg text-gray-900">List Mentee</h3>
                <Button variant="link" className="text-xs text-blue-600 font-medium p-0 h-auto">View All</Button>
            </div>
            <CardContent className="space-y-2 p-4">
                {[
                    { name: "ABCDEF GHIJK LMNO", batch: "Batch I", role: "SDM", initials: "AG", color: "bg-purple-100 text-purple-600" },
                    { name: "EFGHI JKLMN OPQR", batch: "Batch II", role: "SDM", initials: "EJ", color: "bg-blue-100 text-blue-600" },
                    { name: "JKLMNOP QRSTUVW X", batch: "PKWT XII", role: "SDM", initials: "JQ", color: "bg-green-100 text-green-600" },
                ].map((mentee, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors -mx-2">
                        <div className="flex items-center gap-3">
                            <div className={cn("h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold ring-2 ring-white", mentee.color)}>
                                {mentee.initials}
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900 line-clamp-1">{mentee.name}</p>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <Badge variant="secondary" className="text-[9px] px-1.5 py-0 bg-blue-50 text-blue-600 border-none rounded-sm">
                                        {mentee.batch}
                                    </Badge>
                                    <span className="text-[10px] text-gray-400 font-medium">• {mentee.role}</span>
                                </div>
                            </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-gray-400" />
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

function MenteeDetailAccordion() {
    const [openItem, setOpenItem] = useState<string | null>("item-1")

    return (
        <div className="space-y-6">
            <h3 className="font-bold text-gray-900 text-lg">Detail Mentee</h3>

            {/* Accordion Container */}
            <Card className="bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden divide-y divide-gray-100">
                {/* MT-Batch IV */}
                <div className="bg-white">
                    <button
                        onClick={() => setOpenItem(openItem === "item-1" ? null : "item-1")}
                        className={cn(
                            "w-full flex items-center justify-between p-4 transition-colors",
                            openItem === "item-1" ? "bg-[#2563EB] text-white" : "hover:bg-gray-50 text-gray-900"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className={cn("h-4 w-4 rounded flex items-center justify-center", openItem === "item-1" ? "text-white" : "bg-gray-100 text-gray-500")}>
                                <BookOpen className="h-3 w-3" />
                            </div>
                            <span className={cn("font-bold text-sm", openItem === "item-1" ? "text-white" : "text-gray-500")}>MT-Batch IV</span>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openItem === "item-1" ? "rotate-180 text-white" : "text-gray-400")} />
                    </button>

                    {openItem === "item-1" && (
                        <div className="p-6 bg-white space-y-8 animate-in slide-in-from-top-2 duration-200">
                            {/* Mentee 1 */}
                            <div className="relative pl-8 border-b border-gray-100 pb-8 last:pb-0 last:border-0">
                                {/* Vertical Line */}
                                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gray-200"></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 absolute left-0 top-0 ring-4 ring-white">
                                            <User className="h-3 w-3" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900">ABCDEF GHIJK LMNO</h4>
                                            <p className="text-xs text-blue-600 font-medium">Magang Trainee Batch 1 | SDM</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 mb-1">Status Penilaian</p>
                                        <div className="flex justify-end">
                                            <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={num} className="flex items-center gap-3 relative">
                                            <div className="w-4 border-t border-gray-200 absolute -left-[21px] top-1/2"></div>
                                            <span className="text-xs text-gray-500 font-medium w-24">Assessment {num}</span>
                                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 border-none hover:bg-emerald-50 text-[10px] font-bold px-2 py-0.5">
                                                PASSED
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mentee 2 */}
                            <div className="relative pl-8">
                                {/* Vertical Line */}
                                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gray-200"></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 absolute left-0 top-0 ring-4 ring-white">
                                            <User className="h-3 w-3" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900 uppercase">PLMNOPQRSTUV WKJLZZ</h4>
                                            <p className="text-xs text-blue-600 font-medium">Magang Trainee Batch 1 | SDM</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 mb-1">Status Penilaian</p>
                                        <div className="flex justify-end">
                                            <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                                <XCircle className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        { id: 1, status: "PASSED" },
                                        { id: 2, status: "PASSED" },
                                        { id: 3, status: "UNPASSED" },
                                        { id: 4, status: "PASSED" },
                                    ].map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 relative">
                                            <div className="w-4 border-t border-gray-200 absolute -left-[21px] top-1/2"></div>
                                            <span className="text-xs text-gray-500 font-medium w-24">Assessment {item.id}</span>
                                            <Badge
                                                variant="secondary"
                                                className={cn(
                                                    "border-none hover:bg-opacity-100 text-[10px] font-bold px-2 py-0.5",
                                                    item.status === "PASSED" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                                                )}
                                            >
                                                {item.status}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* PKWT-Batch XII */}
                <div className="bg-white">
                    <button
                        onClick={() => setOpenItem(openItem === "item-2" ? null : "item-2")}
                        className={cn(
                            "w-full flex items-center justify-between p-4 transition-colors border-t",
                            openItem === "item-2" ? "bg-[#2563EB] text-white" : "hover:bg-gray-50 text-gray-900"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className={cn("h-4 w-4 rounded flex items-center justify-center", openItem === "item-2" ? "text-white" : "bg-gray-100 text-gray-500")}>
                                <BookOpen className="h-3 w-3" />
                            </div>
                            <span className={cn("font-bold text-sm", openItem === "item-2" ? "text-white" : "text-gray-500")}>PKWT-Batch XII</span>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openItem === "item-2" ? "rotate-180 text-white" : "text-gray-400")} />
                    </button>

                    {openItem === "item-2" && (
                        <div className="p-6 bg-white space-y-8 animate-in slide-in-from-top-2 duration-200">
                            {/* Mentee 1 */}
                            <div className="relative pl-8 border-b border-gray-100 pb-8 last:pb-0 last:border-0">
                                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gray-200"></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 absolute left-0 top-0 ring-4 ring-white">
                                            <User className="h-3 w-3" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900">SINTIA DEWI</h4>
                                            <p className="text-xs text-blue-600 font-medium">PKWT Batch XII | SDM</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 mb-1">Status Penilaian</p>
                                        <div className="flex justify-end">
                                            <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[1, 2, 3].map((num) => (
                                        <div key={num} className="flex items-center gap-3 relative">
                                            <div className="w-4 border-t border-gray-200 absolute -left-[21px] top-1/2"></div>
                                            <span className="text-xs text-gray-500 font-medium w-24">Assessment {num}</span>
                                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 border-none hover:bg-emerald-50 text-[10px] font-bold px-2 py-0.5">
                                                PASSED
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mentee 2 */}
                            <div className="relative pl-8">
                                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gray-200"></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 absolute left-0 top-0 ring-4 ring-white">
                                            <User className="h-3 w-3" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900">BUDI SANTOSO</h4>
                                            <p className="text-xs text-blue-600 font-medium">PKWT Batch XII | SDM</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 mb-1">Status Penilaian</p>
                                        <div className="flex justify-end">
                                            <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                                <Clock className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        { id: 1, status: "PASSED" },
                                        { id: 2, status: "ON PROGRESS" },
                                    ].map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 relative">
                                            <div className="w-4 border-t border-gray-200 absolute -left-[21px] top-1/2"></div>
                                            <span className="text-xs text-gray-500 font-medium w-24">Assessment {item.id}</span>
                                            <Badge
                                                variant="secondary"
                                                className={cn(
                                                    "border-none hover:bg-opacity-100 text-[10px] font-bold px-2 py-0.5",
                                                    item.status === "PASSED" ? "bg-emerald-50 text-emerald-600" : "bg-yellow-50 text-yellow-600"
                                                )}
                                            >
                                                {item.status}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* MT-Batch III */}
                <div className="bg-white">
                    <button
                        onClick={() => setOpenItem(openItem === "item-3" ? null : "item-3")}
                        className={cn(
                            "w-full flex items-center justify-between p-4 transition-colors border-t",
                            openItem === "item-3" ? "bg-[#2563EB] text-white" : "hover:bg-gray-50 text-gray-900"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className={cn("h-4 w-4 rounded flex items-center justify-center", openItem === "item-3" ? "text-white" : "bg-gray-100 text-gray-500")}>
                                <BookOpen className="h-3 w-3" />
                            </div>
                            <span className={cn("font-bold text-sm", openItem === "item-3" ? "text-white" : "text-gray-500")}>MT-Batch III</span>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openItem === "item-3" ? "rotate-180 text-white" : "text-gray-400")} />
                    </button>

                    {openItem === "item-3" && (
                        <div className="p-6 bg-white space-y-8 animate-in slide-in-from-top-2 duration-200">
                            {/* Mentee 1 */}
                            <div className="relative pl-8 border-b border-gray-100 pb-8 last:pb-0 last:border-0">
                                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gray-200"></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 absolute left-0 top-0 ring-4 ring-white">
                                            <User className="h-3 w-3" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900">CITRA LESTARI</h4>
                                            <p className="text-xs text-blue-600 font-medium">Magang Trainee Batch III | SDM</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 mb-1">Status Penilaian</p>
                                        <div className="flex justify-end">
                                            <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[1, 2, 3].map((num) => (
                                        <div key={num} className="flex items-center gap-3 relative">
                                            <div className="w-4 border-t border-gray-200 absolute -left-[21px] top-1/2"></div>
                                            <span className="text-xs text-gray-500 font-medium w-24">Assessment {num}</span>
                                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 border-none hover:bg-emerald-50 text-[10px] font-bold px-2 py-0.5">
                                                PASSED
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    )
}


export default function MentorDashboardPage() {
    return (
        <div className="p-6 space-y-6 pb-20 select-none">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Co-Mentor Dashboard</h1>
                    <p className="text-xs text-gray-500 mt-1">Overview of your mentoring activities and student progress.</p>
                </div>
            </div>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <StatCard
                    title="Class"
                    value="3"
                    icon={BookOpen}
                    className="bg-blue-50 border-blue-100"
                    iconClassName="bg-blue-100 text-blue-600"
                    titleClassName="text-blue-400/80"
                    valueClassName="text-blue-900"
                />
                <StatCard
                    title="Mentee"
                    value="6"
                    icon={Users}
                    className="bg-indigo-50 border-indigo-100"
                    iconClassName="bg-indigo-100 text-indigo-600"
                    titleClassName="text-indigo-400/80"
                    valueClassName="text-indigo-900"
                />
                <StatCard
                    title="Mentee on Progress"
                    value="2"
                    icon={Clock}
                    className="bg-yellow-50 border-yellow-100"
                    iconClassName="bg-yellow-100 text-yellow-600"
                    titleClassName="text-yellow-500/80"
                    valueClassName="text-yellow-900"
                />
                <StatCard
                    title="Passed"
                    value="1"
                    icon={CheckCircle2}
                    className="bg-emerald-500 border-emerald-600"
                    iconClassName="bg-white/20 text-white"
                    titleClassName="text-emerald-100"
                    valueClassName="text-white"
                />
                <StatCard
                    title="Unpassed"
                    value="1"
                    icon={AlertTriangle}
                    className="bg-red-500 border-red-600"
                    iconClassName="bg-white/20 text-white"
                    titleClassName="text-red-100"
                    valueClassName="text-white"
                />
            </div>

            {/* Middle Section: Chart + Schedule + Mentee List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart (33%) */}
                <div>
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <div className="bg-indigo-50/50 p-4 border-b border-indigo-100 flex items-center justify-between">
                            <h3 className="font-semibold text-lg text-gray-900">Mentee Status</h3>
                        </div>
                        <CardContent className="p-4">
                            <div className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg h-full bg-white">
                                <div className="relative h-32 w-32">
                                    {/* Mock Donut Chart */}
                                    <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                                        <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                                        <circle cx="50" cy="50" r="40" stroke="#10B981" strokeWidth="10" fill="transparent" strokeDasharray="210 251.2" strokeDashoffset="0" strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-bold text-gray-900">85%</span>
                                        <span className="text-[9px] text-gray-400 uppercase font-bold">Completion</span>
                                    </div>
                                </div>
                                <div className="mt-6 w-full flex items-center justify-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-[#10B981]"></div>
                                        <span className="text-xs font-bold text-gray-600">Completed</span>
                                        <span className="text-xs font-bold text-gray-900 ml-auto">85%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                                        <span className="text-xs font-bold text-gray-600">Pending</span>
                                        <span className="text-xs font-bold text-gray-900 ml-auto">15%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Upcoming Schedule (33%) */}
                <div>
                    <UpcomingClassCard />
                </div>

                {/* Mentee List (33%) */}
                <div>
                    <MenteeListCard />
                </div>
            </div>

            {/* Bottom Section: Detail Mentee Accordion */}
            <MenteeDetailAccordion />
        </div>
    )
}
