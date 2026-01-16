import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  tools: string[];
}

export default function TechCard({ icon: Icon, iconColor, title, tools }: TechCardProps) {
  return (
    <div className="bg-linen/5 backdrop-blur p-6 rounded-xl border border-khaki/10 card-hover">
      <div className="flex items-center mb-4">
        <Icon className={`h-6 w-6 ${iconColor} mr-2`} />
        <h3 className="text-xl font-bold text-linen">{title}</h3>
      </div>
      <div className="space-y-2">
        {tools.map((tool, idx) => (
          <div key={idx} className="text-khaki text-sm flex items-center">
            <div className={`w-2 h-2 ${iconColor.replace('text-', 'bg-')} rounded-full mr-2`}></div>
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}
