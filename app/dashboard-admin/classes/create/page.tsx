"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowLeft } from "lucide-react";

export default function CreateClassesPage() {
    const [visible, setVisible] = React.useState<"show" | "hidden">("show");
    const [enrollVisible, setEnrollVisible] = React.useState<"yes" | "no">("no");

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Create Classes</h1>
                    <p className="text-sm text-gray-500">Step 1: Setup class details</p>
                </div>
                <Link
                    href="/dashboard-admin/classes"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to List
                </Link>
            </div>

            {/* Form Card */}
            <Card className="bg-white border-none shadow-sm max-w-2xl mx-auto">
                <CardContent className="p-8">
                    <form className="space-y-4">
                        {/* Kategori Class */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Kategori Class <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer">
                                    <option>Choose Kategori</option>
                                    <option>Magang Trainee</option>
                                    <option>PKWT</option>
                                    <option>Regular</option>
                                </select>
                                <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Nama Class */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Nama Class <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="e.g. MT-Batch II"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Nama Short */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Nama Short <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="e.g. mt2"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Kategori Jabatan */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Kategori Jabatan <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter Job Category"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Unit Kerja Terkait */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Unit Kerja Terkait <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter Related Work Unit"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Keywords */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Keywords <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Add keywords separated by comma..."
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Mentee */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Mentee <span className="text-red-500">*</span>
                            </label>
                            <Input
                                placeholder="Enter Mentee Name"
                                className="bg-gray-50 border-gray-200 h-10"
                            />
                        </div>

                        {/* Deskripsi */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Deskripsi <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                placeholder="Enter class description..."
                                rows={4}
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Image */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Image <span className="text-red-500">*</span>
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
                                Visible <span className="text-red-500">*</span>
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
                                        placeholder="mm/dd/yyyy"
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
                                        placeholder="mm/dd/yyyy"
                                        className="bg-gray-50 border-gray-200 h-10 pr-10"
                                    />
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Kode Enroll */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-gray-700">
                                Kode Enroll <span className="text-red-500">*</span>
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

                        {/* Footer with Step Indicator and Next Button */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
                            <span className="text-sm text-gray-400">1 of 2</span>
                            <Link href="/dashboard-admin/classes/create/step2">
                                <Button
                                    type="button"
                                    className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-10 px-8 text-sm font-bold"
                                >
                                    Next
                                </Button>
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
