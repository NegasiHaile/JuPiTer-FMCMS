import React, { useState } from "react";
import axios from "axios";

const MachineDistribute = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    birthdate: "",
    photo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("birthdate", newUser.birthdate);
    formData.append("name", newUser.name);

    axios
      .post("/user/addfile", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    // setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />

      <input
        type="text"
        placeholder="name"
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />

      <input
        type="date"
        name="birthdate"
        value={newUser.date}
        onChange={handleChange}
      />

      <input type="submit" />
      <div className="container">
        <img  src="\uploads\93b5950e-0794-457f-86ac-50a964f031ce-1627968722810.jpg" alt="..."/>
      </div>
    </form>
  );
};

export default MachineDistribute;
