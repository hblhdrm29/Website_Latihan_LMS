"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, ChevronDown, CheckCircle2, Megaphone, FileText, PlayCircle, Lock, Map, Play, Pencil, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface SectionItem {
    id: string
    title: string
    type: "video" | "file" | "quiz" | "assignment" | "survey" | "text"
    status?: "done"
    content?: React.ReactNode // Detailed content when expanded
}

interface Section {
    id: string
    title: string
    progress?: number
    items?: SectionItem[]
    content?: React.ReactNode
}

export function HighTeamPerformance() {
    // State to track expanded sections
    const [expandedSections, setExpandedSections] = useState<string[]>(["announcement", "pretest", "materi", "tugas", "posttest", "kuesioner"])

    // State to track expanded items (sub-accordion)
    const [expandedItems, setExpandedItems] = useState<string[]>(["video1", "tugas1"])


    const toggleSection = (id: string) => {
        setExpandedSections(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const toggleItem = (id: string) => {
        setExpandedItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const searchParams = useSearchParams()
    const activeSectionId = searchParams.get("section") || "announcement"

    const sections: Section[] = [
        {
            id: "announcement",
            title: "Announcements",
            progress: 100,
            content: (
                <div className="space-y-2">
                    <div className="flex items-start gap-3">
                        <Megaphone className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-blue-600 text-sm">Tahapan Pembelajaran</h4>
                            <ol className="list-decimal list-inside text-xs text-gray-500 mt-1 space-y-1 ml-1">
                                <li>Membaca dan Mempelajari Materi</li>
                                <li>Melanjutkan dengan Mengisi Kuesioner</li>
                                <li>Menjawab seluruh pertanyaan pada Posttest</li>
                            </ol>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "pretest",
            title: "Pretest",
            items: [
                { id: "pretest1", title: "Pretest High Team Performance", type: "quiz", status: "done" }
            ]
        },
        {
            id: "materi",
            title: "Materi",
            items: [
                {
                    id: "video1",
                    title: "Video About High Team Performance",
                    type: "video",
                    status: "done",
                    content: (
                        <div className="mt-4">
                            <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center relative group cursor-pointer overflow-hidden">
                                {/* Mock Video Player */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="text-center text-white z-10 flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-1 font-bold text-2xl tracking-tight">
                                        <span>Linked</span>
                                        <span className="bg-[#0077b5] px-0.5 rounded-[2px]">in</span>
                                        <span>Learning</span>
                                    </div>
                                    <div className="h-16 w-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20 mt-2 hover:scale-110 transition-transform">
                                        <Play className="h-8 w-8 ml-1 fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                                    <div className="h-8 w-8 rounded-md bg-white/10 flex items-center justify-center border border-white/20">
                                        <Play className="h-4 w-4 text-white fill-white" />
                                    </div>
                                    <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full w-1/3 bg-white rounded-full"></div>
                                    </div>
                                    <div className="text-white">
                                        <div className="h-4 w-5">
                                            {/* Volume Icon Mock */}
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                },
                { id: "file1", title: "High Team Performance.pdf", type: "file", status: "done" }
            ]
        },
        {
            id: "tugas",
            title: "Tugas",
            items: [
                {
                    id: "tugas1",
                    title: "Pengumpulan Studi Kasus 1",
                    type: "assignment",
                    status: "done",
                    content: (
                        <div className="mt-4 border rounded-lg overflow-hidden bg-white text-sm">
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b last:border-0">
                                <div className="p-4 bg-gray-50 font-bold text-gray-700">Submission Status</div>
                                <div className="p-4 text-gray-600">submitted for grading</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b last:border-0">
                                <div className="p-4 bg-gray-50 font-bold text-gray-700">Grading Status</div>
                                <div className="p-4 text-gray-600">graded</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b last:border-0">
                                <div className="p-4 bg-gray-50 font-bold text-gray-700">Due date</div>
                                <div className="p-4 text-gray-600">Friday, 13 November 2025, 11:59 PM</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b last:border-0">
                                <div className="p-4 bg-gray-50 font-bold text-gray-700">Time Remaining</div>
                                <div className="p-4">
                                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-xs font-bold inline-block">
                                        Assignment was submitted 18 hours 45 mins late
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b last:border-0">
                                <div className="p-4 bg-gray-50 font-bold text-gray-700">Last modified</div>
                                <div className="p-4 text-gray-600">Saturday, 14 November 2025, 6:44 PM</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b last:border-0">
                                <div className="p-4 bg-gray-50 font-bold text-gray-700">File Submissions</div>
                                <div className="p-4">
                                    <div className="flex items-center gap-2 text-blue-600">
                                        <FileText className="h-4 w-4" />
                                        <a href="#" className="hover:underline font-medium">Kelompok 1_High Team Performance</a>
                                        <span className="text-gray-400 text-xs">14 November 2025, 6:44 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b last:border-0">
                                <div className="p-4 bg-gray-50 font-bold text-gray-700">Submission comments</div>
                                <div className="p-4 text-gray-500 italic flex items-center gap-2">
                                    <div className="h-4 w-4 border border-gray-300 rounded-sm"></div> {/* Fake checkbox */}
                                    Comments (0)
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-6 flex items-center justify-center gap-4 bg-white">
                                <Button variant="outline" className="gap-2 text-gray-700 border-gray-300">
                                    <Pencil className="h-4 w-4" /> Edit submission
                                </Button>
                                <Button variant="outline" className="gap-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                                    <Trash2 className="h-4 w-4" /> Remove submission
                                </Button>
                            </div>
                        </div>
                    )
                }
            ]
        },
        {
            id: "posttest",
            title: "Post Test",
            items: [
                { id: "posttest1", title: "Post Test High Team Performance", type: "quiz", status: "done" }
            ]
        },
        {
            id: "kuesioner",
            title: "Kuesioner Pengguna LMS",
            items: [
                { id: "kuisoner1", title: "Kuisoner", type: "survey", status: "done" }
            ]
        }
    ]

    // Determine which section(s) to show based on searchParams
    // If activeSectionId is invalid, we might default to showing all or just the first?
    // Let's filter to just the active section
    const displayedSections = sections.filter(s => s.id === activeSectionId)

    // Also update expandedSections state to ensure the item is expanded if it has content,
    // though the UI requirement "only announcement appears" implies we just show that SECTION.
    // If "only announcement" appears, it means other sections are hidden.
    // So we map over `displayedSections` instead of `sections`.

    const getIcon = (type: string) => {
        switch (type) {
            case "video": return <PlayCircle className="h-5 w-5" />;
            case "file": return <FileText className="h-5 w-5" />;
            case "quiz": return <FileText className="h-5 w-5" />;
            case "assignment": return <FileText className="h-5 w-5" />;
            case "survey": return <FileText className="h-5 w-5" />;
            default: return <FileText className="h-5 w-5" />;
        }
    }

    return (
        <div className="p-6 space-y-6 pb-20 select-none">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Link href="/dashboard-karyawan" className="hover:text-blue-600 transition-colors">Dashboard</Link>
                <ChevronRight className="h-3 w-3" />
                <Link href="/dashboard-karyawan/my-course" className="hover:text-blue-600 transition-colors">My Course</Link>
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
                                <Badge variant="secondary" className="bg-emerald-100 text-emerald-600 hover:bg-emerald-100 border-none px-2.5 py-0.5 text-[10px] font-bold">
                                    On Progress
                                </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span>19 Agustus 2024 - 21 Agustus 2024</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: The Journey */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border border-gray-200 shadow-sm bg-white min-h-[500px]">
                        <CardContent className="p-6">
                            <div
                                className="-mx-6 -mt-6 p-4 mb-6 flex items-center gap-3 border-b border-blue-700/20"
                                style={{
                                    background: "linear-gradient(90deg, #2563EB 0%, #7E22CE 100%)"
                                }}
                            >
                                <div className="p-1.5 bg-white/20 text-white rounded-md">
                                    <Map className="h-4 w-4" />
                                </div>
                                <h2 className="text-lg font-bold text-white">The Journey</h2>
                            </div>

                            {/* Accordion List */}
                            <div className="space-y-4">
                                {displayedSections.map((section) => {
                                    // For single view, we usually want it expanded by default
                                    // We can ignore the toggle logic for the outer container and just show the 'body'
                                    const isExpanded = true // Always expanded in single view mode

                                    return (
                                        <div key={section.id} className="overflow-hidden rounded-xl shadow-sm border border-gray-100">
                                            {/* Header */}
                                            <div
                                                className="flex items-center py-4 px-4 cursor-pointer hover:bg-gray-50/50 transition-colors group"
                                                onClick={() => toggleSection(section.id)}
                                            >
                                                <div className="flex items-center gap-4 w-full overflow-hidden">
                                                    <h3 className="font-semibold text-base text-gray-900 group-hover:text-blue-600 transition-colors truncate">{section.title}</h3>
                                                    {section.id === "announcement" && (
                                                        <div className="flex-1 flex items-center justify-end gap-3 shrink-0 ml-auto">
                                                            <div className="h-1.5 w-24 md:w-32 bg-gray-100 rounded-full overflow-hidden">
                                                                <div className="h-full bg-blue-600 w-full" />
                                                            </div>
                                                            <span className="text-xs font-medium text-gray-500">100%</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Body */}
                                            {isExpanded && (
                                                <div className="bg-white p-4 animate-in slide-in-from-top-2 duration-200">
                                                    {section.content && (
                                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                                            {section.content}
                                                        </div>
                                                    )}

                                                    {section.items && (
                                                        <div className="space-y-2">
                                                            {section.items.map((item, idx) => {
                                                                const isItemExpanded = expandedItems.includes(item.id);
                                                                // Use div if content exists so we can toggle, otherwise just a div
                                                                const ItemWrapper = item.content ? 'div' : 'div';

                                                                return (
                                                                    <div key={item.id} className="">
                                                                        <div
                                                                            className={cn(
                                                                                "flex items-center justify-between p-3 rounded-lg border border-gray-100/50 hover:bg-gray-50 transition-colors cursor-pointer",
                                                                                isItemExpanded && item.content ? "bg-gray-50/50" : "bg-gray-50"
                                                                            )}
                                                                            onClick={() => item.content && toggleItem(item.id)}
                                                                        >
                                                                            <div className="flex items-center gap-3">
                                                                                <div className="text-blue-600 shrink-0">
                                                                                    {getIcon(item.type)}
                                                                                </div>
                                                                                <span className={cn(
                                                                                    "text-sm font-bold truncate transition-colors text-blue-700"
                                                                                )}>
                                                                                    {item.title}
                                                                                </span>
                                                                            </div>
                                                                            {item.status === "done" && (
                                                                                <Badge className="bg-emerald-100 text-emerald-600 hover:bg-emerald-100 border-none px-2 py-0.5 text-[10px] font-bold gap-1 rounded-full">
                                                                                    DONE <CheckCircle2 className="h-3 w-3" />
                                                                                </Badge>
                                                                            )}
                                                                        </div>

                                                                        {/* Detailed Content */}
                                                                        {isItemExpanded && item.content && (
                                                                            <div className="pl-4 pr-1 pb-4 animate-in fade-in zoom-in-95 duration-200">
                                                                                {item.content}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
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
