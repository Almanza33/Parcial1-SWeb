import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/login">login</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

function NavBar2() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/DIRECTION">Home</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
