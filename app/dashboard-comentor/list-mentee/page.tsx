"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { BookOpen, User, CheckCircle2, XCircle, Clock, ChevronDown } from "lucide-react"
import { InternalNotes } from "@/components/dashboard/internal-notes"

export default function ListMenteePage() {
    const [openItem, setOpenItem] = useState<string | null>("item-1")

    return (
        <div className="p-6 space-y-6 pb-20 select-none">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">List Mentee</h1>
                <p className="text-xs text-gray-500 mt-1">View detailed progress and status of all your mentees.</p>
            </div>

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

                                    {/* Internal Notes Section (Co-Mentor Feature) - Collapsible */}
                                    <InternalNotes />
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
                                    <InternalNotes />
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
                                    <InternalNotes />
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
                                    <InternalNotes />
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
                                    <InternalNotes />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* TDP Kaun - Batch X */}
                <div className="bg-white">
                    <button
                        onClick={() => setOpenItem(openItem === "item-4" ? null : "item-4")}
                        className={cn(
                            "w-full flex items-center justify-between p-4 transition-colors border-t",
                            openItem === "item-4" ? "bg-[#2563EB] text-white" : "hover:bg-gray-50 text-gray-900"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className={cn("h-4 w-4 rounded flex items-center justify-center", openItem === "item-4" ? "text-white" : "bg-gray-100 text-gray-500")}>
                                <BookOpen className="h-3 w-3" />
                            </div>
                            <span className={cn("font-bold text-sm", openItem === "item-4" ? "text-white" : "text-gray-500")}>TDP Kaun - Batch X</span>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openItem === "item-4" ? "rotate-180 text-white" : "text-gray-400")} />
                    </button>

                    {openItem === "item-4" && (
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
                                            <h4 className="font-bold text-sm text-gray-900">DIAN SARI</h4>
                                            <p className="text-xs text-blue-600 font-medium">TDP Kaun Batch X | SDM</p>
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
                                    {[1, 2, 3].map((num) => (
                                        <div key={num} className="flex items-center gap-3 relative">
                                            <div className="w-4 border-t border-gray-200 absolute -left-[21px] top-1/2"></div>
                                            <span className="text-xs text-gray-500 font-medium w-24">Assessment {num}</span>
                                            <Badge variant="secondary" className="bg-red-50 text-red-600 border-none hover:bg-red-50 text-[10px] font-bold px-2 py-0.5">
                                                UNPASSED
                                            </Badge>
                                        </div>
                                    ))}
                                    <InternalNotes />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* TDP Kasek - Batch IX */}
                <div className="bg-white">
                    <button
                        onClick={() => setOpenItem(openItem === "item-5" ? null : "item-5")}
                        className={cn(
                            "w-full flex items-center justify-between p-4 transition-colors border-t",
                            openItem === "item-5" ? "bg-[#2563EB] text-white" : "hover:bg-gray-50 text-gray-900"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className={cn("h-4 w-4 rounded flex items-center justify-center", openItem === "item-5" ? "text-white" : "bg-gray-100 text-gray-500")}>
                                <BookOpen className="h-3 w-3" />
                            </div>
                            <span className={cn("font-bold text-sm", openItem === "item-5" ? "text-white" : "text-gray-500")}>TDP Kasek - Batch IX</span>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openItem === "item-5" ? "rotate-180 text-white" : "text-gray-400")} />
                    </button>

                    {openItem === "item-5" && (
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
                                            <h4 className="font-bold text-sm text-gray-900">EKO PRABOWO</h4>
                                            <p className="text-xs text-blue-600 font-medium">TDP Kasek Batch IX | SDM</p>
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
                                    <InternalNotes />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* TDP Kadep */}
                <div className="bg-white">
                    <button
                        onClick={() => setOpenItem(openItem === "item-6" ? null : "item-6")}
                        className={cn(
                            "w-full flex items-center justify-between p-4 transition-colors border-t",
                            openItem === "item-6" ? "bg-[#2563EB] text-white" : "hover:bg-gray-50 text-gray-900"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className={cn("h-4 w-4 rounded flex items-center justify-center", openItem === "item-6" ? "text-white" : "bg-gray-100 text-gray-500")}>
                                <BookOpen className="h-3 w-3" />
                            </div>
                            <span className={cn("font-bold text-sm", openItem === "item-6" ? "text-white" : "text-gray-500")}>TDP Kadep - Batch II</span>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openItem === "item-6" ? "rotate-180 text-white" : "text-gray-400")} />
                    </button>

                    {openItem === "item-6" && (
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
                                            <h4 className="font-bold text-sm text-gray-900">FAJAR ILHAM</h4>
                                            <p className="text-xs text-blue-600 font-medium">TDP Kadep Batch II | SDM</p>
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
                                    {/* Internal Notes Section (Co-Mentor Feature) - Collapsible */}
                                    <InternalNotes />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    )
}
