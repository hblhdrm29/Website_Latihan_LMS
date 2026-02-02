"use client"

import * as React from "react"
import {
    Search,
    Plus,
    Filter,
    MoreVertical,
    Download,
    Trash2,
    Edit,
    Shield,
    CheckCircle2,
    XCircle,
    Mail,
    Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function UserManagementPage() {
    const [selectedRole, setSelectedRole] = React.useState("All Role")
    const [searchQuery, setSearchQuery] = React.useState("")

    return (
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage user access, roles, and status across the platform.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2 text-gray-600">
                        <Download className="h-4 w-4" />
                        Export
                    </Button>
                    <Button className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-blue-500/20">
                        <Plus className="h-4 w-4" />
                        Add New User
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Users", value: "2,543", icon: UsersIcon, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Active Users", value: "2,100", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
                    { label: "New Joiners", value: "45", icon: Plus, color: "text-purple-600", bg: "bg-purple-50" },
                    { label: "Inactive", value: "120", icon: XCircle, color: "text-red-600", bg: "bg-red-50" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                        </div>
                        <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", stat.bg, stat.color)}>
                            <stat.icon className="h-5 w-5" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search users by name, email, or NIK..."
                        className="pl-9 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <select
                        className="h-10 px-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                    >
                        <option>All Role</option>
                        <option>Super Admin</option>
                        <option>Admin PSP</option>
                        <option>Mentor</option>
                        <option>Karyawan</option>
                    </select>
                    <select className="h-10 px-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                        <option>Status: All</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Suspended</option>
                    </select>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">User Profile</th>
                            <th className="px-6 py-4">Role & Access</th>
                            <th className="px-6 py-4">Join Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[
                            { name: "Santika Tri Hapsari", email: "santika@peruri.co.id", role: "Super Admin", roleColor: "bg-indigo-100 text-indigo-700", status: "Active", date: "Jan 12, 2024", avatar: "https://github.com/shadcn.png" },
                            { name: "Budi Santoso", email: "budi.s@peruri.co.id", role: "Admin PSP", roleColor: "bg-blue-100 text-blue-700", status: "Active", date: "Feb 05, 2024", avatar: null },
                            { name: "Siti Rahmawati", email: "siti.rahma@peruri.co.id", role: "Mentor", roleColor: "bg-orange-100 text-orange-700", status: "Active", date: "Mar 20, 2024", avatar: null },
                            { name: "Ahmad Rizki", email: "ahmad.r@peruri.co.id", role: "Karyawan", roleColor: "bg-green-100 text-green-700", status: "Inactive", date: "Apr 10, 2024", avatar: null },
                            { name: "Dewi Lestari", email: "dewi.l@peruri.co.id", role: "Co-Mentor", roleColor: "bg-teal-100 text-teal-700", status: "Active", date: "May 15, 2024", avatar: null },
                        ].map((user, i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                                            {user.avatar ? (
                                                <Image src={user.avatar} alt={user.name} width={40} height={40} className="h-full w-full object-cover" />
                                            ) : (
                                                <span className="font-bold text-gray-500 text-xs">{user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{user.name}</p>
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-0.5">
                                                <Mail className="h-3 w-3" />
                                                {user.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5", user.roleColor)}>
                                        <Shield className="h-3 w-3" />
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        {user.date}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {user.status === "Active" ? (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                            Active
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                                            Inactive
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination - Simple Visual */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Showing 1 to 5 of 2,543 entries</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function UsersIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
