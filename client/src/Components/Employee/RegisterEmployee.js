import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
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
import Swal from "sweetalert2";

const userAttributes = {
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
  roleID: "",
};
const RegisterEmployee = (props) => {
  const state = useContext(GlobalState);
  const [branchs] = state.branchAPI.branchs;
  const [callback, setCallback] = state.UsersAPI.callback;
  const [user, setUser] = useState(userAttributes);

  console.log(props.location.state);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitRegisterUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", { ...user });
      setCallback(!callback);
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "success",
        text: res.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
      // console.log(user);
    } catch (error) {
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "error",
        text: error.response.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
    }
  };

  const clearAllFields = () => {
    setUser({ user, ...userAttributes });
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <CLabel>
            Employee Registration
            <small> Form</small>
          </CLabel>
          <CButton to="/Employee/List" size="sm" variant="outline" color="dark">
            <CIcon name="cil-list-numbered" /> Employee List
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={onSubmitRegisterUser}>
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
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
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

              <CCol xs="12" md="4">
                <CFormGroup>
                  Employee task
                  <CSelect
                    aria-label="Default select example"
                    id="roleID"
                    name="roleID"
                    onChange={onChangeInput}
                    value={user.roleID}
                    required
                  >
                    <option value="">Select employe task</option>
                    <option value="60e004d012f47733a9b2c04c">Technician</option>
                    <option value="60df1e5178ff9871852370f9">
                      Branch Admin
                    </option>
                    <option value="60df1e3878ff9871852370f8">
                      Super Admin
                    </option>
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol xs="12" md="4">
                <CFormGroup>
                  Employee branch
                  <CSelect
                    aria-label="Default select example"
                    id="branch"
                    name="branch"
                    onChange={onChangeInput}
                    value={user.branch}
                    required
                  >
                    <option value="">Select employee branch</option>
                    {branchs.map((branch) => (
                      <option value={branch.branchName} key={branch._id}>
                        {branch.branchName}
                      </option>
                    ))}
                  </CSelect>
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
                  <CIcon name="cil-save" /> Save Detail
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

export default RegisterEmployee;
