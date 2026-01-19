"use client"

import { useSearchParams } from "next/navigation"
import { HighTeamPerformance } from "./high-team-performance"

export default function CourseProgressPage() {
    const searchParams = useSearchParams()

    // Future implementation:
    // const courseId = searchParams.get("course")
    // if (courseId === "other-course") return <OtherCourseComponent />

    return <HighTeamPerformance />
}
