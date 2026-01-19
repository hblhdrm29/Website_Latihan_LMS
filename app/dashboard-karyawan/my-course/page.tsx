"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle2, FileText, XCircle, Trophy, Calendar, FileCheck, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Types
type CourseStatus = "passed" | "on-progress" | "unpassed"

interface Course {
    id: string
    title: string
    category: string
    date: string
    image: string
    status: CourseStatus
    rank?: string
    score?: string
    progress?: number
    badge?: string
    metadata?: { label: string; value: string }
}

// Mock Data
const COURSES: Course[] = [
    // Passed
    {
        id: "1",
        title: "Project Management Excellence",
        category: "Professional Skills",
        date: "Jan 15 - Feb 15, 2024",
        image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=500",
        status: "passed",
        rank: "3/40",
        score: "96/100",
        progress: 100,
        badge: "COMPLETED"
    },
    {
        id: "2",
        title: "Advanced Financial Reporting",
        category: "Finance & Accounting",
        date: "Mar 01 - Mar 20, 2024",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=500",
        status: "passed",
        rank: "2/35",
        score: "98/100",
        progress: 100,
        badge: "COMPLETED"
    },
    // On Progress
    {
        id: "htp-001",
        title: "HIGH TEAM PERFORMANCE",
        category: "Leadership & Management",
        date: "19 Agustus 2024 - 21 Agustus 2024",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500",
        status: "on-progress",
        rank: "-/57",
        metadata: { label: "Modules Completed", value: "24/24" }, // Or whatever metric
        progress: 0, // Not stated as started in enrollment, but "on progress" list. User screenshot showed 0% header but "Not Started"? Wait, enrolling moves it to progress. Let's say 0 or 10.
        badge: "IN PROGRESS"
    },
    {
        id: "3",
        title: "Cybersecurity Awareness",
        category: "IT Security",
        date: "Current Quarter",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500",
        status: "on-progress",
        rank: "-/50",
        metadata: { label: "Score Post Test", value: "Pending" },
        progress: 45,
        badge: "IN PROGRESS"
    },
    {
        id: "4",
        title: "Strategic Leadership V",
        category: "Executive Training",
        date: "Jan 2024 - Dec 2024",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500",
        status: "on-progress",
        rank: "12/30",
        metadata: { label: "Modules Completed", value: "8/12" },
        progress: 75,
        badge: "IN PROGRESS"
    },
    {
        id: "5",
        title: "Digital Transformation",
        category: "Innovation",
        date: "Apr 05 - Apr 25, 2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500",
        status: "on-progress",
        rank: "-/45",
        metadata: { label: "Live Sessions", value: "1/5" },
        progress: 20,
        badge: "IN PROGRESS"
    },
    // Unpassed
    {
        id: "6",
        title: "Workplace Safety Standards",
        category: "Compliance",
        date: "Last Month",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500",
        status: "unpassed",
        rank: "-",
        score: "55/100",
        progress: 100,
        badge: "FAILED"
    }
]

function StatusSection({
    title,
    count,
    icon: Icon,
    colorTheme,
    children
}: {
    title: string
    count: number
    icon: any
    colorTheme: "green" | "orange" | "red"
    children: React.ReactNode
}) {
    const themeStyles = {
        green: {
            icon: "text-green-600",
            badge: "bg-green-100 text-green-700",
            title: "text-gray-900"
        },
        orange: {
            icon: "text-orange-600",
            badge: "bg-orange-100 text-orange-700",
            title: "text-gray-900"
        },
        red: {
            icon: "text-red-600",
            badge: "bg-red-100 text-red-700",
            title: "text-gray-900"
        }
    }

    const theme = themeStyles[colorTheme]

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <Icon className={cn("h-5 w-5", theme.icon)} />
                <h2 className={cn("text-lg font-bold", theme.title)}>{title}</h2>
                <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", theme.badge)}>
                    {count} Courses
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {children}
            </div>
        </div>
    )
}

