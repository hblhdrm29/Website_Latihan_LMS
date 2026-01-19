"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { EnrollMtBatchII } from "./enroll-mtbatchii"
import { EnrollMtBatchIII } from "./enroll-mtbatchiii"

function ClassDetailContent() {
    const searchParams = useSearchParams()
    const isBatchTiga = searchParams.get("batch") === "mt-batch-iii"

    if (isBatchTiga) {
        return <EnrollMtBatchIII />
    }

    return <EnrollMtBatchII />
}

export default function ClassDetailPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClassDetailContent />
        </Suspense>
    )
}
