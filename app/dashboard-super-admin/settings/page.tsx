"use client"

import * as React from "react"
import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/toggle"

export default function SettingsPage() {
    return (
        <div className="p-6 max-w-[1000px] mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
                    <p className="text-sm text-gray-500">Configure global application settings and preferences.</p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <Save className="h-4 w-4 mr-2" /> Save Changes
                </Button>
            </div>

            <div className="space-y-6">
                {/* General Settings */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-50">General Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Application Name</Label>
                            <Input defaultValue="Light Peruri Administration System" />
                        </div>
                        <div className="space-y-2">
                            <Label>Contact Email</Label>
                            <Input defaultValue="admin@peruri.co.id" />
                        </div>
                        <div className="space-y-2">
                            <Label>Timezone</Label>
                            <Input defaultValue="Asia/Jakarta (GMT+7)" />
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-50">Security & Access</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Two-Factor Authentication</Label>
                                <p className="text-sm text-gray-500">Enforce 2FA for all admin accounts</p>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Public Registration</Label>
                                <p className="text-sm text-gray-500">Allow new users to register without invite</p>
                            </div>
                            <Switch checked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">Force Password Reset</Label>
                                <p className="text-sm text-gray-500">Require password change every 90 days</p>
                            </div>
                            <Switch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
