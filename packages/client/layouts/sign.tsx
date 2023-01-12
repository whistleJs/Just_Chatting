import { Flex } from "@/styles/common/flex.style";
import { SignLayoutContainerStyles } from "@/styles/layouts/sign.style";

interface SignLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const SignLayout = ({ children }: SignLayoutProps) => {
  return (
    <SignLayoutContainerStyles column alignItems="center" justifyContent="center">
      <Flex column>
        <span className="title">
          <sup>Just</sup>Chatting
        </span>

        {children}
      </Flex>
    </SignLayoutContainerStyles>
  );
};

export default SignLayout;
