Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@exploding60 
Fanani23
/
belanja
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
belanja/frontend/src/components/Profile/MyProduct/index.js /
@Fanani23
Fanani23 checkpoin minggu
Latest commit d1dba0e 15 hours ago
 History
 1 contributor
559 lines (549 sloc)  20.6 KB

import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Modal from "react-modal";
import Logo from "../../../images/Logo.svg";
import { ReactComponent as SearchIcon } from "../../../images/Search.svg";
import { ReactComponent as FilterIcon } from "../../../images/Filter.svg";
import { ReactComponent as ShoppingIcon } from "../../../images/Shopping.svg";
import { ReactComponent as NotifIcon } from "../../../images/Bell.svg";
import { ReactComponent as MailIcon } from "../../../images/Mail.svg";
import { ReactComponent as ProfileIcon } from "../../../images/Profile.svg";
import { ReactComponent as MyProfileIcon } from "../../../images/MyProfile.svg";
import { ReactComponent as NameTagIcon } from "../../../images/NameTag.svg";
import { ReactComponent as SideHomeIcon } from "../../../images/SideHome.svg";
import { ReactComponent as SidePackageIcon } from "../../../images/SidePackage.svg";
import { ReactComponent as SideShoppingIcon } from "../../../images/SideShopping.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import TableScrollbar from "react-table-scrollbar";
import axios from "axios";
import Alert from "../../Alert";
import EditProduct from "./EditProduct";
import "@fontsource/metropolis";
import "./MyProduct.css";

