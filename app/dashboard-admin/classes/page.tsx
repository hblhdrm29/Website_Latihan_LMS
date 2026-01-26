"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Settings, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const classesData = [
    { id: 1, kategori: "Magang Trainee", fullname: "MT-Batch II", shortname: "mt2", date: "sep - des 2025", visible: true },
    { id: 2, kategori: "PKWT", fullname: "PKWT-Batch X", shortname: "pkwt10", date: "xxxxxx", visible: true },
    { id: 3, kategori: "Magang Trainee", fullname: "MT-Batch I", shortname: "mt1", date: "xxxxxx", visible: true },
    { id: 4, kategori: "PKWT", fullname: "PKWT-Batch IX", shortname: "pkwt8", date: "xxxxxx", visible: false },
    { id: 5, kategori: "xxxx", fullname: "xxxxx", shortname: "xxxxx xxxxxxxx", date: "", visible: false },
    { id: 6, kategori: "xxxx", fullname: "xxxxx", shortname: "xxxxx xxxxxxxx", date: "", visible: false },
    { id: 7, kategori: "xxxx", fullname: "xxxxx", shortname: "xxxxx xxxxxxxx", date: "", visible: false },
    { id: 8, kategori: "xxxx", fullname: "xxxxx", shortname: "xxxxx xxxxxxxx", date: "", visible: false },
];

export default function ClassesPage() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);

    const filteredData = classesData.filter(classItem =>
        classItem.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
        classItem.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Classes</h1>
                <p className="text-sm text-gray-500">Management and Overview</p>
            </div>

            {/* Filter Bar */}
            <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-end">
                        {/* Search & Export */}
                        <div className="flex-1 space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase">Filter</label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Input
                                        placeholder="Search by name, category..."
                                        className="pl-3 pr-10 h-9 text-sm border-gray-200"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-4">
                                    Export
                                </Button>
                            </div>
                        </div>

                        {/* Date Range */}
                        <div className="flex gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase">Start Date</label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="dd/mm/yyyy"
                                        className="pl-9 h-9 text-sm w-40 border-gray-200"
                                    />
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase">End Date</label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="dd/mm/yyyy"
                                        className="pl-9 h-9 text-sm w-40 border-gray-200"
                                    />
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-6 self-end">
                                Apply
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Table Controls */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <select className="border border-gray-200 rounded-md px-2 py-1.5 text-sm bg-white text-gray-600">
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <span className="text-sm text-gray-500">entries</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Search..."
                            className="pl-9 h-9 text-sm w-48 border-gray-200"
                        />
                    </div>
                    <Link href="/dashboard-admin/classes/create">
                        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-4 gap-1">
                            <Plus className="h-4 w-4" />
                            Tambah Classes
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Data Table */}
            <Card className="bg-white border-none shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-white" style={{ background: "linear-gradient(to right, #2563EB 0%, #7E22CE 100%)" }}>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider w-12">#</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Kategori</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Fullname</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Shortname</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider">Date</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider">Visible</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider w-12">
                                    <Settings className="h-4 w-4 mx-auto" />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredData.map((classItem, idx) => (
                                <tr key={classItem.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-sm text-gray-600">{idx + 1}</td>
                                    <td className="px-4 py-4 text-sm font-semibold text-gray-900">{classItem.kategori}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{classItem.fullname}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 font-mono">{classItem.shortname}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 text-center">{classItem.date || ""}</td>
                                    <td className="px-4 py-4 text-center">
                                        {classItem.visible ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500 text-white uppercase">
                                                Show
                                            </span>
                                        ) : (
                                            <span className="text-purple-600 text-xs font-bold">xxxxx</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-gray-100">
                                            <Settings className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between text-sm text-gray-500">
                <span>showing 1 of 3 for 63 entries</span>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            className={cn(
                                "h-8 w-8 rounded-md text-xs font-bold transition-colors",
                                currentPage === page
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100 text-gray-600"
                            )}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <span className="px-2 text-gray-400">...</span>
                    <button
                        className="h-8 w-8 rounded-md text-xs font-bold hover:bg-gray-100 text-gray-600"
                        onClick={() => setCurrentPage(6)}
                    >
                        6
                    </button>
                    <button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
