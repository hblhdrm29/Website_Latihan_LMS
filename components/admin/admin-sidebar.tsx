"use strict";
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    BookOpen,
    Book,
    BarChart2,
    ClipboardList,
    User,
    Menu,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export function AdminSidebar({
    isOpen,
    onClose
}: {
    isOpen?: boolean,
    onClose?: () => void
}) {
    const pathname = usePathname();

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

            <div className="flex-1 py-3 px-2 space-y-1 overflow-y-auto">
                <NavItem icon={LayoutDashboard} label="Dashboard" href="/dashboard-admin" />
                <NavItem icon={Users} label="Pengguna" href="/dashboard-admin/pengguna" />
                <NavItem icon={BookOpen} label="Courses" href="/dashboard-admin/courses" />
                <NavItem icon={Book} label="Classes" href="/dashboard-admin/classes" />
                <NavItem icon={BarChart2} label="Leaderboard" href="/dashboard-admin/leaderboard" />
                <NavItem icon={ClipboardList} label="Evaluasi" href="/dashboard-admin/evaluasi" />
            </div>

            <div className="border-t mt-auto p-2">
                <NavItem icon={User} label="Profile" href="/dashboard-admin/profile" />
            </div>

            {/* Logout removed as it's in the navbar profile dropdown */}
        </aside>
    );
}

function NavItem({
    icon: Icon,
    label,
    href
}: {
    icon: any,
    label: string,
    href: string
}) {
    const pathname = usePathname();
    // Simple matching. For root dashboard, exact match. For others, startsWith.
    const isActive = href === "/dashboard-admin"
        ? pathname === "/dashboard-admin"
        : pathname?.startsWith(href);

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 transition-colors",
                isActive
                    ? "bg-blue-50 text-blue-600 font-medium hover:bg-blue-100"
                    : "hover:bg-blue-50 hover:text-blue-600"
            )}
        >
            <Icon className={cn("h-5 w-5", isActive && "text-blue-600")} />
            <span className="text-sm">{label}</span>
        </Link>
    );
}
