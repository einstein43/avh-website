import { Brain, Zap, BarChart3, Cpu } from 'lucide-react';

interface IconCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  delay: number;
}

function IconCard({ icon: Icon, label, delay }: IconCardProps) {
  return (
    <div
      className="flex flex-col items-center p-6 bg-white/5 backdrop-blur rounded-xl hover:bg-white/10 transition card-hover"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="h-10 w-10 text-purple-400 mb-3" />
      <span className="text-gray-300 font-medium">{label}</span>
    </div>
  );
}

export default IconCard;
