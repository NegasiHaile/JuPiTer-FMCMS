import React, { useState, useContext } from "react";
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

const BusinessRegistration = () => {
  const state = useContext(GlobalState);
  const [active, setActive] = useState(1);
  const [branchs] = state.branchAPI.branchs;

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
                    <CIcon name="cil-building"></CIcon> Profile
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-location-pin"></CIcon> Address
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-contact"></CIcon> Others
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-fullscreen"></CIcon>Detail
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CForm>
                <CTabContent className="my-3">
                  <CTabPane>
                    <CRow>
                      <CCol sm="12">
                        <CFormGroup>
                          <CLabel> Bussiness TIN </CLabel>
                          <CInput
                            id="branchName"
                            name="branchName"
                            placeholder="Enter bussiness TIN."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="6">
                        <CFormGroup>
                          <CLabel> Business Name </CLabel>
                          <CInput
                            id="branchName"
                            name="branchName"
                            placeholder="Enter unique bussiness name."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>

                      <CCol sm="12" md="6">
                        <CFormGroup>
                          <CLabel> Company Name </CLabel>
                          <CInput
                            id="city"
                            name="city"
                            placeholder="enter campany name"
                            // value={branch.city}
                            // onChange={onChangeInput}
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
                            id="branchName"
                            name="branchName"
                            placeholder="Enter bussiness TIN."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Subcity </CLabel>
                          <CInput
                            id="branchName"
                            name="branchName"
                            placeholder="Enter unique bussiness name."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Woreda </CLabel>
                          <CInput
                            id="city"
                            name="city"
                            placeholder="enter campany name"
                            // value={branch.city}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Kebele </CLabel>
                          <CInput
                            id="branchName"
                            name="branchName"
                            placeholder="Enter bussiness TIN."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Building Name </CLabel>
                          <CInput
                            id="branchName"
                            name="branchName"
                            placeholder="Enter unique bussiness name."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Office Number </CLabel>
                          <CInput
                            id="city"
                            name="city"
                            placeholder="enter campany name"
                            // value={branch.city}
                            // onChange={onChangeInput}
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
                            id="branchName"
                            name="branchName"
                            placeholder="Enter bussiness TIN."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Telephone Number </CLabel>
                          <CInput
                            id="branchName"
                            name="branchName"
                            placeholder="Enter unique bussiness name."
                            // value={branch.branchName}
                            // onChange={onChangeInput}
                            required
                          />
                        </CFormGroup>
                      </CCol>
                      <CCol sm="12" md="4">
                        <CFormGroup>
                          <CLabel> Fax </CLabel>
                          <CInput
                            id="city"
                            name="city"
                            placeholder="enter campany name"
                            // value={branch.city}
                            // onChange={onChangeInput}
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
                            // onChange={onChangeInput}
                            // value={user.branch}
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
                            id="branch"
                            name="branch"
                            // onChange={onChangeInput}
                            // value={user.branch}
                            required
                          >
                            <option value="">Select technician...</option>
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
                      <CCol xs="12">
                        Business trade license in image format
                        <hr />
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
