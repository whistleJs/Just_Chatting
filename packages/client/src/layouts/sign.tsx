import { Box, Container } from "@/styles/layouts/sign.style";

interface SignLayoutProps {
  title: string
  children: JSX.Element | JSX.Element[];
}

const SignLayout = ({ title, children }: SignLayoutProps) => {
  return (
    <Container column alignItems="center" justifyContent="center">
      <Box column alignItems="center">
        <span className="sign-layout__title">
          {title}
        </span>

        {children}
      </Box>
    </Container>
  );
};

export default SignLayout;
