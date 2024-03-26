import { BsArrowsAngleExpand, BsArrowsCollapse } from "react-icons/bs";

export const Icon = {
  expand: BsArrowsAngleExpand,
  collapse: BsArrowsCollapse,
} as const;
export type IconName = keyof typeof Icon;
