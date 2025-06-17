import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface AdminCardProps {
  name: string;
  position: string;
  imageSrc: string;
}

export function AdminCard({ name, position, imageSrc }: AdminCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="relative h-64">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1" style={{ color: "#3A3838" }}>
          {name}
        </h3>
        <p className="text-[#BE152F] font-medium">{position}</p>
      </CardContent>
    </Card>
  );
}
