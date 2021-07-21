import React, { useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const clientAttributes = {
  fName: "",
  mName: "",
  lName: "",
  gender: "",
  photo: "/public/images/ng.png",
  branch: "",
  city: "",
  subCity: "",
  kebele: "",
  woreda: "",
  phoneNumber: "",
  email: "",
  roleID: "60df1e6978ff9871852370fa",
};
const RegisterClient = () => {
  const [user, setUser] = useState({
    clientAttributes,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitRegisterClient = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("/user/register", { ...user });
      alert(
        "Client allowed successfully, And a password has been sent to the " +
          user.email +
          " email!"
      );
      console.log(user);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const clearAllFields = () => {
    setUser({ user, ...clientAttributes });
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <CLabel>
            Client registration
            <small> Form</small>
          </CLabel>
          <CButton to="/Employee/List" size="sm" variant="outline" color="info">
            <CIcon name="cil-list-numbered" /> See List
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={onSubmitRegisterClient}>
            <CRow>
              <CCol xs="12" md="4">
                <CFormGroup>
                  First name
                  <CInput
                    id="fName"
                    name="fName"
                    onChange={onChangeInput}
                    value={user.fName}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="4">
                <CFormGroup>
                  Middle Name
                  <CInput
                    id="mName"
                    name="mName"
                    onChange={onChangeInput}
                    value={user.mName}
                    required
                  />
                </CFormGroup>
              </CCol>

              <CCol xs="12" md="4">
                <CFormGroup>
                  Last Name
                  <CInput
                    id="lName"
                    name="lName"
                    onChange={onChangeInput}
                    value={user.lName}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="3">
                <CFormGroup>
                  Gender
                  <CSelect
                    aria-label="Default select example"
                    id="gender"
                    name="gender"
                    onChange={onChangeInput}
                    value={user.gender}
                    required
                  >
                    <option disabled></option>
                    <option value="Mlae">Male</option>
                    <option value="Female">Fmale</option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="5">
                <CFormGroup>
                  Email
                  <CInput
                    type="email"
                    id="email"
                    name="email"
                    onChange={onChangeInput}
                    value={user.email}
                    required
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="4">
                <CFormGroup>
                  Phone-number
                  <CInput
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={onChangeInput}
                    value={user.phoneNumber}
                    required
                  />
                </CFormGroup>
              </CCol>

              <CCol xs="12" md="3">
                <CFormGroup>
                  Address City
                  <CInput
                    id="city"
                    name="city"
                    onChange={onChangeInput}
                    value={user.city}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="3">
                <CFormGroup>
                  Sub city
                  <CInput
                    id="subCity"
                    name="subCity"
                    onChange={onChangeInput}
                    value={user.subCity}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="3">
                <CFormGroup>
                  Kebele
                  <CInput
                    id="kebele"
                    name="kebele"
                    onChange={onChangeInput}
                    value={user.kebele}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="3">
                <CFormGroup>
                  Woreda
                  <CInput
                    id="woreda"
                    name="woreda"
                    onChange={onChangeInput}
                    value={user.woreda}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <br />
            <CRow className="d-flex justify-content-center">
              <CCol xs="12" sm="6" className="d-flex justify-content-between">
                <CButton
                  type="submit"
                  size="sm"
                  className="px-4"
                  color="success"
                >
                  <CIcon name="cil-save" /> Register
                </CButton>
                <CButton
                  size="sm"
                  className="px-4"
                  color="danger"
                  onClick={clearAllFields}
                >
                  <CIcon name="cil-x" /> Clear All
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>
    </>
  );
};

export default RegisterClient;
