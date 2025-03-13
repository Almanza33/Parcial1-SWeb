import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./comps.css";

const { useEffect, useState } = require("react");

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Card className="menu-card">
        <Row>
          <Col>
            <div
              onClick={() => navigate("/menu")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/shopping-bag-512.png"
                className="menu-img"
                alt="logo"
              />
              <h2>Menu</h2>
            </div>
          </Col>
          <Col>
            <div
              onClick={() => navigate("/store")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://www.svgrepo.com/show/116417/store.svg"
                className="menu-img"
                alt="logo"
              />
              <h2>Stores</h2>
            </div>
          </Col>
          <Col>
            <div
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                className="menu-img"
                alt="logo"
              />
              <h2>Cart</h2>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Home;
