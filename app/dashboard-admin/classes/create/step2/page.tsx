"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, User, Users, Trash2, Plus, Search, CheckCircle } from "lucide-react";

export default function CreateClassesStep2Page() {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create Classes</h1>
                    <p className="text-sm text-gray-500">Step 2: Assign Mentors & Mentees</p>
                </div>
                <Link
                    href="/dashboard-admin/classes/create"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Step 1
                </Link>
            </div>

            {/* Form Card */}
            <Card className="bg-white border-none shadow-sm max-w-2xl mx-auto">
                <CardContent className="p-8">
                    <div className="space-y-6">
                        {/* Mentor Group */}
                        <div className="space-y-4">
                            {/* Mentor Selection */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    Mentor
                                </label>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-1">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <select className="w-full border border-gray-200 rounded-lg pl-10 pr-10 py-2.5 text-sm bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer">
                                            <option>Select a Mentor</option>
                                            <option>John Doe</option>
                                            <option>Jane Smith</option>
                                            <option>Ahmad Yani</option>
                                        </select>
                                        <svg className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Team Composition Label */}
                            <div className="pt-2">
                                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-2 py-1 rounded">
                                    Team Composition
                                </span>
                            </div>

                            {/* Co-Mentors */}
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-gray-500" />
                                    <label className="text-sm font-medium text-gray-700">
                                        Co-Mentors
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Search or select Co-Mentor..."
                                            className="bg-gray-50 border-gray-200 h-10 pl-10"
                                        />
                                    </div>
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs font-bold gap-1">
                                        <Plus className="h-4 w-4" />
                                        Add Co-Mentor
                                    </Button>
                                </div>
                            </div>

                            {/* Mentees */}
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-gray-500" />
                                    <label className="text-sm font-medium text-gray-700">
                                        Mentees
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Search or select Mentee..."
                                            className="bg-gray-50 border-gray-200 h-10 pl-10"
                                        />
                                    </div>
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-xs font-bold gap-1">
                                        <Plus className="h-4 w-4" />
                                        Add Mentee
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Add Another Mentor Group */}
                        <div className="flex justify-center pt-4">
                            <Button variant="ghost" className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-sm font-medium gap-2">
                                <Plus className="h-4 w-4" />
                                Add Another Mentor Group
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Footer with Create Button */}
            <div className="flex flex-col items-center gap-4 pt-4">
                <Button
                    type="submit"
                    className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-10 px-6 text-sm font-bold rounded-full gap-2"
                >
                    <CheckCircle className="h-5 w-5" />
                    Create Now
                </Button>
                <span className="text-sm text-gray-400">2 of 2</span>
            </div>
        </div>
    );
}
