import styled from "@emotion/styled";

type FlexAlignType = "flex-start" | "flex-end" | "start" | "center" | "end";

type FlexStyleProps = {
  auto?: boolean;
  column?: boolean;
  alignItems?: FlexAlignType;
  alignSelf?: FlexAlignType;
  justifyContent?: FlexAlignType | "space-between";
  justifySelf?: FlexAlignType | "space-between";
};

export const FlexStyles = styled.div<FlexStyleProps>(
  ({ auto, column, alignItems, alignSelf, justifyContent, justifySelf }) => ({
    display: "flex",
    flex: auto ? "auto" : undefined,
    flexDirection: column ? "column" : "row",
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
  })
);
