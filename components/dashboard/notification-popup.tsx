"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const notifications = [
    {
        id: 1,
        name: "Mohammad Adree Mido",
        role: "Mentor",
        message: "Mentioned you to complete the profile registration immediately for the upcoming certification.",
        time: "1 hour ago",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adree"
    },
    {
        id: 2,
        name: "Ahmad Fauzi",
        role: "Mentor",
        message: "New course material has been uploaded to \"Advanced React Patterns\". Check it out!",
        time: "3 hours ago",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fauzi"
    },
    {
        id: 3,
        name: "Joko Anwar",
        role: "Mentor",
        message: "Your assignment \"Module 3: UI Design\" has been graded by the instructor.",
        time: "Yesterday",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joko"
    }
]

export function NotificationPopup() {
    return (
        <div className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 z-[60] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 flex items-center justify-between border-b border-gray-50">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                <button className="text-xs font-bold text-blue-600 hover:text-blue-700">Mark all as read</button>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
                {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 flex gap-3 items-start">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                            <img src={notification.avatar} alt={notification.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-sm text-gray-900">{notification.name}</h4>
                                <Badge variant="secondary" className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 font-bold h-auto border-none">
                                    {notification.role}
                                </Badge>
                            </div>
                            <p className="text-sm text-gray-600 leading-snug">
                                {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 font-medium pt-1">{notification.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100">
                <Button variant="outline" className="w-full bg-white border-gray-200 text-gray-700 font-bold hover:bg-gray-50 h-10">
                    View All Notifications
                </Button>
            </div>
        </div>
    )
}
