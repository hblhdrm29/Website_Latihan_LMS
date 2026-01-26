"use strict";

import { StatSection } from "@/components/admin/stat-section";
import { TDPSection } from "@/components/admin/tdp-section";
import { CombinedDonutChart } from "@/components/admin/combined-donut-chart";
import { VisitorStats } from "@/components/admin/visitor-stats";
import { DepartmentChart } from "@/components/admin/department-chart";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, School, Clock, Monitor, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminDashboardPage() {
    // Mock Data
    const onboardingStats = [
        { label: "CLASS", value: "18", icon: School, color: "bg-blue-50 text-blue-600" },
        { label: "MENTEE", value: "245", icon: Users, color: "bg-blue-50 text-blue-600" },
        { label: "MENTOR", value: "24", icon: Users, color: "bg-blue-50 text-blue-600" },
        { label: "CO-MEN", value: "30", icon: Clock, color: "bg-blue-50 text-blue-600" },
    ];

    const trainingStats = [
        { label: "USER", value: "1520", icon: Users, color: "bg-purple-50 text-purple-600" },
        { label: "NEW", value: "85", icon: Users, color: "bg-purple-50 text-purple-600" },
        { label: "COURSE", value: "62", icon: BookOpen, color: "bg-purple-50 text-purple-600" },
    ];

    // Expanded TDP Stats
    const tdpStats = [
        { label: "CLASS", value: "21", icon: "School", color: "bg-indigo-50 text-indigo-600" },
        { label: "KAUN", value: "15", icon: "Users", color: "bg-indigo-50 text-indigo-600" },
        { label: "KABIK", value: "12", icon: "Users", color: "bg-indigo-50 text-indigo-600" },
        { label: "KADEP", value: "8", icon: "Users", color: "bg-indigo-50 text-indigo-600" },
        { label: "KADIV", value: "2", icon: "Users", color: "bg-indigo-50 text-indigo-600" },
    ];

    const onboardingLeaderboard = [
        { name: "Dimas Arya Prasetya", role: "Magang Trainee Batch 2/2024", rank: 1, colorClass: "bg-green-100 text-green-600" },
        { name: "Rizky Ramadhan", role: "Magang Trainee Batch 2/2024", rank: 2, colorClass: "bg-blue-100 text-blue-600" },
        { name: "Nadia Fitria", role: "Magang Guide 09/2024", rank: 3, colorClass: "bg-purple-100 text-purple-600" },
        { name: "Farhan Maulana", role: "Magang IT Support", rank: 4, colorClass: "bg-orange-100 text-orange-600" },
        { name: "Siti Nurhaliza", role: "Magang Finance", rank: 5, colorClass: "bg-pink-100 text-pink-600" },
        { name: "Budi Santosa", role: "Magang HR", rank: 6, colorClass: "bg-teal-100 text-teal-600" },
        { name: "Dewi Lestari", role: "Magang Marketing", rank: 7, colorClass: "bg-indigo-100 text-indigo-600" },
        { name: "Andi Wijaya", role: "Magang Operations", rank: 8, colorClass: "bg-cyan-100 text-cyan-600" },
    ];

    const trainingLeaderboard = [
        { name: "Budi Santosa", role: "Staff Senior IT", rank: 1, colorClass: "bg-green-100 text-green-600" },
        { name: "Citra Kirana", role: "Junior Developer", rank: 2, colorClass: "bg-blue-100 text-blue-600" },
        { name: "Ahmad Fauzi", role: "System Analyst", rank: 3, colorClass: "bg-purple-100 text-purple-600" },
        { name: "Siti Aminah", role: "HR Specialist", rank: 4, colorClass: "bg-orange-100 text-orange-600" },
        { name: "Eko Prasetyo", role: "Project Manager", rank: 5, colorClass: "bg-red-100 text-red-600" },
        { name: "Rina Wati", role: "Business Analyst", rank: 6, colorClass: "bg-yellow-100 text-yellow-600" },
        { name: "Dedi Kurniawan", role: "DevOps Engineer", rank: 7, colorClass: "bg-lime-100 text-lime-600" },
        { name: "Maya Sari", role: "UI/UX Designer", rank: 8, colorClass: "bg-rose-100 text-rose-600" },
    ];

    // Specific Top Lists for TDP
    const topKaun = [
        { name: "Wahyu Pratama", rank: 1, initial: "W" },
        { name: "Lina Marlina", rank: 2, initial: "L" },
        { name: "Rina Wijaya", rank: 3, initial: "R" },
    ];
    const topKasek = [
        { name: "Andi Saputra", rank: 1, initial: "A" },
        { name: "Dewi Lestari", rank: 2, initial: "D" },
        { name: "Hendro Gunawan", rank: 3, initial: "H" },
    ];
    const topKadep = [
        { name: "Indra Lesmana", rank: 1, initial: "I" },
        { name: "Maya Putri", rank: 2, initial: "M" },
        { name: "Yulia Sari", rank: 3, initial: "Y" },
    ];
    const onboardingTdpList = [
        { name: "Maya Putri", rank: 1, initial: "M" },
        { name: "Kurniawan", rank: 2, initial: "K" },
        { name: "Sari lndah", rank: 3, initial: "S" },
    ];

    return (
        <div className="p-6 space-y-8 select-none">
            <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-xs text-gray-500">Admin PSP Overview</p>
            </div>

            {/* Top Row: Widgets. Using full width grid for consistency, TDP gets wider section if needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatSection
                    title="Onboarding"
                    stats={onboardingStats}
                    leaderboardTitle="LEADERBOARD MENTEE"
                    leaderboard={onboardingLeaderboard}
                />
                <StatSection
                    title="Training"
                    stats={trainingStats}
                    leaderboardTitle="LEADERBOARD EMPLOYEES"
                    leaderboard={trainingLeaderboard}
                />

                {/* Specific TDP Section */}
                <TDPSection
                    title="TDP"
                    stats={tdpStats}
                    topKaun={topKaun}
                    topKasek={topKasek}
                    topKadep={topKadep}
                    onboardingList={onboardingTdpList}
                />
            </div>

            {/* Middle Row: Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CombinedDonutChart
                    chart1={{
                        title: "Onboarding Class Status",
                        percentage: 77,
                        color: "text-blue-600",
                        label: "Onboarding (Classes)"
                    }}
                    chart2={{
                        title: "Employee Course Status",
                        percentage: 85,
                        color: "text-purple-600",
                        label: "Employees (Courses)"
                    }}
                />
                <VisitorStats />
            </div>

            {/* Bottom Row: Dept Chart & Date Filters */}
            <div className="space-y-4">
                <DepartmentChart />

                {/* Date Filter & Export */}
                <Card className="p-4 border-none shadow-sm flex flex-col md:flex-row items-end md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase">Start Date</label>
                            <div className="border rounded-md px-3 py-1.5 text-xs w-36 bg-white text-gray-600">01/10/24</div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-500 uppercase">End Date</label>
                            <div className="border rounded-md px-3 py-1.5 text-xs w-36 bg-gray-50 text-gray-600">31/10/24</div>
                        </div>
                        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-[34px] text-xs mt-4">Apply</Button>
                    </div>

                    <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-[34px] text-xs">Export</Button>
                </Card>
            </div>
        </div>
    );
}
