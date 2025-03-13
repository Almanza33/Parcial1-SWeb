import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./comps.css";

function LowerBar({ title, img }) {
  return (
    <div className="low-bar">
      <Container fluid className="footer-container">
        <Row className="align-items-center">
          <Col>
            <img src={img} className="menu-img" alt="logo" />
          </Col>
          <Col>
            <h1>{title}</h1>
          </Col>
          <Col>
            <img src={img} className="menu-img" alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LowerBar;
