import { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Table,
  Form,
  Alert,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  //bikin state

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category_id, setCategoryID] = useState("");
  const [photo, setPhoto] = useState("");
  const [inputData, setInputData] = useState({
    nama: "",
    stock: "",
    price: "",
    category_id: "",
  });
  //set parameter
  const { id } = useParams();

  //SET histori
  const histori = useNavigate();

  //set validasi
  const [validation, setValidation] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(`http://localhost:3060/products/${id}`);
    const data = await response.data.data;
    console.log();
    //insert data ke state
    setName(data.name);
    setStock(data.stock);
    setPrice(data.price);
    setCategoryID(data.category_id);
  };

  // const updateData = async (hasil) => {
  //   hasil.preventDefault();
  //   await axios
  //     .put(`http://localhost:3060/products/edit/${id}`, {

  //     })
  //     .then(() => {
  //       //redirect
  //       histori.push("/my-product");
  //     })
  //     .catch((error) => {
  //       //assign validation on state
  //       setValidation(error.response.data);
  //     });
  // };

  const updateData = async (hasil) => {
    hasil.preventDefault();

    await axios
      .put(`http://localhost:3060/products/edit/${id}`, {})
      .then(() => {
        //redirect
        histori.push("/my-product");
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            {validation.errors && (
              <Alert variant="danger">
                <ul>
                  {validation.errors.map((error, index) => (
                    <li key={index}>{`${error.param} : ${error.msg}`}</li>
                  ))}
                </ul>
              </Alert>
            )}
            <Form onSubmit={updateData}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(hasil) => setName(hasil.target.value)}
                  placeholder="Masukkan Title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="priceStock">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={(hasil) => setPrice(hasil.target.value)}
                  placeholder="Masukan Harga"
                />
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  value={stock}
                  onChange={(hasil) => setStock(hasil.target.value)}
                  placeholder="Masukan Harga"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="number"
                  value={category_id}
                  onChange={(hasil) => setCategoryID(hasil.target.value)}
                  placeholder="Masukkan Title"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                UPDATE
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default EditProduct;
