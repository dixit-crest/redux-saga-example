import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_CALL_REQUEST } from "./redux/users/actionTypes";
import "./styles.css";

export default function App() {
  const usersData = useSelector((state) => state);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch({ type: API_CALL_REQUEST });
  };
  // useEffect(() => {
  //   dispatch({ type: API_CALL_REQUEST });
  //   console.log("MAIN  ", usersData);
  // }, []);

  return (
    <div className="App">
      <button onClick={() => getData()}>here</button>

      {usersData?.users?.map((user) => {
        return <p key={user.email}>{user.email}</p>;
      })}
    </div>
  );
}
