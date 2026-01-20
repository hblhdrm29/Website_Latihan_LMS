"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, AlertCircle, Briefcase, Calendar, Layers, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Types
interface Course {
    id: string
    title: string
    category: string
    duration: string
    image: string
    badge?: { text: string; color: "yellow" | "red" | "blue" }
}

interface Section {
    title: string
    icon: any
    iconColor: string
    courses: Course[]
}

// Mock Data
const SECTIONS: Section[] = [
    {
        title: "Recommended For You",
        icon: Star,
        iconColor: "text-amber-500",
        courses: [
            {
                id: "1",
                title: "HIGH TEAM PERFORMANCE",
                category: "Leadership & Management",
                duration: "12 Jan - 14 Jan 2024",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500",
                badge: { text: "HOT", color: "yellow" }
            },
            {
                id: "2",
                title: "Data Analytics for Business",
                category: "Technical Skills",
                duration: "15 Jan - 20 Jan 2024",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500"
            },
            {
                id: "3",
                title: "Effective Business Communication",
                category: "Soft Skills",
                duration: "22 Jan - 23 Jan 2024",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=500"
            }
        ]
    },
    {
        title: "Mandatory (Pelatihan Wajib)",
        icon: AlertCircle,
        iconColor: "text-red-500",
        courses: [
            {
                id: "4",
                title: "Code of Conduct 2024",
                category: "Compliance",
                duration: "01 Feb - 28 Feb 2024",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500",
                badge: { text: "REQUIRED", color: "red" }
            },
            {
                id: "5",
                title: "Information Security Awareness",
                category: "IT Security",
                duration: "05 Feb - 10 Feb 2024",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500",
                badge: { text: "REQUIRED", color: "red" }
            },
            {
                id: "6",
                title: "Workplace Safety Standards",
                category: "HSE",
                duration: "12 Feb - 14 Feb 2024",
                image: "https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80&w=500",
                badge: { text: "REQUIRED", color: "red" }
            }
        ]
    },
    {
        title: "Professional Skills",
        icon: Briefcase,
        iconColor: "text-blue-500",
        courses: [
            {
                id: "7",
                title: "Advanced Excel for Finance",
                category: "Technical Skills",
                duration: "01 Mar - 05 Mar 2024",
                image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=500"
            },
            {
                id: "8",
                title: "Project Management Fundamentals",
                category: "Project Management",
                duration: "10 Mar - 12 Mar 2024",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=500"
            },
            {
                id: "9",
                title: "Mastering Presentations",
                category: "Soft Skills",
                duration: "15 Mar - 16 Mar 2024",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=500"
            }
        ]
    }
]

function CatalogCourseCard({ course }: { course: Course }) {
    return (
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-white h-full flex flex-col">
            <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {course.badge && (
                    <div className={cn(
                        "absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider text-white",
                        course.badge.color === "yellow" ? "bg-amber-500" :
                            course.badge.color === "red" ? "bg-red-500" : "bg-blue-500"
                    )}>
                        {course.badge.text}
                    </div>
                )}
            </div>
            <CardContent className="p-4 flex-1 flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 line-clamp-2 text-sm md:text-base leading-tight">
                    {course.title}
                </h3>

                <div className="mt-auto space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Layers className="h-3.5 w-3.5 text-blue-500" />
                        <span>{course.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3.5 w-3.5 text-blue-500" />
                        <span>{course.duration}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function CourseCatalogPage() {
    return (
        <div className="p-6 pb-20 space-y-10 select-none">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Course Catalog</h1>
                    <p className="text-sm text-gray-500">Explore and enroll in training programs designed to enhance your skills.</p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search available courses..." className="pl-9 bg-white border-gray-200 h-9 text-sm" />
                    </div>
                    <Button variant="outline" size="icon" className="shrink-0 h-9 w-9 bg-white border-gray-200">
                        <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                    </Button>
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-12">
                {SECTIONS.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <section.icon className={cn("h-5 w-5", section.iconColor)} />
                                <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
                            </div>
                            <Button variant="link" className="text-blue-600 text-xs font-bold hover:no-underline p-0 h-auto">
                                View All
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.courses.map((course) => (
                                course.title === "HIGH TEAM PERFORMANCE" ? (
                                    <Link key={course.id} href="/dashboard-karyawan/course/daftar-pelatihan" className="block h-full">
                                        <CatalogCourseCard course={course} />
                                    </Link>
                                ) : (
                                    <CatalogCourseCard key={course.id} course={course} />
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center pt-8">
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-gray-100 shadow-sm">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-900">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button className="h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold rounded-md">1</Button>
                    <Button variant="ghost" className="h-8 w-8 text-gray-500 hover:text-gray-900 text-xs font-medium rounded-md">2</Button>
                    <Button variant="ghost" className="h-8 w-8 text-gray-500 hover:text-gray-900 text-xs font-medium rounded-md">3</Button>
                    <span className="text-gray-300 px-1 text-xs">...</span>
                    <Button variant="ghost" className="h-8 w-8 text-gray-500 hover:text-gray-900 text-xs font-medium rounded-md">8</Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-900">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
