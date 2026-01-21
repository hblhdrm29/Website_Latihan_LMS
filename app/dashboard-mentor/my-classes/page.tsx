"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MyClassesPage() {
    const classes = [
        {
            id: 1,
            title: "TDP Kaun - Batch X",
            mentees: 2,
            date: "Sep - Des 2025",
            image: "/assets/class-cover-1.png"
        },
        {
            id: 2,
            title: "MT-Batch I",
            mentees: 3,
            date: "Sep - Des 2025",
            image: "/assets/class-cover-2.png"
        },
        {
            id: 3,
            title: "TDP Kasek - Batch IX",
            mentees: 1,
            date: "Sep - Des 2025",
            image: "/assets/class-cover-3.png"
        },
        {
            id: 4,
            title: "Sales Academy - Batch V",
            mentees: 4,
            date: "Jan - Mar 2026",
            image: "/assets/class-cover-4.png"
        },
        {
            id: 5,
            title: "Digital Leadership",
            mentees: 5,
            date: "Feb - Apr 2026",
            image: "/assets/class-cover-1.png"
        },
        {
            id: 6,
            title: "Data Analytics Bootcamp",
            mentees: 3,
            date: "Mar - Mei 2026",
            image: "/assets/class-cover-2.png"
        },
        {
            id: 7,
            title: "SBU Risk Management",
            mentees: 2,
            date: "Apr - Jun 2026",
            image: "/assets/class-cover-3.png"
        },
        {
            id: 8,
            title: "Innovation Lab",
            mentees: 6,
            date: "Mei - Jul 2026",
            image: "/assets/class-cover-4.png"
        },
        {
            id: 9,
            title: "Future Leaders Program",
            mentees: 4,
            date: "Jun - Agu 2026",
            image: "/assets/class-cover-1.png"
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
                    <Card key={item.id} className="overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
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
                                <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{item.title}</h3>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Users className="h-4 w-4 text-blue-500" />
                                    <span>{item.mentees} Mentee</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="p-5 pt-0">
                            <Button variant="outline" className="w-full border-blue-100 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold" asChild>
                                <Link href={`/dashboard-mentor/my-classes/${item.id}`}>
                                    View Details
                                </Link>
                            </Button>
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
