"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Users, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import cover1 from "@/public/assets/class-cover-1.png"
import cover2 from "@/public/assets/class-cover-2.png"
import cover3 from "@/public/assets/class-cover-3.png"
import cover4 from "@/public/assets/class-cover-4.png"

export default function MyClassesPage() {
    const classes = [
        {
            id: 1,
            title: "TDP Kaun - Batch X",
            mentees: 24,
            date: "Sep - Des 2025",
            image: cover1
        },
        {
            id: 2,
            title: "MT-Batch I",
            mentees: 3,
            date: "Sep - Des 2025",
            image: cover2
        },
        {
            id: 3,
            title: "TDP Kasek - Batch IX",
            mentees: 1,
            date: "Sep - Des 2025",
            image: cover3
        },
        {
            id: 4,
            title: "Sales Academy - Batch V",
            mentees: 4,
            date: "Jan - Mar 2026",
            image: cover4
        },
        {
            id: 5,
            title: "Digital Leadership",
            mentees: 5,
            date: "Feb - Apr 2026",
            image: cover1
        },
        {
            id: 6,
            title: "Data Analytics Bootcamp",
            mentees: 3,
            date: "Mar - Mei 2026",
            image: cover2
        },
        {
            id: 7,
            title: "SBU Risk Management",
            mentees: 2,
            date: "Apr - Jun 2026",
            image: cover3
        },
        {
            id: 8,
            title: "Innovation Lab",
            mentees: 6,
            date: "Mei - Jul 2026",
            image: cover4
        },
        {
            id: 9,
            title: "Future Leaders Program",
            mentees: 4,
            date: "Jun - Agu 2026",
            image: cover1
        }
    ]

    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">My Classes</h1>
                <p className="text-sm text-gray-500 mt-1">Manage and view details of your assigned mentorship classes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((item) => (
                    <Card key={item.id} className="relative overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
                        {item.id === 1 && (
                            <Link href="/dashboard-comentor/my-classes/view-detail" className="absolute inset-0 z-10">
                                <span className="sr-only">View Details</span>
                            </Link>
                        )}

                        {/* Cover Image */}
                        <div className="h-40 w-full relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <CardContent className="p-5 flex-1 space-y-4">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[...Array(Math.min(item.mentees, 3))].map((_, i) => (
                                            <div key={i} className="h-7 w-7 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                                                <Image
                                                    src="https://github.com/shadcn.png"
                                                    alt="Mentee"
                                                    width={28}
                                                    height={28}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        ))}
                                        {item.mentees > 3 && (
                                            <div className="h-7 w-7 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[9px] font-bold text-gray-500">
                                                +{item.mentees - 3}
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-xs font-medium text-gray-600">{item.mentees} Mentee</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="p-5 pt-0">
                            <div className={cn(
                                buttonVariants({ variant: "outline" }),
                                "w-full border-blue-100 text-blue-600 group-hover:bg-blue-50 group-hover:text-blue-700 font-semibold transition-colors",
                                item.id === 1 ? "cursor-pointer" : "cursor-default"
                            )}>
                                View Details
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-blue-600">
                    1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 hover:bg-gray-100">
                    2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 hover:bg-gray-100">
                    3
                </Button>
                <span className="flex items-center justify-center h-8 w-8 text-gray-400">...</span>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
