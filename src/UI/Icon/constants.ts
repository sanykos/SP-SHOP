import { CSSProperties } from "react";
import { IconProps } from "./interfaces";

export const DEFAULT_TEST_ID = "UI.Icon";

export const ICON_NAME = {
  "cart-icon": "cart",
  "xmark-icon": "xmark",
  "plus-icon": "plus",
  "minus-icon": "minus",
};

export const IconSizeToStyleObjectAssoc: {
  [T in NonNullable<IconProps["size"]>]: CSSProperties;
} = {
  16: {
    strokeWidth: 1.2,
    width: "16px",
    height: "16px",
  },
  20: {
    strokeWidth: 1.4,
    width: "20px",
    height: "20px",
  },
  24: {
    strokeWidth: 1.6,
    width: "24px",
    height: "24px",
  },
};
