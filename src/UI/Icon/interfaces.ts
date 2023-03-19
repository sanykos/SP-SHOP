import { ICON_NAME } from "./constants";

export type Icons = keyof typeof ICON_NAME;

type IconColorType = "white" | "black" | "gray";

export interface IconProps {
  id?: string;
  name: Icons;
  className?: string;
  color?: IconColorType;
  dataTestId?: string;
  size?: 20 | 24 | 16;
  svgProp?: React.SVGProps<SVGSVGElement>;
}
