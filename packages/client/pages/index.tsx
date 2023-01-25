import { GetServerSideProps } from "next";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies } }) => {
  if (cookies.token === undefined) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};

const IndexPage = () => {
  useEffect(() => {
    console.log("Mount");
  }, []);

  return <></>;
};

export default IndexPage;
