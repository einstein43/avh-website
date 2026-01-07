import { Check, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  iconColor: string;
  bgGradient: string;
  borderColor: string;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon: Icon,
  iconColor,
  bgGradient,
  borderColor,
  title,
  description,
  features
}: ServiceCardProps) {
  return (
    <div className={`${bgGradient} p-8 rounded-2xl backdrop-blur ${borderColor} card-hover`}>
      <div className={`${iconColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
        <Icon className={`h-8 w-8 ${iconColor.replace('/20', '').replace('bg-', 'text-')}`} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-300 mb-6">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-400">
            <Check className={`h-5 w-5 ${iconColor.replace('/20', '').replace('bg-', 'text-')} mr-2`} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
