import { Brain, Zap, BarChart3, Cpu } from 'lucide-react';

interface IconCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  delay: number;
}

function IconCard({ icon: Icon, label, delay }: IconCardProps) {
  return (
    <div
      className="flex flex-col items-center p-6 bg-linen/5 backdrop-blur rounded-xl hover:bg-linen/10 transition card-hover"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="h-10 w-10 text-sunflower mb-3" />
      <span className="text-khaki font-medium">{label}</span>
    </div>
  );
}

export default IconCard;
