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
import NavbarGuest from "../../Component/Header/Navbar";

// function EditProduct() {
//   //bikin state

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");
//   const [category_id, setCategoryID] = useState("");
//   const [photo, setPhoto] = useState(null);
//   //set parameter
//   const { id } = useParams();

//   //SET histori
//   const histori = useNavigate();

//   //set validasi
//   const [validation, setValidation] = useState({});

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     const response = await axios.get(`http://localhost:3060/products/${id}`);
//     const data = await response.data.data;
//     console.log();
//     //insert data ke state
//     setName(data.name);
//     setStock(data.stock);
//     setPrice(data.price);
//     setCategoryID(data.category_id);
//     setPhoto(data.photo);
//   };

//   // const updateData = async (hasil) => {
//   //   hasil.preventDefault();
//   //   await axios
//   //     .put(`http://localhost:3060/products/edit/${id}`, {

//   //     })
//   //     .then(() => {
//   //       //redirect
//   //       histori.push("/my-product");
//   //     })
//   //     .catch((error) => {
//   //       //assign validation on state
//   //       setValidation(error.response.data);
//   //     });
//   // };

//   const updateData = async (hasil) => {
//     hasil.preventDefault();

//     await axios
//       .patch(`http://localhost:3060/products/edit/${id}`, {
//         name: name,
//         price: price,
//         stock: stock,
//         category_id: category_id,
//         photo: photo,
//       })
//       .then(() => {
//         //redirect
//         histori.push("/my-product");
//       })
//       .catch((error) => {
//         //assign validation on state
//         setValidation(error.response.data);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <NavbarGuest />
//       </div>
//       <Container>
//         <Row>
//           <Card>
//             <Card.Body>
//               {validation.errors && (
//                 <Alert variant="danger">
//                   <ul>
//                     {validation.errors.map((error, index) => (
//                       <li key={index}>{`${error.param} : ${error.msg}`}</li>
//                     ))}
//                   </ul>
//                 </Alert>
//               )}
//               <Form onSubmit={updateData}>
//                 <Form.Group className="mb-3" controlId="name">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={name}
//                     onChange={(hasil) => setName(hasil.target.value)}
//                     placeholder="Masukkan Title"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="priceStock">
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={price}
//                     onChange={(hasil) => setPrice(hasil.target.value)}
//                     placeholder="Masukan Harga"
//                   />
//                   <Form.Label>Stock</Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={stock}
//                     onChange={(hasil) => setStock(hasil.target.value)}
//                     placeholder="Masukan Harga"
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="category">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={category_id}
//                     onChange={(hasil) => setCategoryID(hasil.target.value)}
//                     placeholder="Masukkan Title"
//                   />
//                 </Form.Group>

//                 {/* <Form.Group className="mb-3" controlId="photo">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Control
//                     type="file"
//                     value={photo}
//                     onChange={(hasil) => setPhoto(hasil.target.value)}
//                     placeholder="Masukkan Title"
//                   />
//                 </Form.Group> */}

//                 <Button variant="primary" type="submit">
//                   UPDATE
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Row>
//       </Container>
//     </div>
//   );
// }

function EditProduct() {
  //bikin state
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    category_id: "1",
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
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_API_HOST + `/products/edit/${id}`
    );
    const data = await response.data.data;
    console.log();
    //insert data ke state
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

  const updateData = (hasil) => {
    hasil.preventDefault();
    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .put(
        process.env.REACT_APP_BACKEND_API_HOST + `/products/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        //redirect
        histori.push("/my-product");
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <NavbarGuest />
      </div>
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
                    name="name"
                    type="text"
                    value={inputData.name}
                    onChange={handleChange}
                    placeholder="Masukkan Title"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="priceStock">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    name="price"
                    type="number"
                    value={inputData.price}
                    onChange={handleChange}
                    placeholder="Masukan Harga"
                  />
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    name="stock"
                    type="number"
                    value={inputData.stock}
                    onChange={handleChange}
                    placeholder="Masukan Harga"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    name="category"
                    type="number"
                    value={inputData.category_id}
                    onChange={handleChange}
                    placeholder="Masukkan Title"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="photo">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={handlePhoto}
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
    </div>
  );
}
export default EditProduct;
