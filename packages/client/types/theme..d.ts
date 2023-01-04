import "@emotion/react";

declare module "@emotion/react" {
  export interface ThemeColor {
    main: {
      disabled: string;
      default: string;
      active: string;
    };
  }

  export interface Theme {
    color: ThemeColor;
  }
}
