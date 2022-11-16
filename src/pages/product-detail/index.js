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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDefaultLocale } from "react-datepicker";

export default function Profile() {
  const [data, setData] = useState([]);
  //   const [startDate, setStartDate] = useState(new Date());
  let users = `http://localhost:3060/products/158`;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let token = localStorage.getItem("token");
    console.log("my token", token);
    axios
      .get(users, {
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
        {data.map((item, i) => {
          return (
            <div key={i} className="container">
              <p>Home about </p>
              <div className="col-12 row">
                <div className="col-6 row">
                  <img src={item.photo}></img>
                </div>
                <div className="col-6">
                  <h3>{item.name}</h3>
                  <h7>{item.name}</h7>
                  <p className="mt-2">Price</p>
                  <p className>{item.price}</p>
                  <p>Color</p>
                </div>
              </div>

              <div className="container">
                <h4>Informasi Product</h4>
                <h6>Condition</h6>
                <p className="kondisi">New</p>
                <h6>Description</h6>
                <p>
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
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-2 bg-danger">s</div>
                  <div className="col-2 bg-danger">s</div>
                </div>
                <hr />
              </div>

              <div className="row mt-3">
                <div class="card ml-3" style={{ width: "10rem" }}>
                  <img
                    src="src/img/Baju.png"
                    className="card-img-top image"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="Nama">Men's formal suit - Black & White</p>
                    <p className="harga">$ 40.00</p>
                    <p classNameName="toko">Zalora Cloth</p>
                    <div classNameName="rating">
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ width: "10rem" }}>
                  <img
                    src="src/img/Baju.png"
                    className="card-img-top image"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="Nama">Men's formal suit - Black & White</p>
                    <p className="harga">$ 40.00</p>
                    <p classNameName="toko">Zalora Cloth</p>
                    <div classNameName="rating">
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <img src="src/img/Star.svg" alt="" />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
