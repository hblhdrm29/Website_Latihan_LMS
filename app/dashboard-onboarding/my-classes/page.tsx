"use client"

import { Input } from "@/components/ui/input"
import { Search, CheckCircle, Clock, FileText, XCircle } from "lucide-react"
import { CourseCard } from "@/components/dashboard/course-card"
import Link from "next/link"

export default function MyClassesPage() {
    return (
        <div className="p-6 space-y-8 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
                    <p className="text-sm text-gray-500">Track your progress and view your training history.</p>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search classes..."
                        className="pl-9 bg-white border-gray-200"
                    />
                </div>
            </div>

            {/* Passed Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                        <h2 className="font-bold text-lg text-gray-800">Passed</h2>
                        <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full">1 Class</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CourseCard
                        title="PKWT Batch V - Induction"
                        type="Pelatihan Wajib"
                        date="Aug 10 - Aug 24, 2023"
                        rank="7/57"
                        score="89/100"
                        status="Passed"
                        progress={100}
                        icon={FileText}
                    />
                    <CourseCard
                        title="UX Design Fundamentals"
                        type="Design Thinking"
                        date="Jul 01 - Jul 15, 2023"
                        rank="3/42"
                        score="92/100"
                        status="Passed"
                        progress={100}
                        icon={FileText}
                    />
                </div>
            </div>

            {/* On Progress Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-orange-100 p-1 rounded-md">
                            <Clock className="h-4 w-4 text-orange-600" />
                        </div>
                        <h2 className="font-bold text-lg text-gray-800">On Progress</h2>
                        <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">2 Classes</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link href="/dashboard-onboarding/my-classes/pelatihan?batch=mt-batch-iii" className="block h-full">
                        <CourseCard
                            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
                            title="MT-Batch III"
                            type="Pelatihan Wajib"
                            date="Aug 2024 - Mar 2025"
                            rank="-/57"
                            status="OnProgress"
                            progress={0}
                            icon={FileText}
                            footerLabel="Modules"
                            footerValue="Locked"
                        />
                    </Link>
                    <Link href="/dashboard-onboarding/my-classes/pelatihan" className="block h-full">
                        <CourseCard
                            image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
                            title="MT-Batch II"
                            type="Pelatihan Wajib"
                            date="Aug 2024 - Mar 2025"
                            rank="-/57"
                            status="OnProgress"
                            progress={45}
                            icon={FileText}
                            footerLabel="Score Post Test"
                            footerValue="Pending"
                        />
                    </Link>
                    <CourseCard
                        image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                        title="Leadership Core V"
                        type="Soft Skill"
                        date="Jan 2024 - Dec 2024"
                        rank="12/30"
                        status="OnProgress"
                        progress={75}
                        icon={FileText}
                        footerLabel="Modules Completed"
                        footerValue="8/12"
                    />
                </div>
            </div>
            {/* Unpassed Section */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-red-100 p-1 rounded-md">
                            <XCircle className="h-4 w-4 text-red-600" />
                        </div>
                        <h2 className="font-bold text-lg text-gray-800">Unpassed</h2>
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">1 Class</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <CourseCard
                        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600"
                        title="Corporate Finance Basics"
                        type="Technical Skill"
                        date="Jan 10 - Jan 25, 2023"
                        rank="-/40"
                        score="55/100"
                        status="Unpassed"
                        progress={100}
                        icon={FileText}
                        footerLabel="Final Score"
                    />
                </div>
            </div>
        </div>
    )
}
