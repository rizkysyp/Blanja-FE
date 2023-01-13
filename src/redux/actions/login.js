import axios from "axios";
import { Next } from "react-bootstrap/esm/PageItem";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      process.env.REACT_APP_BACKEND_API_HOST + "/users/login",
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    Swal("Good Job!", "Login Success", "success");
    Navigate("/");
  } catch (err) {
    if (err.response.status === 402) {
      alert("Kamu Belum Verfikasi Akunmu,Silahkan Verifikasi terlebih dahulu");
      navigate("/auth");
    } else if (err.response.status === 404) {
      alert("Password atau email yang kamu masukan salah");
    }
  }
};
