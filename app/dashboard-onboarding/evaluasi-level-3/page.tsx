"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    ChevronDown,
    Info,
    Send,
    User,
    Building2,
    Hash
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function EvaluasiLevel3Page() {
    const [isInstructionsOpen, setIsInstructionsOpen] = useState(true)

    // Questions based on the image
    const questions = [
        "Mengaplikasikan dengan baik ilmu pengetahuan yang diperoleh setelah pelatihan.",
        "Terlihat lebih percaya diri dalam menangani pekerjaan yang berkaitan dengan materi pelatihan.",
        "Menyampaikan sebab-akibat dari suatu permasalahan berdasarkan ilmu pengetahuan yang diperoleh dalam pelatihan.",
        "Berusaha menyelesaikan pekerjaan sesuai standar kualitas yang telah ditetapkan oleh manajemen.",
        "Mampu menjelaskan kepada karyawan lain yang belum mengerti terkait materi pelatihan.",
        "Lebih antusias dalam menyelesaikan pekerjaan yang spesifik sesuai materi pelatihan.",
        "Memanfaatkan waktu kerja secara produktif.",
        "Mampu mengemukakan pendapat sesuai materi pelatihan terkait permasalahan tertentu.",
        "Melaksanakan pekerjaan dengan lebih tanggung-jawab.",
        "Menyatakan gagasan sesuai materi pelatihan untuk memperbaiki pola kerja di unit kerja.",
        "Berkenan memberikan bantuan sesuai materi pelatihan yang telah dipelajari apabila terdapat karyawan lain yang mengalami masalah.",
        "Mampu menyelesaikan pekerjaan secara lebih efektif."
    ]

    return (
        <div className="p-4 max-w-3xl mx-auto pb-24 space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[#2563EB]">
                    Evaluasi Level 3
                </h1>
                <p className="text-gray-500 mt-1 text-sm">
                    Evaluasi Perubahan Perilaku Pasca Pelatihan
                </p>
            </div>

            {/* Instruction Accordion */}
            <div className="rounded-xl overflow-hidden shadow-lg border-0 ring-1 ring-blue-100 transition-all duration-300 hover:shadow-xl">
                <button
                    onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
                    className="w-full bg-[#2563EB] p-3 flex items-center justify-between text-white"
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                            <Info className="h-4 w-4" />
                        </div>
                        <span className="font-bold text-base tracking-wide uppercase">Instruksi Pengisian</span>
                    </div>
                    <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", isInstructionsOpen ? "rotate-180" : "")} />
                </button>

                <div className={cn(
                    "bg-white transition-all duration-300 ease-in-out overflow-hidden text-sm text-gray-700",
                    isInstructionsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}>
                    <div className="p-4 space-y-2 border-t border-gray-100">
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>Berikut ini adalah lembar evaluasi perilaku setelah 6 (enam) bulan trainee mengikuti pelatihan.</li>
                            <li>Lembar Evaluasi Perilaku ini bertujuan untuk mengukur sejauh mana trainee dapat menyerap materi pembelajaran dan mengaplikasikan di unit kerja.</li>
                            <li>Pilihan nilai pada indikator terdiri dari range nilai paling rendah (1) sampai dengan paling tinggi (10).</li>
                            <li>Mohon Lembar Evaluasi Perilaku ini dinilai dengan cara memberikan tanda checklist (√) pada salah satu angka yang tertera.</li>
                            <li>Tanda checklist (√) menunjukkan nilai trainee berdasarkan masing-masing indikator.</li>
                            <li>Penilaian indikator tersebut, melengkapi pernyataan sebagai berikut :</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-4 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-200 ring-1 ring-gray-100/50 space-y-4">
                <div className="space-y-1.5">
                    <Label className="text-gray-600 font-medium text-xs flex items-center gap-2">
                        <User className="h-3.5 w-3.5 text-[#2563EB]" /> Nama Karyawan <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Choose Karyawan" className="bg-gray-50/30 border-gray-200 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all h-9 text-sm" />
                </div>
                <div className="space-y-1.5">
                    <Label className="text-gray-600 font-medium text-xs flex items-center gap-2">
                        <Hash className="h-3.5 w-3.5 text-[#2563EB]" /> NP <span className="text-red-500">*</span>
                    </Label>
                    <Input className="bg-gray-50/30 border-gray-200 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all h-9 text-sm" />
                </div>
                <div className="space-y-1.5">
                    <Label className="text-gray-600 font-medium text-xs flex items-center gap-2">
                        <Building2 className="h-3.5 w-3.5 text-[#2563EB]" /> Unit Kerja <span className="text-red-500">*</span>
                    </Label>
                    <Input className="bg-gray-50/30 border-gray-200 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all h-9 text-sm" />
                </div>
                <div className="space-y-1.5">
                    <Label className="text-gray-600 font-medium text-xs flex items-center gap-2">
                        <User className="h-3.5 w-3.5 text-[#2563EB]" /> Nama Penilai <span className="text-red-500">*</span>
                    </Label>
                    <Input className="bg-gray-50/30 border-gray-200 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all h-9 text-sm" />
                </div>
            </div>

            {/* Evaluation Table */}
            <div className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-200 ring-1 ring-gray-100/50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="bg-[#2563EB] text-white">
                                <th rowSpan={2} className="px-4 py-3 border-r border-blue-400 w-12 text-center text-xs uppercase tracking-wider">No</th>
                                <th rowSpan={2} className="px-4 py-3 border-r border-blue-400 text-xs uppercase tracking-wider">Indikator</th>
                                <th colSpan={10} className="px-2 py-2 text-center border-b border-blue-400 text-xs uppercase tracking-wider">Respon Penilaian</th>
                            </tr>
                            <tr className="bg-[#2563EB] text-white">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                    <th key={num} className="px-2 py-1 text-center border-r border-blue-400 w-10 last:border-r-0 text-xs">{num}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((q, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50 transition-colors last:border-b-0">
                                    <td className="px-4 py-3 text-center border-r text-gray-600 font-medium">{idx + 1}</td>
                                    <td className="px-4 py-3 border-r text-gray-700">{q}</td>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <td key={num} className="px-1 py-1 text-center border-r last:border-r-0">
                                            <div className="flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name={`q-${idx}`}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer"
                                                />
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
