import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CLabel,
  CForm,
  CRow,
  CCol,
  CFormGroup,
  CInput,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
const branchDetail = {
  branchName: "",
  city: "",
  subCity: "",
  kebele: "",
  woreda: "",
  buildingName: "",
  officeNumber: "",
  telephone: "",
  email: "",
};
const BranchList = () => {
  const state = useContext(GlobalState);
  const [branch, setBranch] = useState(branchDetail);
  const [branchs] = state.branchAPI.branchs;
  const [callback, setCallback] = state.branchAPI.callback;
  // const [Branchs] = state.branchAPI;
  const [visible, setVisible] = useState("show d-none");

  // console.log(Branchs);

  const showModal = (e) => {
    e.preventDefault();
    setVisible("show d-block");
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setBranch({ ...branch, [name]: value });
  };
  const onSubmitOpenBranch = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/branch/open_new", { ...branch });
      alert(
        "Branch has been opened successfully, know you can assign it employees"
      );
      setCallback(!callback);
      setVisible("show d-none");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <CLabel>Jupiter Branhcs</CLabel>
          <CButton size="sm" color="info" onClick={showModal}>
            <CIcon name="cil-plus" /> Open branch
          </CButton>
        </CCardHeader>
        <CCardBody>
          {branchs.map((branch) => (
            <div key={branch._id}>{branch.branchName}</div>
          ))}
        </CCardBody>

        <CModal
          size="lg"
          alignment="center"
          className={visible}
          backdrop={true}
          keyboard={true}
          portal={false}
        >
          <CForm onSubmit={onSubmitOpenBranch}>
            <CModalHeader>
              <CModalTitle>Open-New-Branch</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    Branch Name
                    <CInput
                      id="branchName"
                      name="branchName"
                      placeholder="Enter branch unique name."
                      value={branch.branchName}
                      onChange={onChangeInput}
                      required
                    />
                  </CFormGroup>
                </CCol>

                <CCol xs="12" md="4">
                  <CFormGroup>
                    Address City
                    <CInput
                      id="city"
                      name="city"
                      placeholder="enter the branch city"
                      value={branch.city}
                      onChange={onChangeInput}
                      required
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup>
                    Sub city
                    <CInput
                      id="subCity"
                      name="subCity"
                      placeholder="Enter sub city."
                      value={branch.subCity}
                      onChange={onChangeInput}
                      required
                    />
                  </CFormGroup>
                </CCol>

                <CCol xs="12" md="4">
                  <CFormGroup>
                    Kebele
                    <CInput
                      id="kebele"
                      name="kebele"
                      placeholder="Enter kebele."
                      value={branch.kebele}
                      onChange={onChangeInput}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup>
                    Woreda
                    <CInput
                      id="woreda"
                      name="woreda"
                      placeholder="Enter woreda."
                      value={branch.woreda}
                      onChange={onChangeInput}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup>
                    Building Name
                    <CInput
                      id="buildingName"
                      name="buildingName"
                      placeholder="Enter building name."
                      value={branch.buildingName}
                      onChange={onChangeInput}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup>
                    Office Number
                    <CInput
                      id="officeNumber"
                      name="officeNumber"
                      placeholder="Enter office number"
                      value={branch.officeNumber}
                      onChange={onChangeInput}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="6">
                  <CFormGroup>
                    Telephone
                    <CInput
                      id="telephone"
                      name="telephone"
                      placeholder="Enter branch telephone"
                      value={branch.telephone}
                      onChange={onChangeInput}
                      required
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="6">
                  <CFormGroup>
                    Email
                    <CInput
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter branch email"
                      value={branch.email}
                      onChange={onChangeInput}
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton
                size="sm"
                color="danger"
                onClick={() => setVisible("show d-none")}
              >
                <CIcon name="cil-x" /> Close
              </CButton>
              <CButton type="submit" size="sm" color="success">
                <CIcon name="cil-save" /> Open Branch
              </CButton>
            </CModalFooter>
          </CForm>
        </CModal>
      </CCard>
    </>
  );
};

export default BranchList;
