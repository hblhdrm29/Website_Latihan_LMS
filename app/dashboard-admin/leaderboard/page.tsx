"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const leaderboardData = [
    { id: 1, nomorPokok: "90123", nama: "ANDI PRATAMA", kodeSTO: "42D10", namaUnit: "Unit Teknologi Informasi", jabatan: "Senior Developer", status: "aktif" },
    { id: 2, nomorPokok: "78890", nama: "BUDI SANTOSO", kodeSTO: "33X10", namaUnit: "Unit SDM & Umum", jabatan: "HR Specialist", status: "tidak_aktif" },
    { id: 3, nomorPokok: "12456", nama: "CITRA LESTARI", kodeSTO: "49H00", namaUnit: "Unit Keuangan", jabatan: "Financial Analyst", status: "aktif" },
    { id: 4, nomorPokok: "55432", nama: "DEWI KARTIKA", kodeSTO: "12B30", namaUnit: "Unit Pemasaran", jabatan: "Marketing Manager", status: "aktif" },
    { id: 5, nomorPokok: "88765", nama: "EKO PRASETYO", kodeSTO: "67C50", namaUnit: "Unit Operasional", jabatan: "Operations Staff", status: "aktif" },
    { id: 6, nomorPokok: "33211", nama: "FITRIANI SARI", kodeSTO: "90K20", namaUnit: "Unit Logistik", jabatan: "Logistic Coordinator", status: "tidak_aktif" },
    { id: 7, nomorPokok: "11234", nama: "GILANG RAMADHAN", kodeSTO: "44J15", namaUnit: "Unit Pengadaan", jabatan: "Procurement Officer", status: "aktif" },
    { id: 8, nomorPokok: "65789", nama: "HANIFAH PUTRI", kodeSTO: "21L40", namaUnit: "Unit Hukum", jabatan: "Legal Advisor", status: "aktif" },
    { id: 9, nomorPokok: "99001", nama: "INDRA KUSUMA", kodeSTO: "76M60", namaUnit: "Unit Audit Internal", jabatan: "Internal Auditor", status: "aktif" },
    { id: 10, nomorPokok: "44567", nama: "JOKO WIDODO", kodeSTO: "56N70", namaUnit: "Unit Produksi", jabatan: "Production Supervisor", status: "aktif" },
];

const categories = [
    { id: "onboarding", label: "Onboarding" },
    { id: "user", label: "User" },
    { id: "tdp_kaun", label: "TDP Kaun" },
    { id: "tdp_kasek", label: "TDP Kasek" },
    { id: "tdp_kadep", label: "TDP Kadep" },
    { id: "tdp_kadiv", label: "TDP Kadiv" },
];

export default function LeaderboardPage() {
    const [activeCategory, setActiveCategory] = React.useState("onboarding");
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
            </div>

            {/* Filter Bar */}
            <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-end">
                        {/* Role Filter */}
                        <div className="flex-1 space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase">Role</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Filter Role"
                                    className="pl-9 h-9 text-sm border-gray-200"
                                />
                            </div>
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
                            <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-9 text-xs font-bold px-4 gap-1">
                                <Download className="h-4 w-4" />
                                Export
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                            "px-4 py-2 rounded-full text-xs font-bold transition-colors",
                            activeCategory === cat.id
                                ? "bg-[#1e3a5f] text-white"
                                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                        )}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Table Controls */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">show</span>
                <select className="border border-gray-200 rounded-md px-2 py-1.5 text-sm bg-white text-gray-600">
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                <span className="text-sm text-gray-500">entries</span>
            </div>

            {/* Data Table */}
            <Card className="bg-white border-none shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-white" style={{ background: "linear-gradient(to right, #2563EB 0%, #7E22CE 100%)" }}>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider w-12">#</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Nomor Pokok</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Nama</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider">Kode STO</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Nama Unit</th>
                                <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider">Jabatan</th>
                                <th className="px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {leaderboardData.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-4 text-sm text-gray-600">{idx + 1}</td>
                                    <td className="px-4 py-4 text-sm font-semibold text-gray-900">{item.nomorPokok}</td>
                                    <td className="px-4 py-4 text-sm text-gray-700 font-medium">{item.nama}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 text-center font-mono">{item.kodeSTO}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{item.namaUnit}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{item.jabatan}</td>
                                    <td className="px-4 py-4 text-center">
                                        {item.status === "aktif" ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500 text-white uppercase">
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-red-500 text-white uppercase">
                                                Tidak Aktif
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between text-sm text-gray-500">
                <span>showing 1 of 3 for 60 entries</span>
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
