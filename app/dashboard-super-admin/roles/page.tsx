"use client"

import * as React from "react"
import { Shield, Plus, MoreVertical, Edit, Trash2, Users, Lock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function RoleManagementPage() {
    return (
        <div className="p-6 max-w-[1600px] mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Role Management</h1>
                    <p className="text-sm text-gray-500 mt-1">Define permissions and access levels for system users.</p>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-blue-500/20">
                    <Plus className="h-4 w-4" />
                    Create New Role
                </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-500/20 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-indigo-100 font-medium mb-1">Total Active Roles</p>
                        <h2 className="text-4xl font-bold">6</h2>
                        <p className="text-xs text-indigo-200 mt-4 bg-white/10 inline-block px-2 py-1 rounded-lg">Last updated today</p>
                    </div>
                    <Shield className="absolute -right-4 -bottom-4 h-32 w-32 text-white/10 rotate-12" />
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <p className="text-gray-500 font-medium mb-1">Most Assigned Role</p>
                        <h2 className="text-2xl font-bold text-gray-900">Karyawan</h2>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>145 Users assigned</span>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <p className="text-gray-500 font-medium mb-1">System Administrators</p>
                        <h2 className="text-2xl font-bold text-gray-900">7</h2>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <Lock className="h-4 w-4" />
                        <span>High privilege accounts</span>
                    </div>
                </div>
            </div>

            {/* Role Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Super Admin", desc: "Full control over the entire system settings, users, and roles.", users: 2, permissions: "All Permissions", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
                    { name: "Admin PSP", desc: "Manage learning content, courses, and user progress tracking.", users: 5, permissions: "24 Permissions", color: "bg-blue-50 text-blue-600 border-blue-100" },
                    { name: "Mentor", desc: "Create courses, grade assignments, and mentor students.", users: 12, permissions: "18 Permissions", color: "bg-orange-50 text-orange-600 border-orange-100" },
                    { name: "Co-Mentor", desc: "Assist mentors in managing classes and discussions.", users: 8, permissions: "12 Permissions", color: "bg-teal-50 text-teal-600 border-teal-100" },
                    { name: "Karyawan (Learner)", desc: "Access courses, take quizzes, and track personal progress.", users: 145, permissions: "Read Only", color: "bg-green-50 text-green-600 border-green-100" },
                    { name: "Onboarding", desc: "Limited access for new employees during orientation.", users: 24, permissions: "Limited", color: "bg-gray-50 text-gray-600 border-gray-200" },
                ].map((role, i) => (
                    <div key={i} className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
                        <div className="p-6 flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center border", role.color)}>
                                    <Shield className="h-6 w-6" />
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600">
                                        <Edit className="h-4 w-4" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-red-600">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{role.name}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">{role.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
                                    <Users className="h-3 w-3" />
                                    {role.users} Users
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
                                    <Lock className="h-3 w-3" />
                                    {role.permissions}
                                </span>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-50 bg-gray-50/30 rounded-b-xl flex justify-end">
                            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                                Configure Permissions <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
