import React, { useState } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CButton,
  CForm,
  CFormGroup,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
  CLabel,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const MachineRegister = () => {
  return (
    <CRow>
      <CCol xs="10" className="mb-4">
        <CCard>
          <CCardHeader>Employee registration</CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>Profile</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Contacts</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Role</CNavLink>
                </CNavItem>
              </CNav>
              <CForm>
                <CTabContent fade={false}>
                  <CTabPane>
                    <br />
                    <CCol xs="12">
                      <CFormGroup>
                        Phone number
                        <CInput id="street" placeholder="Enter first name" />
                      </CFormGroup>
                      <CFormGroup>
                        Email
                        <CInput
                          type="email"
                          id="street"
                          placeholder="Enter first name"
                        />
                      </CFormGroup>
                      <CFormGroup>
                        Address City
                        <CInput id="street" placeholder="Enter first name" />
                      </CFormGroup>
                      <CFormGroup>
                        Sub city
                        <CInput id="street" placeholder="Enter first name" />
                      </CFormGroup>
                      <CFormGroup>
                        Kebele
                        <CInput id="street" placeholder="Enter first name" />
                      </CFormGroup>
                      <CFormGroup>
                        Woreda
                        <CInput id="street" placeholder="Enter first name" />
                      </CFormGroup>
                    </CCol>

                    <CRow>
                      <CCol xs="4">
                        <CFormGroup>
                          <CLabel htmlFor="ccmonth">Month</CLabel>
                          <CSelect custom name="ccmonth" id="ccmonth">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol xs="4">
                        <CFormGroup>
                          <CLabel htmlFor="ccyear">Year</CLabel>
                          <CSelect custom name="ccyear" id="ccyear">
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol xs="4">
                        <CFormGroup>
                          <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                          <CInput id="cvv" placeholder="123" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CTabPane>
                  <CTabPane>
                    <CFormGroup>
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-envelope-closed" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          required
                          id="password"
                          name="password"
                          placeholder="password"
                          autoComplete="password"
                        />
                      </CInputGroup>
                    </CFormGroup>
                  </CTabPane>
                  <CTabPane>
                    <CFormGroup>
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-envelope-closed" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="password"
                          id="retypepassword"
                          name="email1"
                          placeholder="Retypepassword"
                          required
                          autoComplete="retypepassword"
                        />
                      </CInputGroup>
                    </CFormGroup>
                    <CButton color="primary" size="small">
                      <CIcon name="cil-chart-pie" /> Save
                    </CButton>
                    {/* {`3. ${lorem}`} */}
                  </CTabPane>
                </CTabContent>
              </CForm>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MachineRegister;
