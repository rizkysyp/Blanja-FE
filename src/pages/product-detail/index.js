// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Profile() {
//   const [data, setData] = useState([]);
//   //   const [startDate, setStartDate] = useState(new Date());
//   let users = "http://localhost:3060/products/73";
//   useEffect(() => {
//     axios
//       .get(users)
//       .then((res) => {
//         console.log("get data success");
//         setData(res.data.data);
//         console.log(res.data, "data products");
//         console.log(res.data.data[0].name, "res data");
//       })
//       .catch((err) => {
//         console.log("get data fail");
//         console.log(err);
//       });
//   }, []);
//   return(
//   {
//       data.map((item) => {
//         return <p>{item.nama}</p>;
//       });
//   }
//   );
// }
import "@fontsource/metropolis";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDefaultLocale } from "react-datepicker";
import { useParams } from "react-router-dom";
import "./product-detail.css";
import NavbarGuest from "../../Component/Header/Navbar";
import ColorPicker from "react-circle-color-picker/dist/components/color-picker";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Profile() {
  const { REACT_BACKEND_API_HOST } = process.env;
  const [data, setData] = useState([]);
  const { id } = useParams();
  //   const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let token = localStorage.getItem("token");
    console.log("my token", token);
    axios
      .get(process.env.REACT_APP_BACKEND_API_HOST + `/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("get data success");
        setData(res.data.data);
        console.log(res.data, "data products");
        console.log(res.data.data[0].name, "res data");
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  };

  const [dataCard, setDataCard] = useState([]);
  console.log(process.env.REACT_APP_BACKEND_API_HOST, "data");
  useEffect(() => {
    const getDataCard = async () => {
      try {
        let resultCard = await axios.get(
          process.env.REACT_APP_BACKEND_API_HOST +
            `/products/sort?search=&sortby=&sort=&limit=10`
        );
        setDataCard(resultCard.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataCard();
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(users)
  //     .then((res) => {
  //       console.log("get data success");
  //       setData(res.data.data);
  //       console.log(res.data, "data products");
  //       console.log(res.data.data[0].name, "res data");
  //     })
  //     .catch((err) => {
  //       console.log("get data fail");
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <div>
        <NavbarGuest />
      </div>
      <div>
        {data.map((item, i) => {
          return (
            <div key={i} className="container mt-5">
              <p>Home about </p>
              <div className="container row">
                <div className="col-6 row kiri">
                  <img src={item.photo} className="w-50"></img>
                </div>
                <div className="col-6 kanan ml-4">
                  <h3>{item.name}</h3>
                  <h7>{item.name}</h7>
                  <p className="mt-2">Price</p>
                  <h5 className>Rp. {item.price}</h5>
                  <p style={{ marginBottom: "7px" }}>Color</p>
                  <div className="d-flex flex-row gap-3">
                    <ColorPicker
                      colors={[
                        { hex: "#1A1A1A" },
                        { hex: "#D84242" },
                        { hex: "#4290D8" },
                      ]}
                    />
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <p>Size</p>
                    <p>Jumlah</p>
                  </div>

                  <div className="d-flex flex-row gap-5">
                    <button className="btn btn-outline-secondary rounded-pill btn-lg">
                      Chat
                    </button>
                    <button className="btn btn-outline-secondary rounded-pill btn-lg">
                      Add Tag
                    </button>
                    <button className="btn btn-outline-secondary rounded-pill btn-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="container">
                <h2 className="fw-bold">Informasi Product</h2>
                <h4 className="fw-bold mt-4">Condition</h4>
                <h5 className="text-danger kondisi">New</h5>
                <h5 className="fw-bold mt-4">Description</h5>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, eveniet, reiciendis consequuntur nisi sapiente ipsa
                  repudiandae unde voluptas esse accusantium officia quos
                  blanditiis! Sint quos modi quas amet repudiandae tempora.
                  Tenetur deleniti veritatis reiciendis, beatae saepe doloribus
                  hic! Doloremque illum laboriosam dolorem recusandae aperiam
                  tempora modi iusto aliquam maiores. Voluptates aspernatur vero
                  animi harum! Deleniti nihil doloremque harum eaque saepe? Unde
                  dolorum sunt nemo quisquam earum provident itaque
                  exercitationem ipsum consequatur vitae illo totam nostrum
                  natus aliquam nisi sequi porro recusandae dolorem fuga, sit,
                  cupiditate omnis facilis facere nulla. Repellat. Reiciendis
                  quam molestiae quibusdam nihil molestias laborum tempore ea
                  iure sint, quo minima est impedit vitae! Ratione beatae
                  aperiam nesciunt assumenda nisi? Nostrum deleniti obcaecati
                  sint! Ullam architecto veritatis nihil. Aspernatur est dolores
                  aperiam ipsum, perspiciatis expedita quis inventore obcaecati
                  accusamus veniam. Non ab, animi tenetur doloribus officiis
                  delectus itaque modi esse quidem quasi vitae? Dolorum earum
                </p>
                <hr></hr>
              </div>

              <div className="container">
                <div className="row">
                  <h2 className="fw-bold">Product Review</h2>
                  <div className="col-2 bg-danger ">
                    <div className="d-flex flex-row">
                      <h2>5.0</h2>
                      <h4>/10</h4>
                    </div>
                  </div>
                  <div className="col-2 bg-danger flex flex-col">
                    <div className="d-flex flex-row gap-2">
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                    </div>
                    <div className="d-flex flex-row">
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                    </div>
                    <div className="d-flex flex-row">
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                    </div>
                    <div className="d-flex flex-row">
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                      <div>anone</div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
      <div className="container mt-3">
        <div className="row mx-auto mt-5 gap-4">
          {dataCard.map((data) => (
            <Card
              className="card shadow-md"
              style={{
                width: "190px",
                marginLeft: "13px",
                textDecoration: "none",
                color: "#000000",
              }}
              to={`/product-detail/${data.id}`}
              as={Link}
            >
              {/* style={{ width: "10rem" }}> */}
              <div className="d-flex justify-content-center">
                <img className="photo" src={data.photo}></img>
              </div>
              <p className="fs-4">{data.name}</p>
              <p className="text-danger fs-4">Rp. {data.price}</p>
              <p className="fs-6">(10)</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
