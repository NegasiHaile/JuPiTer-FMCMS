import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import { useParams } from "react-router-dom";
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

const BusinessRegistration = () => {
  const state = useContext(GlobalState);
  const params = useParams();
  const [user] = state.UserAPI.User;
  const [credentials, setCredentials] = useState("");

  const businessDetail = {
    ownerID:  null,
    TIN: "",
    VAT: "",
    businessName: "",
    companyName: "",
    TL_Image: "",
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
    credentials: credentials,
    sw_Tech: "",
  };
  const [businesses] = state.BusinessAPI.businesses;
  const [business, setBusiness] = useState(businessDetail);
  const [active, setActive] = useState(1);
  const [branchs] = state.branchAPI.branchs;
  const [employees] = state.UsersAPI.users;
  const [callback, setCallback] = state.BusinessAPI.callback;
  const [onEdit, setOnEdit] = useState(false);

  useEffect(() => {
    if (user.userRole === "client") {
      businessDetail.ownerID = user._id;
      businessDetail.credentials = "Pending";
      setBusiness(businessDetail);
    } else {
      businessDetail.ownerID = params.id;
      businessDetail.credentials = "Accepted";
      setBusiness(businessDetail);
    }
  }, [user, params.id]);

  useEffect(() => {
    if (params.businessId) {
      setOnEdit(true);
      businesses.forEach((business) => {
        if (business._id === params.businessId) {
          setBusiness(business);
        }
      });
    } else {
      setOnEdit(false);
      setBusiness(businessDetail);
    }
  }, [params.clientid, params.businessId, businesses]);

  const onChangeInput = (e) => {
    try {
      const { name, value } = e.target;
      setBusiness({ ...business, [name]: value });
    } catch {}
  };
  const onChangeFileInput = (e) => {
    setBusiness({ ...business, TL_Image: e.target.files[0] });
  };

  const SweetAlert = (type, text) => {
    Swal.fire({
      position: "center",
      background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
      icon: type,
      text: text,
      confirmButtonColor: "#1E263C",
      showConfirmButton: false,
      // timer: 1500,
    });
  };

  const onSubmitSaveBusinessDetail = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ownerID", business.ownerID);
    formData.append("TIN", business.TIN);
    formData.append("VAT", business.VAT);
    formData.append("businessName", business.businessName);
    formData.append("companyName", business.companyName);
    formData.append("TL_Image", business.TL_Image);
    formData.append("city", business.city);
    formData.append("subCity", business.subCity);
    formData.append("kebele", business.kebele);
    formData.append("woreda", business.woreda);
    formData.append("buildingName", business.buildingName);
    formData.append("officeNumber", business.officeNumber);
    formData.append("telephone", business.telephone);
    formData.append("email", business.email);
    formData.append("fax", business.fax);
    formData.append("branch", business.branch);
    formData.append("credentials", business.credentials);
    formData.append("sw_Tech", business.sw_Tech);

    try {
      if (onEdit) {
        const res = await axios.put(`/business/edit/${params.businessId}`, {
          ...business,
        });
        SweetAlert("success", res.data.msg);
        setCallback(!callback);
      } else {
        const res = await axios.post("/business/register",  formData );
        SweetAlert("success", res.data.msg);
        setCallback(!callback);
      }
    } catch (error) {
      SweetAlert("error", error.response.data.msg);
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
                    <CIcon name="cil-applications"></CIcon>Overview
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CForm onSubmit={onSubmitSaveBusinessDetail} action='POST'  encType="multipart/form-data">
                <CTabContent className="my-3">
                  <CTabPane>
                    <CRow>
                      <CCol sm="12" md="6">
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
                          <CLabel> Bussiness VAT </CLabel>
                          <CInput
                            id="VAT"
                            name="VAT"
                            placeholder="Enter bussiness VAT."
                            value={business.VAT}
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
                            placeholder="Enter campany name"
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
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Subcity </CLabel>
                          <CInput
                            id="subCity"
                            name="subCity"
                            placeholder="Enter subcity."
                            value={business.subCity}
                            onChange={onChangeInput}
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Kebele </CLabel>
                          <CInput
                            id="kebele"
                            name="kebele"
                            placeholder="Enter kebele"
                            value={business.kebele}
                            onChange={onChangeInput}
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Woreda </CLabel>
                          <CInput
                            id="woreda"
                            name="woreda"
                            placeholder="Enter woreda."
                            value={business.woreda}
                            onChange={onChangeInput}
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
                              <option value={branch._id} key={branch._id}>
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
                            // required
                          >
                            <option value="">Select technician...</option>
                            {employees
                              .filter(
                                (employee) =>
                                  // employee.branch === "60f92d0bb529a5128419de93" &&
                                  employee.userRole === "technician"
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
                      <CCol sm="12" md="6">
                        <CFormGroup>
                          <CLabel htmlFor="formFile">
                            Upload trade licens of the business
                          </CLabel>
                          <CInput
                            id="TL_Image"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            name="TL_Image"
                            onChange={onChangeFileInput}
                            required />
                        </CFormGroup>
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
                        {!onEdit && (
                          <CButton
                            size="sm"
                            className="px-4"
                            color="danger"
                            onClick={() => setBusiness(businessDetail)}
                          >
                            <CIcon name="cil-x" /> Clear All
                          </CButton>
                        )}
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
