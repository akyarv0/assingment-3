import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormPage() {


    
  return (
    <Form onSubmit={handleForm}>
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
      <Button variant="success" type="submit" onClick={handleForm}>
        Add to Cart
      </Button>
    </Form>
  );
}

export default FormPage;
