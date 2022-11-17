import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarGuest from "../../Component/Header/Navbar";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Table,
  Navbar,
} from "react-bootstrap";
import axios from "axios";
import profile from "../../image/kris.png";
import "bootstrap/dist/css/bootstrap.min.css";
function MyProducts() {
  const { REACT_BACKEND_API_HOST } = process.env;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [Hasil, setHasil] = useState([]);

  useEffect(() => {
    //panggil method "fetchData"
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const response = await axios.get("http://localhost:3060/products");

  //   const data = await response.data.data;
  //   console.log(data, "hasil");

  //   setHasil(data);
  // };

  const fetchData = async () => {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_API_HOST +
        `/products/sort?search=${search}&sortby=${sortBy}&sort=${sort}`
    );
    const data = await response.data.data;
    setHasil(data);
  };
  console.log(process.env.REACT_APP_BACKEND_API_HOST);
  const deleteData = async (id) => {
    //sending
    await axios.delete(
      process.env.REACT_APP_BACKEND_API_HOST + `/products/${id}`
    );

    //panggil function "fetchData"
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [search, sortBy, sort]);
  return (
    <div>
      <header>
        <NavbarGuest />
      </header>

      <aside className="col-3 h-100 bg-white row d-flex">as</aside>
      <main>
        <div className="container col-9">
          <Container className="container col-9 offset-3">
            <Card className="card-body">
              <h5>
                <b>My Product</b>
              </h5>
              <h6>All Items</h6>
              <div className="search ms-2">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  placeholder="search"
                />
              </div>
              <hr></hr>

              <Card>
                <Table className="mb-1">
                  <thead className="table-light">
                    <tr>
                      <th>No</th>
                      <th>Name Producs</th>
                      <th>Price</th>
                      <th>Category Name</th>
                      <th>Stock</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Hasil.map((hasil, index) => (
                      <tr key={hasil.id}>
                        <td>{index + 1}</td>
                        <td>{hasil.name}</td>
                        <td>{hasil.price}</td>
                        <td>{hasil.category}</td>
                        <td>{hasil.stock}</td>
                        <td>
                          <Button
                            as={Link}
                            to={`/my-product/${hasil.id}`}
                            variant="primary"
                            size="sm"
                            className="me-2"
                          >
                            EDIT
                          </Button>
                          <Button
                            onClick={() => deleteData(hasil.id)}
                            variant="danger"
                            size="md"
                          >
                            Delete
                          </Button>

                          <Button
                            as={Link}
                            to={`/product-detail/${hasil.id}`}
                            variant="primary"
                            size="sm"
                            className="me-2"
                          >
                            Lihat
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </Card>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default MyProducts;
