"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { HighTeamPerformance } from "./high-team-performance"

function CourseProgressContent() {
    const searchParams = useSearchParams()

    // Future implementation:
    // const courseId = searchParams.get("course")
    // if (courseId === "other-course") return <OtherCourseComponent />

    return <HighTeamPerformance />
}

export default function CourseProgressPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CourseProgressContent />
        </Suspense>
    )
}
