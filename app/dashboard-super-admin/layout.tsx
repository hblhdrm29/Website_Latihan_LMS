"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Shield,
    FileText,
    User,
    LogOut,
    ChevronDown,
    Menu,
    X,
    Bell,
    Home,
    Lightbulb,
    Settings,
    RefreshCw,
    GraduationCap,
    Users
} from "lucide-react"
import { cn } from "@/lib/utils"

import logoBumn from "../../public/assets/Logo_BUMN.png"
import logoPeruri from "../../public/assets/Logo_Peruri.png"
import { AdminNotificationPopup } from "@/components/admin/admin-notification-popup"

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
    const [showNotifications, setShowNotifications] = React.useState(false)
    const [showRole, setShowRole] = React.useState(false)
    const pathname = usePathname()

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar - Exact replica of Karyawan Navbar */}
            <header className="h-10 bg-blue-100 text-white flex items-center justify-between px-4 lg:px-6 shadow-md z-50 sticky top-0"
                style={{
                    background: "linear-gradient(90deg, #2563EB 0%, #7E22CE 100%)"
                }}
            >
                <div className="flex items-center gap-4">
                    <button className="lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="flex items-center gap-3">
                        {/* Logos */}
                        <div className="h-8 w-auto relative flex items-center gap-2">
                            <Image
                                src={logoBumn}
                                alt="BUMN"
                                width={80}
                                height={30}
                                className="object-contain brightness-0 invert"
                            />
                            <div className="h-4 w-px bg-white/30 mx-1"></div>
                            <Image
                                src={logoPeruri}
                                alt="Peruri"
                                width={60}
                                height={24}
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className={cn(
                                    "h-8 w-8 flex items-center justify-center rounded-full border border-white/20 transition-all hidden md:flex relative",
                                    showNotifications ? "bg-white/20" : "hover:bg-white/10"
                                )}
                            >
                                <Bell className="h-4 w-4" />
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] font-bold h-3 w-3 flex items-center justify-center rounded-full">
                                    2
                                </div>
                            </button>
                            {showNotifications && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                                    <AdminNotificationPopup />
                                </>
                            )}
                        </div>
                        <Link href="/dashboard-super-admin" className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <Home className="h-4 w-4" />
                        </Link>
                        <Link href="/dashboard-super-admin" className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <LayoutDashboard className="h-4 w-4" />
                        </Link>
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <Lightbulb className="h-4 w-4" />
                        </button>

                        {/* Profile & Role Dropdown */}
                        <div className="relative ml-2">
                            <button
                                onClick={() => setShowRole(!showRole)}
                                className={cn(
                                    "flex items-center gap-2 bg-[#7C3AED] pl-0.5 pr-3 py-0.5 rounded-full border border-white/20 shadow-sm transition-all hover:bg-[#6D28D9]",
                                    showRole && "ring-2 ring-white/20"
                                )}
                            >
                                <div className="h-6 w-6 rounded-full overflow-hidden ring-2 ring-white/20">
                                    <Image
                                        src="https://github.com/shadcn.png"
                                        alt="Profile"
                                        width={24}
                                        height={24}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-left hidden sm:block leading-tight">
                                    <p className="text-[9px] font-bold text-white uppercase tracking-wider">Santika Tri Hapsari S</p>
                                </div>
                                <ChevronDown className={cn("h-3 w-3 text-white/70 transition-transform", showRole && "rotate-180")} />
                            </button>

                            {showRole && (
                                <div className="absolute top-full mt-2 right-0 bg-white shadow-xl border border-gray-100 rounded-xl w-48 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1">
                                    <div className="bg-gray-50 px-3 py-2 border-b border-gray-100">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Switch Role</p>
                                    </div>
                                    <div className="p-1.5 space-y-1">

                                        <div className="flex items-center gap-2 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                                            <div className="h-7 w-7 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shrink-0">
                                                <Shield className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-900 leading-none mb-0.5">Super Admin</p>
                                                <p className="text-[9px] text-green-600 font-medium leading-none flex items-center gap-1">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                    Active Currently
                                                </p>
                                            </div>
                                        </div>

                                        <Link href="/dashboard-admin" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Admin PSP</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Access Dashboard</p>
                                            </div>
                                        </Link>

                                        <Link href="/dashboard-karyawan" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Karyawan</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Access Dashboard</p>
                                            </div>
                                        </Link>

                                        <Link href="/dashboard-comentor" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <GraduationCap className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Co-Mentor</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Access Dashboard</p>
                                            </div>
                                        </Link>

                                        <Link href="/dashboard-mentor" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <GraduationCap className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Mentor</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Access Dashboard</p>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className="border-t border-gray-100 p-1.5">
                                        <Link href="/select-role" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg text-gray-700 transition-colors">
                                            <RefreshCw className="h-3.5 w-3.5" />
                                            <span className="text-xs font-bold">Switch Role</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header >

            <div className="flex flex-1 relative">
                {/* Sidebar - Inline structure like Karyawan but with Super Admin content */}
                <aside className={cn(
                    "absolute lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] left-0 z-40 h-full w-56 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 flex flex-col",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}>
                    {/* Mobile Close Button */}
                    <div className="lg:hidden p-4 flex justify-end">
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <X className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>

                    <div className="flex-1 py-3 px-2 space-y-4 overflow-y-auto">

                        {/* Main */}
                        <div className="space-y-1">
                            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Overview</p>
                            <NavItem icon={LayoutDashboard} label="Dashboard" href="/dashboard-super-admin" />
                        </div>

                        {/* Management */}
                        <div className="space-y-1">
                            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">System Management</p>
                            <NavItem icon={Shield} label="Role Management" href="/dashboard-super-admin/roles" />
                            <NavItem icon={Users} label="User Management" href="/dashboard-super-admin/users" />
                        </div>

                        {/* Config */}
                        <div className="space-y-1">
                            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Configuration</p>
                            <NavItem icon={Settings} label="System Settings" href="/dashboard-super-admin/settings" />
                            <NavItem icon={FileText} label="Audit Logs" href="/dashboard-super-admin/logs" />
                        </div>

                    </div>

                    <div className="border-t mt-auto p-2">
                        <NavItem icon={User} label="My Profile" href="/dashboard-super-admin/profile" />

                    </div>
                </aside>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 overflow-auto relative">
                    {children}
                </main>
            </div>
        </div >
    )
}

// Inline Sidebar Helper Components (copied from Karyawan Layout)
function NavItem({
    icon: Icon,
    label,
    href,
    active,
    small,
    className
}: {
    icon?: any,
    label: string,
    href: string,
    active?: boolean,
    small?: boolean,
    className?: string
}) {
    const pathname = usePathname()
    const isActive = active || (href === "/dashboard-super-admin" ? pathname === "/dashboard-super-admin" : pathname?.startsWith(href))

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 transition-colors",
                "hover:bg-blue-50 hover:text-blue-600",
                isActive && "bg-blue-50 text-blue-600 font-medium hover:bg-blue-100",
                small && "py-1.5",
                className
            )}
        >
            {Icon && <Icon className={cn("h-5 w-5", isActive && "text-blue-600")} />}
            <span className={cn(small ? "text-xs" : "text-sm")}>{label}</span>
        </Link>
    )
}
