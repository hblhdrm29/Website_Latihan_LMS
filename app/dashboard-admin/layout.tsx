"use strict";
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Bell, ChevronDown, User, LogOut, Home, LayoutDashboard, Lightbulb, RefreshCw, GraduationCap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import logoBumn from "../../public/assets/Logo_BUMN.png";
import logoPeruri from "../../public/assets/Logo_Peruri.png";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminNotificationPopup } from "@/components/admin/admin-notification-popup";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [showRole, setShowRole] = React.useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Admin Navbar - Purple Theme, h-10 to match Employee Dashboard size */}
            <header
                className="h-10 bg-blue-100 text-white flex items-center justify-between px-4 lg:px-6 shadow-md z-50 sticky top-0"
                style={{
                    background: "linear-gradient(90deg, #2563EB 0%, #7E22CE 100%)" // Purple gradient
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
                    {/* Icons */}
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
                                    4
                                </div>
                            </button>
                            {showNotifications && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                                    <AdminNotificationPopup />
                                </>
                            )}
                        </div>

                        <Link href="/dashboard-admin" className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <Home className="h-4 w-4" />
                        </Link>
                        <Link href="/dashboard-admin" className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
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
                                <ChevronDown className={cn("h-3 w-3 text-white transition-transform", showRole && "rotate-180")} />
                            </button>

                            {showRole && (
                                <div className="absolute top-full mt-2 right-0 bg-white shadow-xl border border-gray-100 rounded-xl w-48 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1">
                                    <div className="bg-gray-50 px-3 py-2 border-b border-gray-100">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Switch Role</p>
                                    </div>
                                    <div className="p-1.5 space-y-1">
                                        {/* 1. ACTIVE: Admin PSP */}
                                        <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-100">
                                            <div className="h-7 w-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-900 leading-none mb-0.5">Admin PSP</p>
                                                <p className="text-[9px] text-green-600 font-medium leading-none flex items-center gap-1">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                    Active Currently
                                                </p>
                                            </div>
                                        </div>

                                        {/* 2. Super Admin */}
                                        <Link href="/dashboard-super-admin" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <Shield className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Super Admin</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Access Dashboard</p>
                                            </div>
                                        </Link>

                                        {/* 3. Mentor */}
                                        <Link href="/dashboard-mentor" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Mentor</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Access Dashboard</p>
                                            </div>
                                        </Link>

                                        {/* 4. Co-Mentor */}
                                        <Link href="/dashboard-comentor" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Co-Mentor</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Access Dashboard</p>
                                            </div>
                                        </Link>

                                        {/* 5. Karyawan */}
                                        <Link href="/dashboard-karyawan" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Karyawan</p>
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
            </header>

            <div className="flex flex-1 relative">
                {/* Admin Sidebar Component - The source of truth for sidebar items */}
                <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                <main className="flex-1 overflow-auto relative">
                    {children}
                </main>
            </div>
        </div >
    );
}
