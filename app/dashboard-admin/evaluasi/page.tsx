"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Settings, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const evaluasiData = [
    { id: 1, nama: "Whistle Blowing System" },
    { id: 2, nama: "Negotiation Skill" },
    { id: 3, nama: "Manajemen Konflik" },
    { id: 4, nama: "ISO 27001" },
    { id: 5, nama: "xxxx" },
    { id: 6, nama: "xxxx" },
    { id: 7, nama: "xxxx" },
    { id: 8, nama: "xxxx" },
    { id: 9, nama: "xxxx" },
    { id: 10, nama: "xxxx" },
    { id: 11, nama: "xxxx" },
    { id: 12, nama: "xxxx" },
    { id: 13, nama: "xxxx" },
];

const categories = [
    { id: "evaluasi_1", label: "Evaluasi Iv 1" },
    { id: "evaluasi_3", label: "Evaluasi Iv 3" },
];

export default function EvaluasiPage() {
    const [activeCategory, setActiveCategory] = React.useState("evaluasi_1");
    const [currentPage, setCurrentPage] = React.useState(1);
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredData = evaluasiData.filter(item =>
        item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Evaluasi</h1>
            </div>

            {/* Filter Bar */}
            <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                    <div className="space-y-4">
                        {/* Search and Export */}
                        <div className="flex gap-4 items-end">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Filter Evaluasi"
                                    className="pl-9 h-9 text-sm border-gray-200"
                                />
                            </div>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-6">
                                Export
                            </Button>
                        </div>

                        {/* Date Range */}
                        <div className="flex gap-4 items-end">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase">Start Date</label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                        className="h-9 text-sm w-36 border-gray-200 pr-9"
                                    />
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase">End Date</label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                        className="h-9 text-sm w-36 border-gray-200 pr-9"
                                    />
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-6">
                                Apply
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Category Tabs and Add Button */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-4 py-2 rounded-full text-xs font-bold transition-colors",
                                activeCategory === cat.id
                                    ? "bg-[#1e3a5f] text-white"
                                    : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                <Link href="/dashboard-admin/evaluasi/create">
                    <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-4 gap-1">
                        Tambah Evaluasi
                        <Plus className="h-4 w-4" />
                    </Button>
                </Link>
            </div>

            {/* Table Controls */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">show</span>
                    <select className="border border-gray-200 rounded-md px-2 py-1.5 text-sm bg-white text-gray-600">
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <span className="text-sm text-gray-500">entries</span>
                </div>
                <div className="relative">
                    <Input
                        placeholder="Search"
                        className="h-9 text-sm w-48 border-gray-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Data Table */}
            <Card className="bg-white border-none shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-white" style={{ background: "linear-gradient(to right, #2563EB 0%, #7E22CE 100%)" }}>
                                <th className="px-4 py-3 text-center w-12">
                                    <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-transparent" />
                                </th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider w-12">#</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Nama Pelatihan</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider w-12">
                                    <Settings className="h-4 w-4 mx-auto" />
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredData.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-center">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{idx + 1}</td>
                                    <td className="px-4 py-4 text-sm text-gray-700 font-medium">{item.nama}</td>
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
                <span>showing 1 of 1 for 13 entries</span>
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
