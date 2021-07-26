import React, { useState, useContext } from "react";
import axios from "axios";
// import axios from "axios";
import { GlobalState } from "../../GlobalState";
import {
  CForm,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CButton,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Swal from "sweetalert2";

const businessDetail = {
  ownerID: "",
  TIN: "",
  businessName: "",
  companyName: "",
  TL_Image: "/Public/images",
  city: "",
  subCity: "",
  kebele: "",
  woreda: "",
  buildingName: "",
  officeNumber: "",
  telephone: "",
  email: "",
  fax: "",
  branch: "",
  sw_Tech: "",
};
const BusinessRegistration = () => {
  const state = useContext(GlobalState);
  const [business, setBusiness] = useState(businessDetail);
  const [active, setActive] = useState(1);
  const [branchs] = state.branchAPI.branchs;
  const [employees] = state.UsersAPI.users;
  const [callback, setCallback] = state.BusinessAPI.callback;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setBusiness({ ...business, [name]: value });
  };
  const onSubmitSaveBusinessDetail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/business/register", { ...business });
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "success",
        text: res.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
      setCallback(!callback);
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

  return (
    <CRow>
      <CCol xs="12" className="mb-4">
        <CCard>
          <CCardHeader>
            Business which needs a machine to be assigned.
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-building"></CIcon>Profile
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-location-pin"></CIcon>Address
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-contact"></CIcon>Others
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-applications"></CIcon>Detail
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CForm onSubmit={onSubmitSaveBusinessDetail}>
                <CTabContent className="my-3">
                  <CTabPane>
                    <CRow>
                      <CCol sm="12">
                        <CFormGroup>
                          <CLabel> Bussiness TIN </CLabel>
                          <CInput
                            id="TIN"
                            name="TIN"
                            placeholder="Enter bussiness TIN."
                            value={business.TIN}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="6">
                        <CFormGroup>
                          <CLabel> Business Name </CLabel>
                          <CInput
                            id="businessName"
                            name="businessName"
                            placeholder="Enter unique bussiness name."
                            value={business.businessName}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>

                      <CCol sm="12" md="6">
                        <CFormGroup>
                          <CLabel> Company Name </CLabel>
                          <CInput
                            id="companyName"
                            name="companyName"
                            placeholder="enter campany name"
                            value={business.companyName}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                    <CRow>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> City </CLabel>
                          <CInput
                            id="city"
                            name="city"
                            placeholder="Enter city where the business is located."
                            value={business.city}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Subcity </CLabel>
                          <CInput
                            id="subCity"
                            name="subCity"
                            placeholder="Enter unique bussiness name."
                            value={business.subCity}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Woreda </CLabel>
                          <CInput
                            id="kebele"
                            name="kebele"
                            placeholder="Enter kebele"
                            value={business.kebele}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Kebele </CLabel>
                          <CInput
                            id="woreda"
                            name="woreda"
                            placeholder="Enter woreda."
                            value={business.woreda}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Building Name </CLabel>
                          <CInput
                            id="buildingName"
                            name="buildingName"
                            placeholder="Enter building name."
                            value={business.buildingName}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Office Number </CLabel>
                          <CInput
                            id="officeNumber"
                            name="officeNumber"
                            placeholder="Enter office  number."
                            value={business.officeNumber}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>

                      <CCol xs="12">
                        Contacts of the business.
                        <hr />
                      </CCol>

                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Email </CLabel>
                          <CInput
                            id="email"
                            name="email"
                            placeholder="Enter email address."
                            value={business.email}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Telephone Number </CLabel>
                          <CInput
                            id="telephone"
                            name="telephone"
                            placeholder="Enter telephone number."
                            value={business.telephone}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Fax </CLabel>
                          <CInput
                            id="fax"
                            name="fax"
                            placeholder="enter fax."
                            value={business.fax}
                            onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                    <CRow>
                      <CCol xs="12" md="6">
                        <CFormGroup>
                          <CLabel>To which jupter branch?</CLabel>
                          <CSelect
                            aria-label="Default select example"
                            id="branch"
                            name="branch"
                            onChange={onChangeInput}
                            value={business.branch}
                            required
                          >
                            <option value="">Select branch...</option>
                            {branchs.map((branch) => (
                              <option
                                value={branch.branchName}
                                key={branch._id}
                              >
                                {branch.branchName}
                              </option>
                            ))}
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol xs="12" md="6">
                        <CFormGroup>
                          <CLabel>
                            Assigne technician for this bussiness.
                          </CLabel>
                          <CSelect
                            aria-label="Default select example"
                            id="sw_Tech"
                            name="sw_Tech"
                            onChange={onChangeInput}
                            value={business.sw_Tech}
                            required
                          >
                            <option value="">Select technician...</option>
                            {employees
                              .filter(
                                (employee) =>
                                  // employee.branch === "60f92d0bb529a5128419de93" &&
                                  employee.roleID === "60e004d012f47733a9b2c04c"
                              )
                              .map((filteredEmployee) => (
                                <option
                                  value={filteredEmployee._id}
                                  key={filteredEmployee._id}
                                >
                                  {filteredEmployee.fName}{" "}
                                  {filteredEmployee.mName}{" "}
                                  {filteredEmployee.lName}
                                </option>
                              ))}
                          </CSelect>
                        </CFormGroup>
                      </CCol>

                      <CCol xs="12">
                        Business trade license in image format
                        <hr />
                      </CCol>
                    </CRow>
                    <CRow className="d-flex justify-content-center">
                      <CCol
                        xs="12"
                        sm="6"
                        className="d-flex justify-content-between"
                      >
                        <CButton
                          type="submit"
                          size="sm"
                          className="px-4"
                          color="dark"
                        >
                          <CIcon name="cil-save" /> Save Detail
                        </CButton>
                        <CButton
                          size="sm"
                          className="px-4"
                          color="danger"
                          onClick={() => setBusiness(businessDetail)}
                        >
                          <CIcon name="cil-x" /> Clear All
                        </CButton>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane></CTabPane>
                </CTabContent>
              </CForm>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default BusinessRegistration;
