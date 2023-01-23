import "@emotion/react";

declare module "@emotion/react" {
  export interface ThemeColorDetail {
    disabled: string;
    default: string;
    active: string;
  }

  export interface ThemeColor {
    main: ThemeColorDetail;
    red: ThemeColorDetail;
    orange: ThemeColorDetail;
    green: ThemeColorDetail;
    blue: ThemeColorDetail;
    gray: ThemeColorDetail;
  }

  export interface Theme {
    color: ThemeColor;
  }
}
