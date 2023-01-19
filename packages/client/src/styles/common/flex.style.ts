import styled from "@emotion/styled";

type FlexAlignType = "flex-start" | "flex-end" | "start" | "center" | "end";

interface FlexProps {
  auto?: boolean;
  column?: boolean;
  gap?: string;
  alignItems?: FlexAlignType;
  alignSelf?: FlexAlignType;
  justifyContent?: FlexAlignType | "space-between";
  justifySelf?: FlexAlignType | "space-between";
}

export const Flex = styled.div<FlexProps>(
  ({ auto, column, gap, alignItems, alignSelf, justifyContent, justifySelf }) => ({
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
