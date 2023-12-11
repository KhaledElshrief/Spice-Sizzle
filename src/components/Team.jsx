import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
function BasicExample() {
  return (
    <>
      <TopNav />

      <Container >
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default BasicExample;
