"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    ChevronDown,
    Info,
    Calendar,
    Building2,
    User,
    Star,
    CheckCircle2,
    Send,
    FileText
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function EvaluasiPage() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        announcement: true,
        section1: true,
        section2: false,
        section3: false
    })

    const toggleSection = (key: string) => {
        setOpenSections(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <div className="p-4 max-w-3xl mx-auto pb-24 space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[#2563EB]">
                    Evaluasi Level 1
                </h1>
                <p className="text-gray-500 mt-1 text-sm">
                    Berikan umpan balik Anda untuk membantu kami meningkatkan kualitas pelatihan di masa depan.
                </p>
            </div>

            {/* Announcement & Form Section (Merged) */}
            <div className="rounded-xl overflow-hidden shadow-lg border-0 ring-1 ring-blue-100 transition-all duration-300 hover:shadow-xl">
                <button
                    onClick={() => toggleSection('announcement')}
                    className="w-full bg-[#2563EB] p-3 flex items-center justify-between text-white"
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                            <Info className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-base tracking-wide">Announcements</span>
                    </div>
                    <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", openSections['announcement'] ? "rotate-180" : "")} />
                </button>

                <div className={cn(
                    "bg-white transition-all duration-300 ease-in-out overflow-hidden",
                    openSections['announcement'] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                )}>
                    <div className="p-4 space-y-6">
                        {/* Likert Scale Info Link */}
                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                            <p className="text-[#2563EB] font-bold mb-3 text-sm">Menggunakan Skala Likert 1–4, dengan keterangan nilai sebagai berikut:</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    { val: 1, label: "Kurang", color: "bg-red-50 text-red-600 border-red-100" },
                                    { val: 2, label: "Cukup", color: "bg-orange-50 text-orange-600 border-orange-100" },
                                    { val: 3, label: "Baik", color: "bg-blue-50 text-blue-600 border-blue-100" },
                                    { val: 4, label: "Sangat Baik", color: "bg-emerald-50 text-emerald-600 border-emerald-100" }
                                ].map((item) => (
                                    <div key={item.val} className={cn("px-3 py-2 rounded-lg border text-center font-bold text-xs shadow-sm transition-transform hover:scale-105", item.color)}>
                                        {item.val} = {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* General Info Form (Moved Inside) */}
                        <div className="bg-white p-4 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-200 ring-1 ring-gray-100/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label className="text-gray-600 font-medium text-xs flex items-center gap-2">
                                        <Calendar className="h-3.5 w-3.5 text-[#2563EB]" /> Tanggal Pelatihan <span className="text-red-500">*</span>
                                    </Label>
                                    <Input type="date" className="bg-gray-50/30 border-gray-200 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all h-9 text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-gray-600 font-medium text-xs flex items-center gap-2">
                                        <Building2 className="h-3.5 w-3.5 text-[#2563EB]" /> Nama Penyelenggara <span className="text-red-500">*</span>
                                    </Label>
                                    <Input placeholder="Contoh: Divisi SDM" className="bg-gray-50/30 border-gray-200 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all h-9 text-sm" />
                                </div>
                                <div className="space-y-1.5 md:col-span-2">
                                    <Label className="text-gray-600 font-medium text-xs flex items-center gap-2">
                                        <User className="h-3.5 w-3.5 text-[#2563EB]" /> Nama Instrukur <span className="text-red-500">*</span>
                                    </Label>
                                    <Input placeholder="Nama lengkap instruktur" className="bg-gray-50/30 border-gray-200 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all h-9 text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Evaluation Sections */}
            <div className="space-y-5">
                <EvaluationSection
                    id="section1"
                    title="Bagian 1 : Penilaian Materi Pelatihan"
                    icon={FileText}
                    isOpen={openSections['section1']}
                    onToggle={() => toggleSection('section1')}
                    color="bg-[#2563EB]"
                    questions={[
                        "Materi pelatihan ini sesuai dengan harapan dan kebutuhan saya saat ini",
                        "Materi pelatihan ini dapat dipahami dengan mudah",
                        "Pengetahuan dan keterampilan yang saya pelajari dalam pelatihan ini dapat untuk diterapkan di unit kerja.",
                        "Materi pelatihan dapat mendukung rencana pengembangan karir SDM di masa depan",
                        "Materi pelatihan didukung oleh sistem informasi dan prosedur pembelajaran"
                    ]}
                />

                <EvaluationSection
                    id="section2"
                    title="Bagian 2 : Penilaian Instruktur"
                    icon={User}
                    isOpen={openSections['section2']}
                    onToggle={() => toggleSection('section2')}
                    color="bg-[#2563EB]"
                    questions={[
                        "Instruktur menguasai materi pelatihan dengan baik",
                        "Metode penyampaian materi menarik dan interaktif",
                        "Instruktur memberikan kesempatan untuk bertanya dan berdiskusi",
                        "Manajemen waktu pelatihan efektif"
                    ]}
                />

                <EvaluationSection
                    id="section3"
                    title="Bagian 3 : Penilaian Penyelenggaraan Diklat"
                    icon={Building2}
                    isOpen={openSections['section3']}
                    onToggle={() => toggleSection('section3')}
                    color="bg-[#2563EB]"
                    questions={[
                        "Fasilitas pelatihan memadai dan nyaman",
                        "Pelayanan panitia penyelenggara responsif dan membantu",
                        "Konsumsi yang disediakan layak dan higienis",
                        "Materi pelatihan diterima tepat waktu"
                    ]}
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
                <Button className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-bold text-base flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Evaluasi
                </Button>
            </div>
        </div>
    )
}

function EvaluationSection({
    id,
    title,
    icon: Icon,
    isOpen,
    onToggle,
    questions,
    color
}: {
    id: string,
    title: string,
    icon: any,
    isOpen: boolean,
    onToggle: () => void,
    questions: string[],
    color: string
}) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border-0 ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg">
            <button
                onClick={onToggle}
                className={cn(
                    "w-full p-3 flex items-center justify-between text-white transition-all duration-300",
                    color
                )}
            >
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                        <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-base tracking-wide">{title}</span>
                </div>
                <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
            </button>

            <div className={cn(
                "transition-all duration-500 ease-in-out",
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            )}>
                <div className="p-4 space-y-4">
                    {questions.map((q, idx) => (
                        <div key={idx} className="bg-white border rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group">
                            <p className="text-gray-800 font-medium text-sm mb-3 group-hover:text-blue-700 transition-colors">
                                {idx + 1}. {q}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 p-3 rounded-lg">
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Sangat Tidak Sesuai</span>
                                <div className="flex items-center gap-8 md:gap-10">
                                    {[1, 2, 3, 4].map((val) => (
                                        <label key={val} className="flex flex-col items-center gap-1.5 cursor-pointer group/label">
                                            <div className="relative">
                                                <input type="radio" name={`${id}-q${idx}`} className="peer sr-only" />
                                                <div className="h-7 w-7 rounded-full border-2 border-gray-300 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all duration-200 flex items-center justify-center group-hover/label:scale-110 shadow-sm relative z-10 bg-white">
                                                    <span className="text-xs font-bold text-gray-400 peer-checked:text-white transition-colors">{val}</span>
                                                </div>
                                                <div className="absolute inset-0 rounded-full bg-blue-100 scale-0 peer-checked:scale-150 opacity-0 peer-checked:opacity-50 transition-all duration-300 -z-0"></div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Sangat Sesuai</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
