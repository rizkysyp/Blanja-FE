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
import TableScrollbar from "react-table-scrollbar";

import profile from "../../image/kris.png";
import "bootstrap/dist/css/bootstrap.min.css";
function MyProducts() {
  const { REACT_BACKEND_API_HOST } = process.env;
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("price");
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
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    All Items
                  </button>
                </li>

                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="search ms-2 mt-3">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="search"
                      onChange={(e) => setSearch(e.target.value.toLowerCase())}
                      placeholder="search"
                      style={{ width: "230px" }}
                    />
                  </div>
                  <div className="d-flex flex-row gap-3 mt-3">
                    <p>Filter : </p>
                    <button
                      className={`btn ${
                        sortBy === "price" ? "btn-primary" : "btn-secondary"
                      } sm-1`}
                      type="button"
                      name="filter-name"
                      onClick={() => setSortBy("name")}
                    >
                      Name
                    </button>

                    <button
                      className={`btn ${
                        sortBy === "price" ? "btn-primary" : "btn-secondary"
                      } sm-1`}
                      type="button"
                      name="filter-price"
                      onClick={() => setSortBy("price")}
                    >
                      Price
                    </button>

                    <button
                      className={`btn ${
                        sort === "asc"
                          ? "btn-outline-primary"
                          : "btn-outline-secondary"
                      } sm-1`}
                      type="button"
                      name="filter-name"
                      onClick={() => setSort("asc")}
                    >
                      asc
                    </button>

                    <button
                      className={`btn ${
                        sort === "desc"
                          ? "btn-outline-primary"
                          : "btn-outline-secondary"
                      } sm-1`}
                      type="button"
                      name="filter-name"
                      onClick={() => setSort("desc")}
                    >
                      desc
                    </button>

                    <button
                      className={`btn btn-filter ${
                        sortBy === "price" ? "btn-primary" : "btn-secondary"
                      } sm-1`}
                      type="button"
                      name="filter-name"
                      onClick={() => setSortBy("name")}
                    >
                      Name
                    </button>
                  </div>
                  <hr></hr>

                  <Card>
                    <TableScrollbar rows={8}>
                      <Table striped responsive className="mb-1">
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
                    </TableScrollbar>
                  </Card>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  ...
                </div>
              </div>
            </Card>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default MyProducts;
