import { Container } from "./style";
import { Row, Col } from "antd";
import Link from "next/link";

export const Header = () => {
  return (
    <Container>
      <Row justify="center">
        <Col lg={22}>
          <Link href="/">
            <a href="/">
              <h2>TSKS</h2>
              <p>Maximize productivity using tsks</p>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
