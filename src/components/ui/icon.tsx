import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "Circle",
}: IconProps) => {
  const IconComponent =
    (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, falling back to ${fallback}`);
    return <LucideIcons.Circle size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
