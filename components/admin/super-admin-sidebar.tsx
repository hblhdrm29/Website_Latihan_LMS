"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Users,
    Settings,
    Shield,
    FileText,
    LogOut,
    ChevronDown,
    X
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItemProps {
    icon: React.ElementType
    label: string
    href: string
    active?: boolean
    onClick?: () => void
}

function NavItem({ icon: Icon, label, href, active, onClick }: NavItemProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group text-sm font-medium",
                active
                    ? "bg-purple-50 text-purple-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
        >
            <div className={cn(
                "p-1.5 rounded-md transition-colors",
                active ? "bg-white text-purple-600 shadow-sm" : "bg-gray-50 text-gray-400 group-hover:bg-white group-hover:text-gray-600 group-hover:shadow-sm"
            )}>
                <Icon className="h-4 w-4" />
            </div>
            <span>{label}</span>
        </Link>
    )
}

interface SuperAdminSidebarProps {
    isOpen: boolean
    onClose: () => void
}

export function SuperAdminSidebar({ isOpen, onClose }: SuperAdminSidebarProps) {
    const pathname = usePathname()

    return (
        <aside className={cn(
            "absolute lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] left-0 z-40 h-full w-56 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 flex flex-col",
            isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            {/* Mobile Close Button */}
            <div className="lg:hidden p-4 flex justify-end">
                <button onClick={onClose}>
                    <X className="h-6 w-6 text-gray-500" />
                </button>
            </div>

            <div className="flex-1 py-6 px-3 space-y-6 overflow-y-auto">

                {/* Main Navigation */}
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Main</p>
                    <NavItem
                        icon={LayoutDashboard}
                        label="Dashboard"
                        href="/dashboard-super-admin"
                        active={pathname === "/dashboard-super-admin"}
                    />
                </div>

                {/* Management Section */}
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Management</p>
                    <NavItem
                        icon={Shield}
                        label="Role Management"
                        href="/dashboard-super-admin/roles"
                        active={pathname?.startsWith("/dashboard-super-admin/roles")}
                    />
                    <NavItem
                        icon={Users}
                        label="Users"
                        href="/dashboard-super-admin/users"
                        active={pathname?.startsWith("/dashboard-super-admin/users")}
                    />
                </div>

                {/* Configuration Section */}
                <div className="space-y-1">
                    <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Configuration</p>
                    <NavItem
                        icon={Settings}
                        label="System Settings"
                        href="/dashboard-super-admin/settings"
                        active={pathname?.startsWith("/dashboard-super-admin/settings")}
                    />
                    <NavItem
                        icon={FileText}
                        label="Audit Logs"
                        href="/dashboard-super-admin/logs"
                        active={pathname?.startsWith("/dashboard-super-admin/logs")}
                    />
                </div>

            </div>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-gray-100">
                <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors group">
                    <div className="p-1.5 rounded-md bg-red-50 text-red-500 group-hover:bg-white group-hover:shadow-sm transition-colors">
                        <LogOut className="h-4 w-4" />
                    </div>
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}
