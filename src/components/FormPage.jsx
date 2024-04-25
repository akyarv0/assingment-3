import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function FormPage() {
    const [enteredProducts, setEnteredProducts] = useState({
        name: '',
        price: 0,
        quantity: 0,
        image: ''
    }) // [products]

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter product name..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="number" placeholder="Enter product price..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter product quantity..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="text" placeholder="Enter product image..." />
      </Form.Group>
      <Button variant="success" type="submit">
        Add to Cart
      </Button>
    </Form>
  );
}

export default FormPage;
