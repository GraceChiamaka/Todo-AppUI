import { Container, AuthContainer } from "./style";
import { Row, Col } from "antd";
import { Header } from "@components/General";

export const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <Row justify="center">
        <Col lg={9}>
          <Container>
            <AuthContainer>{children}</AuthContainer>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