function CourseListCard({ course }: { course: Course }) {
    const isPassed = course.status === "passed"
    const isOnProgress = course.status === "on-progress"
    const isUnpassed = course.status === "unpassed"

    const progressColor = isPassed ? "bg-green-500" : isOnProgress ? "bg-blue-500" : "bg-red-500"
    const badgeColor = isPassed ? "bg-green-500" : isOnProgress ? "bg-blue-500" : "bg-red-500"

    return (
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
            <div className="relative h-40 bg-gray-100 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                />
                <div className={cn("absolute top-3 left-3 text-[10px] font-bold text-white px-2 py-0.5 rounded-sm uppercase tracking-wider", badgeColor)}>
                    {course.badge}
                </div>
            </div>
            <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 line-clamp-2 leading-tight h-10">
                        {course.title}
                    </h3>

                    <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                            <FileText className="h-3.5 w-3.5 text-blue-500" />
                            <span>{course.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                            <Calendar className="h-3.5 w-3.5 text-blue-500" />
                            <span>{course.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                            <Trophy className={cn("h-3.5 w-3.5", isPassed ? "text-yellow-500" : "text-gray-400")} />
                            <span className={isPassed ? "text-gray-700" : "text-gray-500"}>Rank: <span className="font-bold text-gray-900">{course.rank}</span></span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-50">
                    <div className="flex justify-between items-end text-[10px] font-semibold text-gray-500">
                        <span>
                            {isPassed ? "Final Score" : isOnProgress ? course.metadata?.label : "Final Score"}
                        </span>
                        <span className={cn(
                            "font-bold",
                            isPassed ? "text-green-600" : isOnProgress ? "text-blue-600" : "text-red-600"
                        )}>
                            {isPassed ? course.score : isOnProgress ? course.metadata?.value : course.score}
                        </span>
                    </div>
                    <div>
                        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className={cn("h-full rounded-full", progressColor)}
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-end mt-1">
                            {isUnpassed ? (
                                <span className="text-[9px] text-red-500 font-bold uppercase">Requirement not met</span>
                            ) : (
                                <span className={cn("text-[9px] font-bold", isPassed ? "text-green-500" : "text-blue-500")}>
                                    {course.progress}%
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function MyCoursePage() {
    const passedCourses = COURSES.filter(c => c.status === "passed")
    const onProgressCourses = COURSES.filter(c => c.status === "on-progress")
    const unpassedCourses = COURSES.filter(c => c.status === "unpassed")

    return (
        <div className="p-6 pb-20 space-y-8 select-none">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">My Course</h1>
                    <p className="text-sm text-gray-500">Manage your professional development and track your learning journey.</p>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search courses..." className="pl-9 bg-white border-gray-200 h-9 text-sm" />
                </div>
            </div>

            <div className="space-y-10">
                {/* Passed Section */}
                {passedCourses.length > 0 && (
                    <StatusSection
                        title="Passed"
                        count={passedCourses.length}
                        icon={CheckCircle2}
                        colorTheme="green"
                    >
                        {passedCourses.map(course => (
                            <CourseListCard key={course.id} course={course} />
                        ))}
                    </StatusSection>
                )}

                {/* On Progress Section */}
                {onProgressCourses.length > 0 && (
                    <StatusSection
                        title="On Progress"
                        count={onProgressCourses.length}
                        icon={FileCheck}
                        colorTheme="orange"
                    >
                        {onProgressCourses.map(course => (
                            <Link key={course.id} href={course.title === "HIGH TEAM PERFORMANCE" ? "/dashboard-karyawan/my-course/pelatihan" : "#"} className="block h-full">
                                <CourseListCard course={course} />
                            </Link>
                        ))}
                    </StatusSection>
                )}

                {/* Unpassed Section */}
                {unpassedCourses.length > 0 && (
                    <StatusSection
                        title="Unpassed"
                        count={unpassedCourses.length}
                        icon={XCircle}
                        colorTheme="red"
                    >
                        {unpassedCourses.map(course => (
                            <CourseListCard key={course.id} course={course} />
                        ))}
                    </StatusSection>
                )}
            </div>
        </div>
    )
}
