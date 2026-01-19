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
    Settings,
    Award,
    Briefcase,
    IdCard
} from "lucide-react"
import { cn } from "@/lib/utils"

import { NotificationPopup } from "@/components/dashboard/notification-popup"
import logoBumn from "../../public/assets/Logo_BUMN.png"
import logoPeruri from "../../public/assets/Logo_Peruri.png"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
    const [showNotifications, setShowNotifications] = React.useState(false)
    const [showRole, setShowRole] = React.useState(false)
    const [showHelp, setShowHelp] = React.useState(false)

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

                        {/* Role Badge - Interactive */}
                        <div className="relative hidden sm:flex items-center ml-1">
                            <button
                                onClick={() => setShowRole(!showRole)}
                                className={cn(
                                    "h-8 w-8 flex items-center justify-center rounded-full border border-white/20 transition-all hover:bg-white/10",
                                    showRole && "bg-white/20"
                                )}
                            >
                                <IdCard className="h-4 w-4" />
                            </button>
                            {showRole && (
                                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 rounded-xl w-36 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1">
                                    <div className="bg-gray-50 px-3 py-1.5 border-b border-gray-100 flex items-center justify-between">
                                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Current Role</span>
                                    </div>
                                    <div className="p-2">
                                        <div className="flex items-center gap-2 bg-blue-50 p-1.5 rounded-lg border border-blue-100">
                                            <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                                <User className="h-3 w-3" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-900 leading-none mb-0.5">User</p>
                                                <p className="text-[9px] text-gray-500 leading-none">Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
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
                    "absolute lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] left-0 z-40 h-full w-56 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 flex flex-col",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}>
                    {/* Mobile Close Button */}
                    <div className="lg:hidden p-4 flex justify-end">
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <X className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>

                    <div className="flex-1 py-3 px-2 space-y-1 overflow-y-auto">
                        <NavItem icon={LayoutDashboard} label="Dashboard" href="/dashboard-karyawan" />
                        <NavItem icon={BookOpen} label="My Course" href="/dashboard-karyawan/my-course" />

                        <NavGroup icon={GraduationCap} label="Course" href="/dashboard-karyawan/course" matchPath="/dashboard-karyawan/course">
                            <div className="pl-9 mt-1 mb-3">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Pelatihan Wajib</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="PKPM" href="#" small disableHover />
                                    <NavItem label="xxxxx" href="#" small disableHover />
                                    <NavItem label="xxxx" href="#" small disableHover />
                                    <NavItem label="xxxxx" href="#" small disableHover />
                                    <NavItem label="More..." href="/dashboard-karyawan/course" small disableHover />
                                </div>
                            </div>
                            {/* TDP Sub-Section */}
                            <div className="pl-9 mt-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">TDP</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="TDP Kaun" href="#" small disableHover />
                                    <NavItem label="TDP Kasek" href="#" small disableHover />
                                    <NavItem label="TDP Kadep" href="#" small disableHover />
                                    <NavItem label="More..." href="#" small disableHover />
                                </div>
                            </div>
                        </NavGroup>
                    </div>

                    <div className="border-t mt-auto p-2">
                        <NavItem icon={User} label="Profile" href="/dashboard-karyawan/profile" />
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

                    {/* Floating Help Icon */}
                    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                        {showHelp && (
                            <div className="mb-4 w-56 bg-[#27272A] rounded-xl overflow-hidden shadow-2xl text-white animate-in fade-in zoom-in-95 duration-200 origin-bottom-right border border-white/10">
                                <div className="p-2 pb-0">
                                    <button className="w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors">Help Center</button>
                                </div>
                                <div className="p-2 space-y-1">
                                    <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors">Youtube Videos</button>
                                    <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors">Legal Summary</button>
                                    <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors">Report Abuse</button>
                                </div>
                                <div className="border-t border-dashed border-white/20 mx-2 my-1"></div>
                                <div className="p-2 pt-0">
                                    <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors">Change Language...</button>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setShowHelp(!showHelp)}
                            className="h-10 w-10 bg-[#3B82F6] rounded-full text-white shadow-lg hover:bg-[#2563EB] transition-all hover:scale-110 flex items-center justify-center shrink-0"
                        >
                            <span className="font-bold text-2xl">?</span>
                        </button>
                    </div>
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
    const isActive = active || (href === "/dashboard-karyawan" ? pathname === "/dashboard-karyawan" : pathname?.startsWith(href))

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

function NavGroup({ icon: Icon, label, href, matchPath, children }: { icon: any, label: string, href?: string, matchPath?: string, children: React.ReactNode }) {
    const pathname = usePathname()
    const targetPath = matchPath || href
    const isActive = targetPath && (targetPath === "/dashboard-karyawan" ? pathname === "/dashboard-karyawan" : pathname?.startsWith(targetPath))

    const [isOpen, setIsOpen] = React.useState(!!isActive)

    React.useEffect(() => {
        if (isActive) setIsOpen(true)
    }, [isActive])

    return (
        <div>
            <div className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer",
                isActive && "bg-blue-50 text-blue-600 font-medium hover:bg-blue-100"
            )}
                onClick={() => !href && setIsOpen(!isOpen)}
            >
                {href ? (
                    <Link
                        href={href}
                        className="flex items-center gap-3 flex-1"
                        onClick={(e) => {
                            // If it's a link, we let it navigate, but also toggle if needed?
                            // Usually links shouldn't function as toggles if they navigate away.
                            // But keeping existing logic just in case.
                            if (isActive) setIsOpen(!isOpen)
                        }}
                    >
                        <Icon className={cn("h-5 w-5", isActive && "text-blue-600")} />
                        <span className="text-sm">{label}</span>
                    </Link>
                ) : (
                    <div className="flex items-center gap-3 flex-1">
                        <Icon className={cn("h-5 w-5", isActive && "text-blue-600")} />
                        <span className="text-sm">{label}</span>
                    </div>
                )}

                <button onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }} className="p-1 rounded">
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                </button>
            </div>
            {isOpen && children}
        </div>
    )
}
