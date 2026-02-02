"use client"

import * as React from "react"
import { Users, Shield, Server, Activity, RefreshCw } from "lucide-react"

function StatCard({ title, value, label, icon: Icon, color }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
                <Icon className="h-16 w-16" />
            </div>
            <div className="relative">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 ${color.replace('text-', 'bg-').replace('500', '100')} ${color}`}>
                    <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
                <p className="text-xs text-gray-400">{label}</p>
            </div>
        </div>
    )
}

export default function SuperAdminDashboard() {
    return (
        <div className="p-6 max-w-[1600px] mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">System Overview</h1>
                    <p className="text-sm text-gray-500">Monitor overall system health and user statistics.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        System Operational
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Total Users"
                    value="1,248"
                    label="Active accounts in system"
                    icon={Users}
                    color="text-blue-500"
                />
                <StatCard
                    title="Active Roles"
                    value="6"
                    label="Distinct role types defined"
                    icon={Shield}
                    color="text-indigo-500"
                />
                <StatCard
                    title="System Load"
                    value="24%"
                    label="Average server CPU usage"
                    icon={Server}
                    color="text-emerald-500"
                />
                <StatCard
                    title="Audit Events"
                    value="856"
                    label="Events logged today"
                    icon={Activity}
                    color="text-amber-500"
                />
            </div>

            {/* Quick Actions / Recent Logs Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Audit Logs</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 text-sm pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-500">
                                    <Activity className="h-4 w-4" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">User Role Updated</p>
                                    <p className="text-gray-500 text-xs">Admin PSP changed role for user "User_{i}"</p>
                                </div>
                                <span className="text-gray-400 text-xs">2 mins ago</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-xl shadow-lg p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">System Maintenance</h3>
                    <p className="text-indigo-200 text-sm mb-6">Schedule or trigger manual system maintenance tasks.</p>

                    <div className="space-y-2">
                        <button className="w-full py-2 px-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors text-left flex items-center gap-2">
                            <RefreshCw className="h-4 w-4" /> Clear System Cache
                        </button>
                        <button className="w-full py-2 px-3 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors text-left flex items-center gap-2">
                            <Server className="h-4 w-4" /> Restart Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
