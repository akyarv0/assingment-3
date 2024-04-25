import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FormPage from "./FormPage";

const Products = ({ productList }) => {
  const [toggle, setToggle] = useState(false);
  const handleProductList = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Button
        variant={toggle ? "danger" : "warning"}
        className="mt-4"
        onClick={handleProductList}
      >
        {toggle ? "Hide Form" : "Show Form"}
      </Button>
      {toggle && <FormPage />}

      {/* {productList.map((product) => (
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="product.image" alt={product.image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))} */}
    </Container>
  );
};

export default Products;
