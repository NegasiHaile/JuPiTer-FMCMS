import { useState } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [User, setUser] = useState();

  if (token) {
    const getUser = async () => {
      try {
        const res = await axios.get("/user/profile", {
          headers: { Authorization: token },
        });

        setIsLogged(true);
        setUser(res.data.roleID);
        // res.data.role === "super-admin" ? setUser(true) : setUser(false)
        // console.log(res.data)
      } catch (err) {
        alert(err.response.data.msg);
      }
    };

    getUser();
  }

  return {
    isLogged: [isLogged, setIsLogged],
    User: [User, setUser],
  };
}

export default UserAPI;
