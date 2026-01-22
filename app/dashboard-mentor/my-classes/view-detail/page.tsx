"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import {
    ChevronLeft,
    Users,
    Calendar,
    Clock,
    MapPin,
    FileText,
    MoreHorizontal,
    Search,
    Filter
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { basePath } from "@/lib/utils"

export default function ClassDetailPage() {
    const params = useParams()
    const id = params.id

    // Mock Data based on ID (In a real app, fetch this)
    const classData = {
        title: "TDP Kaun - Batch X",
        category: "Leadership",
        status: "In Progress",
        menenteesCount: 24,
        startDate: "01 Sep 2025",
        endDate: "15 Dec 2025",
        progress: 65,
        cover: `${basePath}/assets/class-cover-1.png`,
        description: "Program pengembangan kepemimpinan untuk Trainee Development Program (TDP) Kaun Batch X. Fokus pada managerial skills dan strategic thinking."
    }

    const mentees = [
        { id: 1, name: "Ahmad Rizki", role: "Management Trainee", status: "Active", progress: 80, avatar: "https://github.com/shadcn.png" },
        { id: 2, name: "Sarah Amalia", role: "Management Trainee", status: "Active", progress: 92, avatar: "https://github.com/shadcn.png" },
        { id: 3, name: "Budi Santoso", role: "Management Trainee", status: "Warning", progress: 45, avatar: "https://github.com/shadcn.png" },
        { id: 4, name: "Dewi Putri", role: "Management Trainee", status: "Active", progress: 78, avatar: "https://github.com/shadcn.png" },
        { id: 5, name: "Eko Prasetyo", role: "Management Trainee", status: "Inactive", progress: 10, avatar: "https://github.com/shadcn.png" },
        { id: 6, name: "Fina Maharani", role: "Management Trainee", status: "Active", progress: 88, avatar: "https://github.com/shadcn.png" },
    ]

    return (
        <div className="space-y-6 pb-10">
            {/* Header / Breadcrumb Area */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-gray-100">
                    <Link href="/dashboard-mentor/my-classes">
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Class Details</h1>
                    <p className="text-sm text-gray-500">View and manage class specific activities.</p>
                </div>
            </div>

            {/* Class Hero Card */}
            <div className="relative group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
                {/* Cover Image Background */}
                <div className="h-48 w-full relative">
                    <Image
                        src={classData.cover}
                        alt="Cover"
                        fill
                        className="object-cover brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-0">
                            {classData.status}
                        </Badge>
                    </div>

                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-blue-200 font-semibold mb-1 uppercase tracking-wider text-xs">{classData.category}</p>
                                <h2 className="text-3xl font-bold mb-2">{classData.title}</h2>
                                <div className="flex items-center gap-6 text-sm text-gray-200">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-blue-300" />
                                        <span>{classData.menenteesCount} Mentees</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-green-300" />
                                        <span>{classData.startDate} - {classData.endDate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:block">
                                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center min-w-[100px]">
                                    <div className="text-2xl font-bold">{classData.progress}%</div>
                                    <div className="text-[10px] text-gray-300 uppercase">Avg. Progress</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="mentees" className="w-full">
                <TabsList className="w-full sm:w-auto p-1 bg-white border border-gray-100 rounded-xl mb-6 shadow-sm">
                    <TabsTrigger value="mentees" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Mentees</TabsTrigger>
                    <TabsTrigger value="schedule" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Schedule</TabsTrigger>
                    <TabsTrigger value="resources" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Resources</TabsTrigger>
                    <TabsTrigger value="grades" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Grades</TabsTrigger>
                </TabsList>

                {/* Mentees Tab Content */}
                <TabsContent value="mentees" className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input placeholder="Search mentee..." className="pl-9 bg-gray-50 border-gray-200" />
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <Button variant="outline" className="gap-2 border-gray-200">
                                <Filter className="h-4 w-4 text-gray-500" />
                                Filter
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                Add Mentee
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mentees.map((mentee) => (
                            <Card key={mentee.id} className="hover:shadow-md transition-shadow border-gray-100 rounded-xl overflow-hidden group">
                                <CardContent className="p-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-100">
                                                <Image
                                                    src={mentee.avatar}
                                                    alt={mentee.name}
                                                    width={48}
                                                    height={48}
                                                    className="object-cover h-full w-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 leading-tight">{mentee.name}</h3>
                                                <p className="text-xs text-gray-500 mt-0.5">{mentee.role}</p>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Status</span>
                                            <Badge variant="secondary" className={`
                                                ${mentee.status === 'Active' ? 'bg-green-50 text-green-700' : ''}
                                                ${mentee.status === 'Warning' ? 'bg-yellow-50 text-yellow-700' : ''}
                                                ${mentee.status === 'Inactive' ? 'bg-red-50 text-red-700' : ''}
                                                border-0 font-medium
                                            `}>
                                                {mentee.status}
                                            </Badge>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-gray-500">Progress</span>
                                                <span className="font-semibold text-gray-900">{mentee.progress}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500 rounded-full"
                                                    style={{ width: `${mentee.progress}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button variant="outline" className="w-full text-xs h-8 border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50">
                                                View Profile
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* Schedule Tab Placeholder */}
                <TabsContent value="schedule">
                    <Card className="border-dashed border-2 border-gray-200 bg-gray-50/50">
                        <CardContent className="flex flex-col items-center justify-center p-12 text-center text-gray-500">
                            <Calendar className="h-12 w-12 text-gray-300 mb-3" />
                            <p className="font-medium">Schedule Content</p>
                            <p className="text-sm">This section will display appropriate schedule.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}


