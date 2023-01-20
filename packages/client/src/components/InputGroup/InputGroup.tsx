import { Container } from "./style";

interface Props {
  title: string;
  message?: string;

  children: JSX.Element;
}

export const InputGroup = ({ title, message, children }: Props) => {
  return (
    <Container column>
      <span className="input-group__title">{title}</span>

      {children}

      {message && <span className="input-group__message">{message}</span>}
    </Container>
  );
};
