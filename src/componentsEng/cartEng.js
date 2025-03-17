import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./comps.css";
import LowerBar from "./lowerBar";

const { useEffect, useState } = require("react");

function CartEng() {
  const [comidas, setComidas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL1 = "https://my.api.mockaroo.com/p1.json?key=426bb760";
        const response1 = await fetch(URL1);
        const data1 = await response1.json();
        setComidas(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(comidas);

  return (
    <Container>
      <LowerBar
        title="Cart"
        img={"https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"}
      ></LowerBar>
      <Row>
        {comidas.slice(0, 4).map((comida, index) => (
          <Col key={index} md={3}>
            <Card>
              <Card.Img variant="top" src={comida.foodUrl} />
              <Card.Body>
                <Card.Title style={{ backgroundColor: "#3260a8" }}>
                  {comida.foodName}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CartEng;
