"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    FileText,
    ClipboardList,
    User,
    LogOut,
    ChevronDown,
    Menu,
    X,
    Bell,
    Home,
    Lightbulb,
    Settings
} from "lucide-react"
import { cn } from "@/lib/utils"

import { NotificationPopup } from "@/components/dashboard/notification-popup"
import logoBumn from "../../../public/assets/Logo_BUMN.png"
import logoPeruri from "../../../public/assets/Logo_Peruri.png"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
    const [showNotifications, setShowNotifications] = React.useState(false)

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
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
                                    8
                                </div>
                            </button>
                            {showNotifications && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                                    <NotificationPopup />
                                </>
                            )}
                        </div>
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <Home className="h-4 w-4" />
                        </button>
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <LayoutDashboard className="h-4 w-4" />
                        </button>
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <Lightbulb className="h-4 w-4" />
                        </button>

                        {/* Profile Pill - Compact */}
                        <div className="flex items-center gap-2 bg-[#7C3AED] pl-0.5 pr-3 py-0.5 rounded-full border border-white/20 shadow-sm ml-2">
                            <div className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center text-[9px] font-bold ring-2 ring-white/20 text-yellow-900">
                                ST
                            </div>
                            <div className="text-left hidden sm:block leading-tight">
                                <p className="text-[9px] font-bold text-white uppercase tracking-wider">Santika Tri Hapsari S</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/" className="p-1 hover:bg-white/10 rounded-full ml-1 block">
                        <LogOut className="h-5 w-5" />
                    </Link>
                </div>

            </header >

            <div className="flex flex-1 relative">
                {/* Sidebar */}
                <aside className={cn(
                    "absolute lg:static top-0 left-0 z-40 h-full w-56 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 flex flex-col",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}>
                    {/* Mobile Close Button */}
                    <div className="lg:hidden p-4 flex justify-end">
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <X className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>

                    <div className="flex-1 py-3 px-2 space-y-1 overflow-y-auto">
                        <NavItem icon={LayoutDashboard} label="Dashboard" href="/dashboard" />
                        <NavItem icon={BookOpen} label="My Classes" href="/dashboard/my-classes" />

                        <NavGroup icon={GraduationCap} label="Class" href="/dashboard/class">
                            {/* Magang Trainee Sub-Section */}
                            <div className="pl-9 mt-1 mb-3">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Magang Trainee</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="MT- Batch IV" href="#" small disableHover />
                                    <NavItem label="MT- Batch III" href="#" small disableHover />
                                    <NavItem label="MT- Batch II" href="#" small disableHover />
                                    <NavItem label="More" href="/dashboard/class" small disableHover />
                                </div>
                            </div>

                            {/* PKWT Sub-Section */}
                            <div className="pl-9 mt-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">PKWT</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="PKWT-Batch IV" href="#" small disableHover />
                                    <NavItem label="PKWT-Batch III" href="#" small disableHover />
                                    <NavItem label="PKWT-Batch II" href="#" small disableHover />
                                    <NavItem label="More" href="/dashboard/class" small disableHover />
                                </div>
                            </div>
                        </NavGroup>

                        <NavItem icon={ClipboardList} label="Evaluasi" href="/dashboard/evaluasi" />
                    </div>

                    <div className="border-t mt-auto p-2">
                        <NavItem icon={User} label="Profile" href="/dashboard/profile" />
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
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div >
    )
}

function NavItem({
    icon: Icon,
    label,
    href,
    active,
    isSubItem,
    small,
    className,
    disableHover
}: {
    icon?: any,
    label: string,
    href: string,
    active?: boolean,
    isSubItem?: boolean,
    small?: boolean,
    className?: string,
    disableHover?: boolean
}) {
    const pathname = usePathname()
    // Determine active state: if explicitly passed active prop is true, OR if current pathname matches href
    // Special handling for dashboard root to match exactly, others can match check if starts with
    const isActive = active || (href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href))

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 transition-colors",
                !disableHover && "hover:bg-blue-50 hover:text-blue-600",
                isActive && !disableHover && "bg-blue-50 text-blue-600 font-medium hover:bg-blue-100",
                disableHover && "cursor-default",
                isSubItem && "pl-9",
                small && "text-[11px] py-1.5",
                className
            )}
        >
            {Icon && <Icon className={cn("h-5 w-5", isActive && !disableHover && "text-blue-600")} />}
            <span className={cn("text-sm", small && "text-[12px]")}>{label}</span>
        </Link>
    )
}

function NavGroup({ icon: Icon, label, href, children }: { icon: any, label: string, href?: string, children: React.ReactNode }) {
    const pathname = usePathname()
    const isActive = href && (href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href))

    const [isOpen, setIsOpen] = React.useState(!!isActive)

    React.useEffect(() => {
        setIsOpen(!!isActive)
    }, [isActive])

    return (
        <div>
            <div className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
                isActive && "bg-blue-50 text-blue-600 font-medium hover:bg-blue-100"
            )}>
                {href ? (
                    <Link
                        href={href}
                        className="flex items-center gap-3 flex-1"
                        onClick={(e) => {
                            if (isActive) setIsOpen(!isOpen)
                        }}
                    >
                        <Icon className={cn("h-5 w-5", isActive && "text-blue-600")} />
                        <span className="text-sm">{label}</span>
                    </Link>
                ) : (
                    <div className="flex items-center gap-3 cursor-default">
                        <Icon className={cn("h-5 w-5", isActive && "text-blue-600")} />
                        <span className="text-sm">{label}</span>
                    </div>
                )}

                <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-gray-200 rounded">
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                </button>
            </div>
            {isOpen && children}
        </div>
    )
}
