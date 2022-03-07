import React from "react";
import{ Container,Row, Col } from "react-bootstrap";
const SplitScreen = ({children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Row>
        <Col>
          {left}
        </Col>
        <Col>
          {right}
        </Col>
      </Row>
    </Container>
  );
};

export default SplitScreen;
