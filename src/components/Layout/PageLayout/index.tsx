import { Container } from "./style";
import { Row, Col } from "antd";
import { Header } from "@components/General";

export const PageLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={22}> {children}</Col>
        </Row>
      </Container>
    </>
  );
};
