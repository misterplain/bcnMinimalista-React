import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

//register
export const register = ({username, email, password}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });
//removed proxy from package.json
  // "proxy": "http://localhost:8000/v1"
  try {
    const res = await axios.post('http://localhost:8000/v1/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    //console log token generated
    console.log(res.data.token);
  } catch (error) {
    //loop through errors to get specific error
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      console.log(errors)
    }
    dispatch({
      type: REGISTER_FAIL,
    });
    console.log(error);
  }
};
