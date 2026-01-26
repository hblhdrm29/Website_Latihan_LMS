"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowLeft } from "lucide-react";

export default function CreateCoursePage() {
    const [visible, setVisible] = React.useState<"show" | "hidden">("show");
    const [enrollVisible, setEnrollVisible] = React.useState<"yes" | "no">("no");

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create Courses</h1>
                    <p className="text-sm text-gray-500">Fill in the details to add a new course</p>
                </div>
                <Link
                    href="/dashboard-admin/courses"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to List
                </Link>
            </div>

            {/* Form Card */}
            <Card className="bg-white border-none shadow-sm max-w-3xl mx-auto">
                <CardContent className="p-8">
                    <form className="space-y-4">
                        {/* Kategori Course */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Kategori Course <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer">
                                    <option>Choose Kategori</option>
                                    <option>TDP Kaun</option>
                                    <option>TDP Kasek</option>
                                    <option>Pelatihan Wajib</option>
                                    <option>Onboarding</option>
                                    <option>Technical</option>
                                    <option>Leadership</option>
                                    <option>Soft Skills</option>
                                </select>
                                <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Nama Course */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Nama Course <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter course name"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Nama Short */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Nama Short <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter short name (e.g., ISO27001)"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Kategori Jabatan */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Kategori Jabatan <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter job category"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Unit Kerja Terkait */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Unit Kerja Terkait <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter related unit"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Keywords */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Keywords <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter keywords separated by comma"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Deskripsi */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Deskripsi
                            </label>
                            <textarea
                                placeholder="Enter course description..."
                                rows={4}
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Image */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Image
                            </label>
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                                <label className="px-4 py-2 bg-gray-100 border-r border-gray-200 text-sm text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors">
                                    Choose File
                                    <input type="file" className="hidden" accept="image/*" />
                                </label>
                                <span className="px-4 py-2 text-sm text-gray-400 flex-1">No file chosen</span>
                            </div>
                        </div>

                        {/* Visible */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Visible
                            </label>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="visible"
                                        checked={visible === "show"}
                                        onChange={() => setVisible("show")}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <span className="text-sm text-gray-600">Show</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="visible"
                                        checked={visible === "hidden"}
                                        onChange={() => setVisible("hidden")}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <span className="text-sm text-gray-600">Hidden</span>
                                </label>
                            </div>
                        </div>

                        {/* Dates - Side by Side */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    Start Date <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Input
                                        placeholder="dd/mm/yyyy"
                                        className="bg-gray-50 border-gray-200 h-10 pr-10"
                                    />
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-gray-700">
                                    End Date <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Input
                                        placeholder="dd/mm/yyyy"
                                        className="bg-gray-50 border-gray-200 h-10 pr-10"
                                    />
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Kode Enroll */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Kode Enroll
                            </label>
                            <Input
                                placeholder="Enter enrollment code"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Visible (Enroll) */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Visible
                            </label>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="enrollVisible"
                                        checked={enrollVisible === "yes"}
                                        onChange={() => setEnrollVisible("yes")}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <span className="text-sm text-gray-600">Yes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="enrollVisible"
                                        checked={enrollVisible === "no"}
                                        onChange={() => setEnrollVisible("no")}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <span className="text-sm text-gray-600">No</span>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-10 px-6 text-sm font-bold"
                            >
                                Create Now
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
