import styled from "@emotion/styled";

import { ThemeColors } from "@/styles/common/theme.style";
import { CommonContainerStyles } from "@/styles/common/page.style";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Container = styled(CommonContainerStyles)`
  & .sign-layout__title {
    color: white;
    font-size: 48px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  /* Input Groups */
  & .input-group {
    &:not(:first-of-type) {
      margin-top: 16px;
    }

    & input {
      margin: 6px 0 8px;
    }

    & span.error-text {
      font-size: 14px;
      color: ${ThemeColors.red.default};
    }
  }

  /* Button Groups */
  & .button-groups {
    margin-top: 25px;
  }

  /* Link Groups */
  & .link-groups {
    margin-top: 20px;
    width: 100%;

    & > a {
      font-size: 14px;
      text-decoration: underline;
    }
  }
`;
