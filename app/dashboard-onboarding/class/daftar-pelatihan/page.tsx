"use client"

import { useSearchParams } from "next/navigation"
import { EnrollMtBatchII } from "./enroll-mtbatchii"
import { EnrollMtBatchIII } from "./enroll-mtbatchiii"

export default function ClassDetailPage() {
    const searchParams = useSearchParams()
    const isBatchTiga = searchParams.get("batch") === "mt-batch-iii"

    if (isBatchTiga) {
        return <EnrollMtBatchIII />
    }

    return <EnrollMtBatchII />
}
