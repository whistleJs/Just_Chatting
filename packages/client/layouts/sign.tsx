import { FlexStyles } from "@/styles/common/flex.style";
import { SignLayoutContainerStyles } from "@/styles/layouts/sign.style";

interface SignLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default ({ children }: SignLayoutProps) => {
  return (
    <SignLayoutContainerStyles
      column
      alignItems="center"
      justifyContent="center"
    >
      <FlexStyles column>
        <span className="title">
          <sup>Just</sup>Chatting
        </span>

        {children}
      </FlexStyles>
    </SignLayoutContainerStyles>
  );
};