const MyProduct = () => {
  // Modal
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const closeAddProductModal = () => setOpenAddProduct(false);
  const openAddProductModal = () => setOpenAddProduct(true);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const closeEditProductModal = () => setOpenEditProduct(false);
  const openEditProductModal = () => setOpenEditProduct(true);
  // Handle data
  const [product, setProduct] = useState([]);
  // Create data
  const [product_name, setProductName] = useState("");
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [category_id, setCategoryId] = useState();
  const [photo, setPhoto] = useState();
  // Edit data
  const { id } = useState();
  // Navigation
  const navigate = useNavigate();
  // Filter
  const [search, setSearch] = useState("");
  const [sortby, setSortby] = useState("price");
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState("");
  // Message
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(true);

  const getProduct = async () => {
    let token = localStorage.getItem("token");
    console.log("My token", token);
    try {
      const response = await axios.get(
        `http://localhost:3010/product?search=${search}&sortby=${sortby}&sort=${sort}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProduct(response.data.result);
      console.log(response.data.result);
    } catch (err) {
      if (err.response.msg == "Server need token!") {
        setMessageShow(true);
        setMessage({
          title: "Belum login",
          text: "Harus login",
          type: "Danger",
        });
      } else if (err.response.msg !== "Server need token!") {
        setMessageShow(true);
        setMessage({
          title: "Error",
          text: "Get data failed",
          type: "Danger",
        });
      }
    }
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("stock", stock);
      formData.append("price", price);
      formData.append("category_id", category_id);
      formData.append("photo", photo);
      console.log(formData);
      await axios.post(`http://localhost:3010/product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(product_name, stock, price, category_id, photo);
    } catch (err) {
      console.log(err);
    }
  };

  const editProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("stock", stock);
      formData.append("price", price);
      formData.append("category_id", category_id);
      formData.append("photo", photo);
      await axios.put(`http://localhost:3010/product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3010/product/${id}`);
      getProduct();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [search, sortby, sort]);
  useEffect(() => {
    getProduct();
  }, []);

  const modalStyles = {
    content: {
      width: "80%",
      height: "80%",
      top: "30%",
      left: "28%",
      right: "auto",
      bottom: "auto",
      marginRight: "-20%",
      transform: "translate(-20%, -20%)",
    },
  };

  return (
    <div className="container-home-profile">
      <div className="container-navbar">
        <nav className="navbar navbar-box">
          <ul className="navbar-nav">
            <li>
              <img src={Logo} alt="Belanja" className="logo-home" />
            </li>
            <li className="nav-item active search-box">
              <div className="position-relative">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search"
                  id="search-navbar"
                />
                <label className="search-icon" htmlFor="search-navbar">
                  <SearchIcon />
                </label>
              </div>
            </li>
            <li className="nav-item ">
              <button type="button" className="filter-box">
                <FilterIcon />
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="shopping-box">
                <ShoppingIcon />
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="notif-box">
                <NotifIcon />
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="mail-box">
                <MailIcon />
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="profile-box">
                <ProfileIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-body-profile">
        <div className="left-container">
          <div className="left-body">
            <div className="left-item my-profile">
              <div>
                <MyProfileIcon />
              </div>
              <div>
                <NameTagIcon />
              </div>
            </div>
            <div className="side-home">
              <button className="btn-round-home">
                <SideHomeIcon />
              </button>
              <Dropdown>
                <Dropdown.Toggle className="dropdown">Store</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Store Profile</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="side-package">
              <button className="btn-round-package">
                <SidePackageIcon />
              </button>
              <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="warning">
                  Product
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/my-product">My Product</Dropdown.Item>
                  <Dropdown.Item href="/selling-product">
                    Selling Product
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="side-shop">
              <button className="btn-round-shop">
                <SideShoppingIcon />
              </button>
              <Dropdown>
                <Dropdown.Toggle className="dropdown" variant="danger">
                  Order
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/my-order">My Order</Dropdown.Item>
                  <Dropdown.Item href="/order-cancel">
                    Order Cancel
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="right-body">
            <div className="rt-body">
              <div>
                <p className="txt-rt">My product</p>
              </div>
              <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      All items
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      Sold out
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      Archived
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active all-items"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    <div className="position-relative">
                      <input
                        className="rs-box"
                        type="search"
                        placeholder="Search"
                        id="right-search"
                        onChange={(e) =>
                          setSearch(e.target.value.toLowerCase())
                        }
                      />
                      <label className="rs-icon" htmlFor="right-search">
                        <SearchIcon />
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="btn-add"
                        onClick={openAddProductModal}
                      >
                        Add product
                      </button>
                      <Modal
                        isOpen={openAddProduct}
                        onRequestClose={closeAddProductModal}
                        style={modalStyles}
                      >
                        <div className="top-modal">
                          <h2 className="items-center">Add Product</h2>
                          <button onClick={closeAddProductModal}>Close</button>
                        </div>
                        <form
                          onSubmit={saveProduct}
                          className="mt-4 w-100 form-modal"
                          autoComplete="off"
                          noValidate
                        >
                          <div className="left-modal">
                            <label htmlFor="product_name">Product Name</label>
                            <label htmlFor="stock">Stock</label>
                            <label htmlFor="price">Price</label>
                            <label htmlFor="category_id">Category Id</label>
                            <label htmlFor="photo">Photo</label>
                          </div>
                          <div className="right-modal">
                            <input
                              type="text"
                              name="product_name"
                              id="product_name"
                              placeholder="Product name"
                              className="form-control md-box"
                              value={product_name}
                              onChange={(e) => setProductName(e.target.value)}
                            />
                            <input
                              type="number"
                              name="stock"
                              id="stock"
                              placeholder="Stock"
                              className="form-control md-box"
                              value={stock}
                              onChange={(e) => setStock(e.target.value)}
                            />
                            <input
                              type="number"
                              name="price"
                              id="price"
                              placeholder="Price"
                              className="form-control md-box"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                            <input
                              type="number"
                              name="category_id"
                              id="category_id"
                              placeholder="Category Id"
                              className="form-control md-box"
                              value={category_id}
                              onChange={(e) => {
                                setCategoryId(e.target.value);
                              }}
                            />
                            <input
                              type="file"
                              name="photo"
                              id="photo"
                              className=""
                              onChange={(e) => setPhoto(e.target.files[0])}
                            />
                            <div>
                              <button type="submit">save</button>
                            </div>
                          </div>
                        </form>
                      </Modal>
                    </div>

                    <div className="ap-box">
                      <div className="container d-flex flex-row top-ap">
                        <p>Filter : </p>
                        <button
                          className={`btn btn-filter ${
                            sortby === "name" ? "btn-primary" : "btn-secondary"
                          } sm-1`}
                          type="button"
                          name="filter-name"
                          onClick={() => setSortby("name")}
                        >
                          Name
                        </button>
                        <button
                          className={`btn btn-filter ${
                            sortby === "stock" ? "btn-primary" : "btn-secondary"
                          } sm-1`}
                          type="button"
                          name="filter-stock"
                          onClick={() => setSortby("stock")}
                        >
                          Stock
                        </button>
                        <button
                          className={`btn btn-filter ${
                            sortby === "price" ? "btn-primary" : "btn-secondary"
                          } sm-1`}
                          type="button"
                          name="filter-price"
                          onClick={() => setSortby("price")}
                        >
                          Price
                        </button>
                        <button
                          className={`btn btn-filter ${
                            sort === "asc" ? "btn-primary" : "btn-secondary"
                          } sm-1`}
                          type="button"
                          name="filter-asc"
                          onClick={() => setSort("asc")}
                        >
                          Asc
                        </button>
                        <button
                          className={`btn btn-filter ${
                            sort === "desc" ? "btn-primary" : "btn-secondary"
                          } sm-1`}
                          type="button"
                          name="filter-desc"
                          onClick={() => setSort("desc")}
                        >
                          Desc
                        </button>
                      </div>
                      <TableScrollbar rows={5}>
                        <table className="table container table-box">
                          <thead className="table-head">
                            <tr>
                              <th>No</th>
                              <th>Name</th>
                              <th>Stock</th>
                              <th>Price</th>
                              <th>Category</th>
                              <th>Image</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.map((item, index) => (
                              <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.product_name}</td>
                                <td>{item.stock}</td>
                                <td>{item.price}</td>
                                <td>{item.category_name}</td>
                                <td>
                                  <img
                                    src={item.photo}
                                    alt=""
                                    className="photo"
                                  />
                                </td>
                                <td className="m-2">
                                  <Link to={`/edit/${item.id}`}>Edit</Link>
                                </td>
                                <td className="m-2">
                                  <button
                                    className="btn btn-danger btn-delete "
                                    onClick={() => deleteProduct(item.id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </TableScrollbar>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    ...
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="0"
                  >
                    ...
                  </div>
                  <div
                    class="tab-pane fade"
                    id="disabled-tab-pane"
                    role="tabpanel"
                    aria-labelledby="disabled-tab"
                    tabindex="0"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
belanja/frontend/src/components at main · Fanani23/belanjabelanja/index.js at main · Fanani23/belanja