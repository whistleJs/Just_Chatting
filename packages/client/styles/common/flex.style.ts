import styled from "@emotion/styled";

type FlexAlignType = "flex-start" | "flex-end" | "start" | "center" | "end";

type FlexStyleProps = {
  auto?: boolean;
  column?: boolean;
  gap?: string;
  alignItems?: FlexAlignType;
  alignSelf?: FlexAlignType;
  justifyContent?: FlexAlignType | "space-between";
  justifySelf?: FlexAlignType | "space-between";
};

export const FlexStyles = styled.div<FlexStyleProps>(
  ({
    auto,
    column,
    gap,
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
  }) => ({
    display: "flex",
    flex: auto ? "auto" : undefined,
    flexDirection: column ? "column" : "row",
    gap,
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
  })
);
