import styled from "@emotion/styled";

import { Container as InputGroup } from "@/components/InputGroup/style";
import { Flex } from "@/styles/common/flex.style";
import { ThemeColors } from "@/styles/common/theme.style";
import { CommonContainerStyles } from "@/styles/common/page.style";

export const Container = styled(CommonContainerStyles)`
  & .sign-layout__title {
    font-size: 24px;
    font-weight: bold;
  }

  & ${InputGroup} {
    &:not(:first-of-type) {
      margin-top: 10px;
    }

    & > .input-group__message {
      color: ${ThemeColors.red.default};
    }
  }

  /* Button Groups */
  & .button-groups {
    margin-top: 25px;
  }

  /* Link Groups */
  & .link-groups {
    margin-top: 25px;

    & > a {
      color: ${ThemeColors.main.default};
      font-size: 12px;
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;

export const Box = styled(Flex)`
  padding: 40px 35px;
  width: 330px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;
