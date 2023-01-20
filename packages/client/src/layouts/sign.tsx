import { Flex } from "@/styles/common/flex.style";
import { Container } from "@/styles/layouts/sign.style";

interface SignLayoutProps {
  title: string
  children: JSX.Element | JSX.Element[];
}

const SignLayout = ({ title, children }: SignLayoutProps) => {
  return (
    <Container column alignItems="center" justifyContent="center">
      <Flex column alignItems="center">
        <span className="sign-layout__title">
          {title}
        </span>

        {children}
      </Flex>
    </Container>
  );
};

export default SignLayout;
