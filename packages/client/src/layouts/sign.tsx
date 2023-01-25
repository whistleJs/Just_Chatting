import { Box, Container } from "@/styles/layouts/sign.style";
import { GetServerSideProps } from "next";

interface SignLayoutProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const signLayoutServerSideProps: GetServerSideProps = async ({ req: { cookies } }) => {
  if (cookies.token !== undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};

const SignLayout = ({ title, children }: SignLayoutProps) => {
  return (
    <Container column alignItems="center" justifyContent="center">
      <Box column alignItems="center">
        <span className="sign-layout__title">{title}</span>

        {children}
      </Box>
    </Container>
  );
};

export default SignLayout;
