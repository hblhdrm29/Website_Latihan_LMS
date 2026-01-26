import { Card, CardContent } from "@/components/ui/card";
import { User, Construction } from "lucide-react";

export default function AdminProfilePage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
                <p className="text-sm text-gray-500">Manage your account settings and preferences.</p>
            </div>

            <div className="flex h-[400px] items-center justify-center">
                <Card className="w-full max-w-md bg-white/50 backdrop-blur-sm border-dashed">
                    <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-4">
                        <div className="p-4 bg-purple-50 rounded-full text-purple-600">
                            <Construction className="w-12 h-12" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Under Construction</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                The Profile Management module is coming soon.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
