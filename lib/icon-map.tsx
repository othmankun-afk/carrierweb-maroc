import {
  MapPin,
  Fuel,
  Thermometer,
  MessageSquare,
  BarChart3,
  Settings2,
  TrendingDown,
  Shield,
  Clock,
  Zap,
  CheckCircle2,
  Truck,
  Container,
  HardHat,
  Package,
  type LucideIcon,
} from "lucide-react";

/**
 * WordPress/ACF can only store an icon *name* (string), never a React element.
 * This map is the single source of truth that turns that string into the
 * actual Lucide component both list pages and detail pages render.
 *
 * When Patricia (or whoever manages content) adds a new solution/secteur in
 * WP, the ACF "icon" field must be one of the keys below (a select field is
 * recommended so she can't typo it — see README-migration.md).
 */
export const iconMap: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  fuel: Fuel,
  thermometer: Thermometer,
  "message-square": MessageSquare,
  "bar-chart-3": BarChart3,
  "settings-2": Settings2,
  "trending-down": TrendingDown,
  shield: Shield,
  clock: Clock,
  zap: Zap,
  "check-circle-2": CheckCircle2,
  truck: Truck,
  container: Container,
  "hard-hat": HardHat,
  package: Package,
};

const FallbackIcon = Settings2;

export function getIcon(key: string | null | undefined): LucideIcon {
  if (!key) return FallbackIcon;
  return iconMap[key] ?? FallbackIcon;
}

/**
 * Renders an icon by its string key. Prefer this over calling getIcon()
 * and assigning the result to a variable inside a page/component's render —
 * creating a component reference during render trips the
 * react-hooks/static-components lint rule.
 */
export function Icon({
  name,
  className,
  size,
}: {
  name: string | null | undefined;
  className?: string;
  size?: number;
}) {
  const IconComponent = getIcon(name);
  // Icons are stateless; swapping the rendered component by key is intentional.
  // eslint-disable-next-line react-hooks/static-components
  return <IconComponent className={className} size={size} />;
}
