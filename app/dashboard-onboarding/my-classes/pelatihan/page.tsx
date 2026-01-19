"use client"

import { useSearchParams } from "next/navigation"
import { MtBatchTwo } from "./mt-batch-ii"
import { MtBatchThree } from "./mt-batch-iii"

export default function MyClassesDetailPage() {
    const searchParams = useSearchParams()
    const isBatchTiga = searchParams.get("batch") === "mt-batch-iii"

    if (isBatchTiga) {
        return <MtBatchThree />
    }

    return <MtBatchTwo />
}
