"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { MtBatchTwo } from "./mt-batch-ii"
import { MtBatchThree } from "./mt-batch-iii"

function MyClassesDetailContent() {
    const searchParams = useSearchParams()
    const isBatchTiga = searchParams.get("batch") === "mt-batch-iii"

    if (isBatchTiga) {
        return <MtBatchThree />
    }

    return <MtBatchTwo />
}

export default function MyClassesDetailPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyClassesDetailContent />
        </Suspense>
    )
}
