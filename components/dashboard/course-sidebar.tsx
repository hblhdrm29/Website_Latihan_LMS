"use client"

import * as React from "react"
import { ChevronDown, PlayCircle, FileText, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

// Mock data matching the High Team Performance content
const sections = [
    {
        id: "announcement",
        title: "Announcements",
        progress: 100,
        items: []
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
            { id: "video1", title: "Video About High Team Performance", type: "video", status: "done" },
            { id: "file1", title: "High Team Performance.pdf", type: "file", status: "done" }
        ]
    },
    {
        id: "tugas",
        title: "Tugas",
        items: [
            { id: "tugas1", title: "Pengumpulan Studi Kasus 1", type: "assignment", status: "done" }
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
        title: "Kuesioner",
        items: [
            { id: "kuisoner1", title: "Kuesioner", type: "survey", status: "done" }
        ]
    }
]

export function CourseSidebar() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    // Default to announcement if no section param
    const activeSectionId = searchParams.get("section") || "announcement"

    // We can still keep expanded sections logic for sub-menus if needed, 
    // but user focus is on "selecting" a section.
    // For now, let's keep the expanded logic for non-announcement items.
    const [expandedSections, setExpandedSections] = React.useState<string[]>([])

    const toggleSection = (id: string, hasItems: boolean) => {
        const isActive = activeSectionId === id

        if (isActive) {
            // Deselect / Toggle Off
            router.push(pathname)
            setExpandedSections(prev => prev.filter(i => i !== id))
            return
        }

        // Select / Toggle On
        // If it's announcement or has no items, just navigate (and maybe clear expanded if we want strict accordion?)
        // The previous logic accumulated expanded sections.

        // Ensure the newly selected one is expanded
        setExpandedSections(prev =>
            prev.includes(id) ? prev : [...prev, id]
        )
        router.push(`${pathname}?section=${id}`)
    }

    const getIcon = (type: string) => {
        switch (type) {
            case "video": return <PlayCircle className="h-4 w-4" />;
            case "file": return <FileText className="h-4 w-4" />;
            case "quiz": return <FileText className="h-4 w-4" />;
            case "assignment": return <FileText className="h-4 w-4" />;
            case "survey": return <FileText className="h-4 w-4" />;
            default: return <FileText className="h-4 w-4" />;
        }
    }

    return (
        <div className="flex flex-col h-full bg-white border-r">
            {/* Back to Dashboard */}
            <div className="p-4 border-b">
                <Link href="/dashboard-karyawan/my-course" className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to My Course</span>
                </Link>
                <h2 className="font-bold text-gray-900 mt-3 text-sm">High Team Performance</h2>
                <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[75%]" />
                    </div>
                    <span className="text-xs font-medium text-gray-500">75%</span>
                </div>
            </div>

            {/* Sidebar List */}
            <div className="flex-1 overflow-y-auto p-2">
                {sections.map((section) => {
                    const isExpanded = expandedSections.includes(section.id)
                    const isActive = activeSectionId === section.id
                    const isAnnouncement = section.id === "announcement"

                    return (
                        <div key={section.id} className="border-b border-gray-100 last:border-0">
                            <div
                                className={cn(
                                    "flex items-center py-3 px-2 cursor-pointer rounded-md group transition-colors",
                                    isActive ? "bg-blue-50" : "hover:bg-gray-50"
                                )}
                                onClick={() => toggleSection(section.id, !!section.items?.length)}
                            >
                                {/* Only show chevron if NOT announcement and has items */}
                                {!isAnnouncement && (
                                    <div className="shrink-0 text-gray-400 group-hover:text-gray-600 mr-2">
                                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isExpanded ? "rotate-0" : "-rotate-90")} />
                                    </div>
                                )}

                                <div className={cn("flex items-center gap-3 w-full overflow-hidden", isAnnouncement && "pl-2")}>
                                    <h3 className={cn(
                                        "font-semibold text-sm transition-colors truncate",
                                        isActive ? "text-blue-600" : "text-gray-700 group-hover:text-blue-600"
                                    )}>
                                        {section.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Items */}
                            {/* Only render items if NOT announcement */}
                            {!isAnnouncement && isExpanded && section.items && section.items.length > 0 && (
                                <div className="pl-6 pb-2 space-y-0.5 animate-in slide-in-from-top-1 duration-200">
                                    {section.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 cursor-pointer group/item transition-colors"
                                        >
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <div className="text-gray-400 group-hover/item:text-blue-500 shrink-0">
                                                    {getIcon(item.type)}
                                                </div>
                                                <span className={cn(
                                                    "text-xs font-medium truncate transition-colors",
                                                    item.status === "done" ? "text-gray-600" : "text-gray-900"
                                                )}>
                                                    {item.title}
                                                </span>
                                            </div>
                                            {item.status === "done" && (
                                                <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
