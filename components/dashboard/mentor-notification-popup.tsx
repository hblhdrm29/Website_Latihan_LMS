"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, User } from "lucide-react"

// Specific notifications for Mentor and Co-Mentor (Onboarding & Admin PSP)
const notifications = [
    {
        id: 2,
        category: "Onboarding",
        title: "Onboarding Status Update",
        message: "Batch 2024 Onboarding progress is now at 85%.",
        time: "2 hours ago",
        icon: Briefcase,
        color: "bg-green-100 text-green-600"
    },
    {
        id: 7,
        category: "Admin PSP",
        title: "System Maintenance",
        message: "Scheduled maintenance tonight at 23:00 WIB.",
        time: "3 hours ago",
        icon: User,
        color: "bg-blue-100 text-blue-600"
    },
    {
        id: 5,
        category: "Onboarding",
        title: "New Batch Enrollment",
        message: "Registration for Batch IV Onboarding is now open.",
        time: "1 day ago",
        icon: Briefcase,
        color: "bg-green-100 text-green-600"
    },
    {
        id: 6,
        category: "Onboarding",
        title: "Assessment Review",
        message: "Pending assessments for Batch III need review.",
        time: "2 days ago",
        icon: Briefcase,
        color: "bg-green-100 text-green-600"
    }
]

export function MentorNotificationPopup() {
    return (
        <div className="absolute top-full right-0 mt-2 w-[350px] bg-white rounded-xl shadow-xl border border-gray-100 z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
            <div className="p-3 flex items-center justify-between border-b border-gray-50 bg-gray-50/50">
                <h3 className="font-bold text-sm text-gray-900">Notifications</h3>
                <button className="text-[10px] font-bold text-blue-600 hover:text-blue-700 tracking-wider">Mark all as read</button>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 flex gap-3 items-start group cursor-pointer">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${notification.color}`}>
                            <notification.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-0.5">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{notification.category}</span>
                                <span className="text-[9px] text-gray-400">{notification.time}</span>
                            </div>
                            <h4 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">{notification.title}</h4>
                            <p className="text-xs text-gray-600 leading-snug line-clamp-2">
                                {notification.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                <Button variant="ghost" className="w-full h-8 text-xs font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-200/50">
                    View All Activity
                </Button>
            </div>
        </div>
    )
}
