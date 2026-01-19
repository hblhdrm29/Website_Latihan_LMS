"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, ChevronLeft, ChevronRight, ArrowRight, Tags } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Mock Data for Catalog
const SECTIONS = [
    {
        title: "Magang Trainee",
        courses: [
            {
                title: "MT-Batch IV",
                category: "Pelatihan Produksi",
                date: "13 - 14 September 2024",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=500"
            },
            {
                title: "MT-Batch III",
                category: "Pelatihan Produksi",
                date: "16 - 18 Agustus 2024",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
            },

        ]
    },
    {
        title: "PKWT",
        courses: [
            {
                title: "PKWT-Batch IV",
                category: "Pelatihan Produksi",
                date: "13 - 14 September 2024",
                image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?auto=format&fit=crop&q=80&w=500"
            },
            {
                title: "PKWT-Batch III",
                category: "Pelatihan Produksi",
                date: "16 - 18 Agustus 2024",
                image: "https://images.unsplash.com/photo-1531685250784-7569949d33fd?auto=format&fit=crop&q=80&w=500"
            },
            {
                title: "PKWT-Batch II",
                category: "Pelatihan Produksi",
                date: "10 - 24 August 2023",
                image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500"
            }
        ]
    },
    {
        title: "Pelatihan Penjualan dan Pengembangan Usaha",
        courses: [
            {
                title: "Sales Mastery",
                category: "Pelatihan Produksi",
                date: "15 - 16 Agustus 2024",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=500"
            },
            {
                title: "Business Development",
                category: "Business Strategy",
                date: "16 - 18 Agustus 2024",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500"
            },
            {
                title: "Negotiation Skills",
                category: "Soft Skills",
                date: "16 - 18 Agustus 2024",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=500"
            }
        ]
    }
]

function CatalogCard({ course }: { course: any }) {
    return (
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-white">
            <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <CardContent className="p-4 space-y-3">
                <h3 className="font-bold text-gray-900 line-clamp-1">{course.title}</h3>

                <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Tags className="h-3.5 w-3.5 text-blue-500" />
                        <span>{course.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3.5 w-3.5 text-blue-500" />
                        <span>{course.date}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function ClassPage() {
    return (
        <div className="p-6 pb-20 space-y-8 select-none">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Class</h1>
                <p className="text-sm text-gray-500">Explore and enroll in available training classes.</p>
            </div>

            {/* Filter Section */}
            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Filter</label>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Nama Pelatihan/Kategori Pelatihan" className="pl-9 bg-white border-gray-200" />
                    </div>
                    <div className="relative w-full md:w-48">
                        <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                        <Input placeholder="Start Date" className="bg-white border-gray-200" />
                    </div>
                    <div className="relative w-full md:w-48">
                        <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                        <Input placeholder="End Date" className="bg-white border-gray-200" />
                    </div>
                    <Button className="bg-[#2e2365] hover:bg-[#201844] text-white px-8 font-semibold">
                        FILTER NOW
                    </Button>
                </div>
            </div>

            {/* Course Sections */}
            <div className="space-y-12">
                {SECTIONS.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.courses.map((course, cIdx) => (
                                course.title === "MT-Batch II" ? (
                                    <Link key={cIdx} href="/dashboard-onboarding/class/daftar-pelatihan" className="block h-full">
                                        <CatalogCard course={course} />
                                    </Link>
                                ) : course.title === "MT-Batch III" ? (
                                    <Link key={cIdx} href="/dashboard-onboarding/class/daftar-pelatihan?batch=mt-batch-iii" className="block h-full">
                                        <CatalogCard course={course} />
                                    </Link>
                                ) : (
                                    <CatalogCard key={cIdx} course={course} />
                                )
                            ))}
                        </div>

                        <div className="flex justify-end">
                            <Button variant="link" className="text-blue-600 font-semibold text-xs gap-1 p-0 h-auto">
                                More <ArrowRight className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col items-center justify-center gap-4 pt-8">
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-gray-100 shadow-sm">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 disabled:opacity-50" disabled>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button className="h-8 w-8 bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold rounded-md">1</Button>
                    <Button variant="ghost" className="h-8 w-8 text-gray-500 hover:text-gray-900 text-xs font-medium rounded-md">2</Button>
                    <Button variant="ghost" className="h-8 w-8 text-gray-500 hover:text-gray-900 text-xs font-medium rounded-md">3</Button>
                    <span className="text-gray-300 px-1 text-xs">...</span>
                    <Button variant="ghost" className="h-8 w-8 text-gray-500 hover:text-gray-900 text-xs font-medium rounded-md">6</Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-900">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <p className="text-[10px] text-gray-400 font-medium">Showing 1 to 10 of 60 results</p>
            </div>
        </div>
    )
}
