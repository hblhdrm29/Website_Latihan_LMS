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
    IdCard
} from "lucide-react"
import { cn } from "@/lib/utils"

import { NotificationPopup } from "@/components/dashboard/notification-popup"
import { HelpCenter } from "@/components/dashboard/help-center"

import logoBumn from "../../public/assets/Logo_BUMN.png"
import logoPeruri from "../../public/assets/Logo_Peruri.png"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
    const [showNotifications, setShowNotifications] = React.useState(false)
    const [showRole, setShowRole] = React.useState(false)

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar */}
            <header className="h-10 bg-blue-100 text-white flex items-center justify-between px-4 lg:px-6 shadow-md z-50 sticky top-0"
                style={{ background: "linear-gradient(90deg, #2563EB 0%, #7E22CE 100%)" }}
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
                        <Link href="/dashboard-onboarding" className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <Home className="h-4 w-4" />
                        </Link>
                        <Link href="/dashboard-onboarding" className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <LayoutDashboard className="h-4 w-4" />
                        </Link>
                        <button className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full border border-white/20 transition-all hidden md:flex">
                            <Lightbulb className="h-4 w-4" />
                        </button>

                        {/* Profile Pill - Compact */}
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
                                        <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-100 cursor-pointer">
                                            <div className="h-7 w-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-900 leading-none mb-0.5">Onboarding</p>
                                                <p className="text-[9px] text-green-600 font-medium leading-none flex items-center gap-1">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                                    Active Currently
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-pointer opacity-50">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <User className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Karyawan</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Not Available</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-pointer opacity-50">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <GraduationCap className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Mentor</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Not Available</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg border border-transparent hover:border-gray-100 transition-colors cursor-pointer opacity-50">
                                            <div className="h-7 w-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                                                <GraduationCap className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-gray-600 leading-none mb-0.5">Co-Mentor</p>
                                                <p className="text-[9px] text-gray-400 font-medium leading-none">Not Available</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 p-1.5">
                                        <Link href="/" className="flex items-center gap-2 hover:bg-red-50 p-2 rounded-lg text-red-600 hover:text-red-700 transition-colors">
                                            <LogOut className="h-3.5 w-3.5" />
                                            <span className="text-xs font-bold">Logout</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
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
                        <NavItem icon={LayoutDashboard} label="Dashboard" href="/dashboard-onboarding" />
                        <NavItem icon={BookOpen} label="My Classes" href="/dashboard-onboarding/my-classes" />

                        <NavGroup icon={GraduationCap} label="Class" href="/dashboard-onboarding/class" matchPath="/dashboard-onboarding/class">
                            {/* Magang Trainee Sub-Section */}
                            <div className="pl-9 mt-1 mb-3">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Magang Trainee</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="MT- Batch IV" href="#" small disableHover />
                                    <NavItem label="MT- Batch III" href="/dashboard-onboarding/class/daftar-pelatihan/mt-batch-iii" small disableHover />
                                    <NavItem label="MT- Batch II" href="/dashboard-onboarding/class/daftar-pelatihan" small disableHover />

                                    <NavItem label="More" href="/dashboard-onboarding/class" small disableHover />
                                </div>
                            </div>

                            {/* PKWT Sub-Section */}
                            <div className="pl-9 mt-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">PKWT</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="PKWT-Batch IV" href="#" small disableHover />
                                    <NavItem label="PKWT-Batch III" href="#" small disableHover />
                                    <NavItem label="PKWT-Batch II" href="#" small disableHover />
                                    <NavItem label="More" href="/dashboard-onboarding/class" small disableHover />
                                </div>
                            </div>
                        </NavGroup>

                        <NavGroup icon={ClipboardList} label="Evaluasi" matchPath="/dashboard-onboarding/evaluasi">
                            {/* Level 1 Sub-Section */}
                            <div className="pl-9 mt-1 mb-3">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Level 1</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="Reaction" href="/dashboard-onboarding/evaluasi-level-1" small />
                                </div>
                            </div>

                            {/* Level 3 Sub-Section */}
                            <div className="pl-9 mt-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Level 3</p>
                                <div className="space-y-1 border-l border-gray-100 pl-2">
                                    <NavItem label="Behavior" href="/dashboard-onboarding/evaluasi-level-3" small />
                                </div>
                            </div>
                        </NavGroup>
                    </div>

                    <div className="border-t mt-auto p-2">
                        <NavItem icon={User} label="Profile" href="/dashboard-onboarding/profile" />
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
                    <HelpCenter />
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
    const isActive = active || (href === "/dashboard-onboarding" ? pathname === "/dashboard-onboarding" : pathname?.startsWith(href))

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 transition-colors",
                !disableHover && "hover:bg-blue-50 hover:text-blue-600",
                isActive && !disableHover && "bg-blue-50 text-blue-600 font-medium hover:bg-blue-100",
                disableHover && "cursor-default",
                isSubItem && "pl-9",
                small && "py-1.5",
                className
            )}
        >
            {Icon && <Icon className={cn("h-5 w-5", isActive && !disableHover && "text-blue-600")} />}
            <span className={cn(small ? "text-xs" : "text-sm")}>{label}</span>
        </Link>
    )
}

function NavGroup({ icon: Icon, label, href, matchPath, children }: { icon: any, label: string, href?: string, matchPath?: string, children: React.ReactNode }) {
    const pathname = usePathname()
    const targetPath = matchPath || href
    const isActive = targetPath && (targetPath === "/dashboard-onboarding" ? pathname === "/dashboard-onboarding" : pathname?.startsWith(targetPath))

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
