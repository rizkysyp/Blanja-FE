import axios from "axios";

export const loginUser = (data, navigate) => async (dispact) => {
  try {
    dispact({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post("http://localhost:3060/users/login", data);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/product");
    console.log("user login success");
  } catch (err) {
    console.log("user login err");
    console.log(err);
  }
};
